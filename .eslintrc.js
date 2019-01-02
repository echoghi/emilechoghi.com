module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true
    },

    plugins: ['react'],

    extends: ['plugin:react/recommended', 'prettier'],

    parser: 'babel-eslint',

    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-var': 'error',
        'no-unused-vars': 'error',
        'comma-dangle': ['error', 'never'],
        eqeqeq: ['error', 'always'],
        'no-multiple-empty-lines': [2, { max: 1 }],
        'no-multi-spaces': [2],
        'react/prop-types': 0,
        'react/no-unescaped-entities': 0
    },
    settings: {
        react: {
            version: '16.7.0-alpha.0'
        }
    }
};
