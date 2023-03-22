module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native|react-navigation|@react-navigation/.*))',
  ],
  setupFiles: [
    './node_modules/@react-native-google-signin/google-signin/jest/build/setup.js',
    './node_modules/react-native-safe-area-context/jest/mock.js',
    './jest.setup.js',
  ],
};
