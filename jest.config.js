module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-navigation|@react-navigation|react-native-reanimated|react-redux)/)',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/android/',
    '/ios/'
  ],
};
