import { useState } from 'react';
import useGetCurrentUser from './useGetCurrentUser';
import firestore from '@react-native-firebase/firestore';

const useHasCompleteProfile = () => {
  const currentUser = useGetCurrentUser();
  const [result, setResult] = useState(false);

  if (!currentUser) {
    return false;
  }

  firestore()
    .collection('Users')
    .doc(currentUser.uid)
    .onSnapshot((documentSnapshot) => {
      setResult(!!documentSnapshot.data()?.registrationComplete);
    });

  return result;
};

export default useHasCompleteProfile;
