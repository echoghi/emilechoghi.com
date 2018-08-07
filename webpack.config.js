const webpack = require('webpack');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const SystemBellPlugin = require('system-bell-webpack-plugin');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const StyleLintPlugin = require('stylelint-webpack-plugin');
const PACKAGE = require('./package.json');

const sourcePath = path.join(__dirname, './src');
const publicPath = path.join(__dirname, './build');

module.exports = function(env) {
    const nodeEnv = env && env.prod ? 'production' : 'development';
    const isProd = nodeEnv === 'production';

    const plugins = [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: '[name].bundle.js'
        }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(nodeEnv)
        }),
        new webpack.NamedModulesPlugin()
    ];

    if (isProd) {
        plugins.push(
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'index.html'
            }),
            new CopyWebpackPlugin([{ from: 'pwa' }]),
            new ManifestPlugin({
                fileName: 'asset-manifest.json'
            }),
            new CompressionPlugin({
                asset: '[path].gz[query]',
                algorithm: 'gzip',
                test: /\.js$|\.css$/,
                minRatio: 0.9,
                deleteOriginalAssets: false
            }),
            new SWPrecacheWebpackPlugin({
                // By default, a cache-busting query parameter is appended to requests
                // used to populate the caches, to ensure the responses are fresh.
                // If a URL is already hashed by Webpack, then there is no concern
                // about it being stale, and the cache-busting can be skipped.
                dontCacheBustUrlsMatching: /\.\w{8}\./,
                filename: 'service-worker.js',
                logger(message) {
                    if (message.indexOf('Total precache size is') === 0) {
                        // This message occurs for every build and is a bit too noisy.
                        return;
                    }
                    console.log(message);
                },
                minify: true, // minify and uglify the script
                navigateFallback: '/index.html',
                staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    screw_ie8: true,
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true
                },
                output: {
                    comments: false
                }
            }),
            new webpack.optimize.AggressiveMergingPlugin(),
            new webpack.BannerPlugin({
                banner:
                    `Emile Choghi's Portfolio ` +
                    `Version: ` +
                    PACKAGE.version +
                    ` Date: ` +
                    parseInt(new Date().getMonth() + 1) +
                    `/` +
                    new Date().getDate() +
                    `/` +
                    new Date().getFullYear() +
                    ` @ ` +
                    new Date().getHours() +
                    `:` +
                    new Date().getMinutes()
            }),
            new ExtractTextPlugin('styles.css')
        );
    } else {
        plugins.push(
            new BundleAnalyzerPlugin(),
            new webpack.DefinePlugin({
                NODE_ENV: JSON.stringify(nodeEnv)
            }),
            new webpack.HotModuleReplacementPlugin(),
            new BrowserSyncPlugin(
                // BrowserSync options
                {
                    host: 'localhost',
                    port: 8080,
                    open: false,
                    // proxy the Webpack Dev Server endpoint
                    // (which should be serving on http://localhost:8080/)
                    // through BrowserSync
                    proxy: 'http://localhost:8080/',
                    logPrefix: 'Portfolio - App'
                },
                // plugin options
                {
                    reload: true
                }
            ),
            new CaseSensitivePathsPlugin(),
            new FriendlyErrorsWebpackPlugin(),
            new SystemBellPlugin(),
            new NyanProgressPlugin(),
            new DuplicatePackageCheckerPlugin(),
            new StyleLintPlugin({
                files: './app/assets/scss/*.scss'
            })
        );
    }

    return {
        devtool: isProd ? 'hidden-source-map' : 'eval',
        context: sourcePath,
        entry: {
            js: 'app.js',
            vendor: ['react']
        },
        output: {
            path: publicPath,
            filename: '[name].bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'html-loader'
                    }
                },

                {
                    test: /\.js$/,
                    enforce: 'pre',
                    loader: 'eslint-loader',
                    options: {
                        fix: false
                    }
                },

                {
                    test: /\.(scss|css)$/,
                    use: isProd // If Prod
                        ? ExtractTextPlugin.extract({
                              fallback: 'style-loader',
                              use: ['css-loader', 'sass-loader']
                          })
                        : // Else

                          [
                              {
                                  loader: 'style-loader',
                                  options: {
                                      sourceMap: false
                                  }
                              },
                              {
                                  loader: 'css-loader',
                                  options: {
                                      sourceMap: true
                                  }
                              },
                              {
                                  loader: 'sass-loader',
                                  options: {
                                      sourceMap: true
                                  }
                              }
                          ]
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
                },
                {
                    test: /\.(ttf|eot|svg|woff|woff2)(\?[a-z0-9]+)?$/,
                    loader: 'file-loader'
                },
                {
                    test: /\.(png|jpg)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                query: {
                                    name: 'app/assets/images/[name].[ext]'
                                }
                            }
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                query: {
                                    mozjpeg: {
                                        progressive: true
                                    },
                                    gifsicle: {
                                        interlaced: true
                                    },
                                    optipng: {
                                        optimizationLevel: 7
                                    }
                                }
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
            modules: [path.resolve(__dirname, 'node_modules'), sourcePath]
        },

        plugins,

        performance: isProd && {
            maxAssetSize: 600000,
            maxEntrypointSize: 600000,
            hints: 'warning'
        },

        stats: {
            colors: {
                green: '\u001b[32m'
            }
        },

        devServer: {
            contentBase: './src',
            historyApiFallback: true,
            port: 8080,
            compress: isProd,
            inline: !isProd,
            hot: false,
            quiet: true,
            overlay: {
                errors: true,
                warnings: true
            },
            stats: {
                assets: true,
                children: false,
                chunks: false,
                hash: false,
                modules: false,
                publicPath: false,
                timings: true,
                version: false,
                warnings: true,
                colors: {
                    green: '\u001b[32m'
                }
            }
        }
    };
};
