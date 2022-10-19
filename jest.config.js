module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/setup-jest.js'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest-after-env.js'],
  testPathIgnorePatterns: [],
  coveragePathIgnorePatterns: [],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native-community|@react-native|redux-persist|react-native))',
  ],
  testRegex: '/__tests__/.+\\.test\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^src(\\/?.*)$': '<rootDir>/src/$1',
  },
  coverageThreshold: {
    global: {
      statements: 60,
    },
  },
  collectCoverageFrom: ['**/*.tsx', '**/*.ts', '!src/assets/**'],
  collectCoverage: true,
  testResultsProcessor: '',

};
