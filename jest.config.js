// jest.config.js
module.exports = {
    verbose: false,
    setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
    globals: {
        NODE_ENV: 'test'
    },
    moduleNameMapper: {
        '^styled-components': '<rootDir>/node_modules/styled-components'
    }
};
