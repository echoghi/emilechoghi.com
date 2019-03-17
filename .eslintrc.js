module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true
    },

    extends: ['plugin:react/recommended', 'prettier'],

    plugins: ['react', 'react-hooks', '@typescript-eslint'],

    parser: '@typescript-eslint/parser',

    parserOptions: {
        project: './tsconfig.json',
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
        'react/no-unescaped-entities': 0,
        'react/no-deprecated': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    },

    // eslint's no-unused-vars rule is returning a false positive for
    // imported interfaces, so it will be disabled in typescript files
    // until theres a cleaner solution.
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            rules: {
                'no-unused-vars': ['off'],
                'no-undef': ['off']
            }
        }
    ],

    settings: {
        react: {
            version: '16.8.4'
        }
    }
};
