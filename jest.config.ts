module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/test/**/*.spec.ts'],
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    roots: ['<rootDir>/src', '<rootDir>/test']
  };
  