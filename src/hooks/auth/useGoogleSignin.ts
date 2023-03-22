import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useMutation } from 'react-query';

const useSignOut = () =>
  useMutation('signOut', async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return await auth().signInWithCredential(googleCredential);
  });

export default useSignOut;
