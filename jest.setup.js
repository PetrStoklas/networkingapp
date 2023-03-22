import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('@react-native-firebase/app', () => {
  return () => ({
    onNotification: jest.fn(),
    onNotificationDisplayed: jest.fn(),
  });
});
jest.mock('@react-native-firebase/firestore', () => ({}));
jest.mock('@react-native-firebase/auth', () => {
  return () => ({
    onAuthStateChanged: jest.fn(),
    GoogleAuthProvider: {
      credential: jest.fn().mockReturnValue('123'),
    },
  });
});
