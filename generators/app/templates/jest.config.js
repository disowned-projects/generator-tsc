module.exports = {
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  transform: {
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  testMatch: ['<rootDir>/**/?(*.)(spec|test).ts?(x)'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
}
