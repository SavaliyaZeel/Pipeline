module.exports = {
  preset: "react-native",
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-navigation|@react-native|react-redux|react-native-.*|@react-native-community)/)",
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js', // Or use your file pattern
    '!src/**/*.test.js', // Exclude test files
  ],
  coverageDirectory: 'coverage', // Define where coverage data will be stored
  coverageReporters: ['lcov', 'text-summary'], // Specify reporters
};
