import auth from '@react-native-firebase/auth';

const useGetCurrentUser = () => auth().currentUser;

export default useGetCurrentUser;
