const webpack = require('webpack');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const SystemBellPlugin = require('system-bell-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const StyleLintPlugin = require('stylelint-webpack-plugin');
const PACKAGE = require('./package.json');

const sourcePath = path.join(__dirname, './src');
const publicPath = path.join(__dirname, './build');

module.exports = function(env, argv) {
    const isProd = argv.mode === 'production';

    const plugins = [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(argv.mode)
        }),
        new WebpackBar({ name: 'portfolio', color: '#269bda' })
        //new BundleAnalyzerPlugin()
    ];

    if (isProd) {
        plugins.push(
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'index.html'
            }),
            new CopyWebpackPlugin(['netlify', 'pwa']),
            new ManifestPlugin({
                fileName: 'asset-manifest.json'
            }),
            new SWPrecacheWebpackPlugin({
                // By default, a cache-busting query parameter is appended to requests
                // used to populate the caches, to ensure the responses are fresh.
                // If a URL is already hashed by Webpack, then there is no concern
                // about it being stale, and the cache-busting can be skipped.
                dontCacheBustUrlsMatching: /\.\w{8}\./,
                filename: 'service-worker.js',
                // staticFileGlobs: ['/vendor.bundle.js'],
                logger(message) {
                    if (message.indexOf('Total precache size is') === 0) {
                        // This message occurs for every build and is a bit too noisy.
                        return;
                    }
                    console.log(message);
                },
                // minify and uglify the script
                minify: true,
                // For unknown URLs, fallback to the index page
                navigateFallback: '/index.html',
                // Don't precache sourcemaps (they're large) and build asset manifest:
                staticFileGlobsIgnorePatterns: [
                    /\.map$/,
                    /asset-manifest\.json$/,
                    /_redirects$/,
                    /[0-9].bundle.js$/
                ]
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
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
            new MiniCssExtractPlugin({
                filename: 'styles.css',
                chunkFilename: '[id].css'
            })
        );
    } else {
        plugins.push(
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
                    logPrefix: 'Portfolio'
                },
                // prevent BrowserSync from reloading the page
                // and let Webpack Dev Server take care of this
                {
                    reload: true
                }
            ),
            new CaseSensitivePathsPlugin(),
            new FriendlyErrorsWebpackPlugin(),
            new SystemBellPlugin(),
            new DuplicatePackageCheckerPlugin(),
            new StyleLintPlugin({
                files: './app/assets/scss/*.scss'
            })
        );
    }

    return {
        devtool: isProd ? 'hidden-source-map' : 'cheap-module-source-map',
        context: sourcePath,
        entry: {
            js: [
                // react-error-overlay
                !isProd && 'react-dev-utils/webpackHotDevClient',
                // fetch polyfill
                isProd && 'whatwg-fetch',
                // app entry
                'app.js'
            ].filter(Boolean)
        },
        output: {
            path: publicPath,
            filename: '[name].bundle.js',
            devtoolModuleFilenameTemplate: isProd
                ? info => path.relative(sourcePath, info.absoluteResourcePath).replace(/\\/g, '/')
                : info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
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
                    test: /\.json$/,
                    loader: 'json-loader',
                    type: 'javascript/auto'
                },

                {
                    test: /\.(scss|css)$/,
                    use: isProd
                        ? [
                              {
                                  loader: MiniCssExtractPlugin.loader
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
                        : [
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
                    use: ['file-loader']
                }
            ]
        },

        resolve: {
            extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
            modules: [path.resolve(__dirname, 'node_modules'), sourcePath]
        },

        plugins,
        // split out vendor js into its own bundle
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        chunks: 'initial'
                    }
                }
            }
        },

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
            before: function(app) {
                // This lets us open files from the runtime error overlay.
                app.use(errorOverlayMiddleware());
            }
        }
    };
};
