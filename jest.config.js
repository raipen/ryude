/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    collectCoverageFrom: [
      'src/**/*.[jt]s?(x)',
      '!**/*.d.ts',
    ],
    moduleNameMapper: {
      '^@$': '<rootDir>/src/',
    },
  };