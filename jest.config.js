// jest.config.js
module.exports = {
    verbose: false,
    setupFiles: ['<rootDir>/jest.setup.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    moduleNameMapper: {
        '^styled-components': '<rootDir>/node_modules/styled-components'
    }
};
