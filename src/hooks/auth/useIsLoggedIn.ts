import auth from '@react-native-firebase/auth';

const useIsLoggedIn = () => auth().currentUser !== null;

export default useIsLoggedIn;
