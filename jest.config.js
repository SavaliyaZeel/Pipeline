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
  coverageDirectory: './coverage',
  coverageReporters: ['lcov', 'json', 'text'],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,ts,tsx}",
    "!src/**/*.d.ts"
  ]
};
