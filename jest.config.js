module.exports = {
    moduleFileExtensions: [
        'js',
        'json',
    ],
    rootDir: '',
    testMatch: ['<rootDir>/dist/tests/**/*.test.js'],
    collectCoverageFrom: [
        '**/*.(t|j)s',
    ],
    coverageDirectory: '../coverage',
    testEnvironment: 'node',
};
