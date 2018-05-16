module.exports = {
  collectCoverageFrom: ['src/**/*.ts'],
  transform: {
    '.ts': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  testMatch: ['<rootDir>/**/?(*.)(spec|test).ts'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleFileExtensions: ['ts', 'js', 'json'],
}
