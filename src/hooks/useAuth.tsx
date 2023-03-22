import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GenderType } from '../types/user';

GoogleSignin.configure({
  webClientId: '408153506365-qki5tqtrngqulerhml54lo7fvq8intah.apps.googleusercontent.com',
});

interface Profile {
  bio: string;
  name: string;
  images: string[];
  gender: GenderType;
  targetGender: GenderType;
  dateOfBirth: any; // TODO: specify
}

export interface AuthContext {
  user: FirebaseAuthTypes.User;
  profile: Profile | null;
  signIn: CallableFunction;
  signOut: CallableFunction;
  loading: boolean;
  error: unknown;
}

const AuthContext = createContext<AuthContext>({} as any);

export const AuthProvider = (props: { children: JSX.Element }) => {
  const [error, setError] = useState();
  const [user, setUser] = useState<any>();
  const [profile, setProfile] = useState<any>();
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log('auth().currentUser');
    console.log(auth().currentUser);
    auth().onAuthStateChanged((authUser) => {
      // console.log('on auth change');
      // console.log('on auth change');
      // console.log('on auth change');
      // console.log('on auth change');
      // console.log('on auth change');
      // console.log('on auth change');
      // console.log('on auth change');
      // console.log('on auth change');
      // console.log('on auth change');
      // console.log('on auth change');
      // console.log('on auth change');
      // console.log('on auth change');
      // console.log('on auth change');
      // console.log('on auth change');
      // console.log(authUser);
      if (authUser) {
        setUser(authUser);
        firestore()
          .collection('Users')
          .doc(authUser.uid)
          .onSnapshot((documentSnapshot) => {
            setProfile(documentSnapshot.data());
          });
      }

      if (loadingInitial) {
        setLoadingInitial(false);
      }
    });
  }, [user, loadingInitial]);

  const signIn = async () => {
    setLoading(true);
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      return auth()
        .signInWithCredential(googleCredential)
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    } catch (error) {
      setLoading(false);
      setError(error as any);
    }
  };

  const signOut = async () => {
    setLoading(true);
    await GoogleSignin.signOut();
    auth()
      .signOut()
      .then(() => setUser(null))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const memo = useMemo(
    () => ({
      user,
      loading,
      error,
      profile,
      signOut,
      signIn,
    }),
    [user, loading, error, profile]
  );

  return <AuthContext.Provider value={memo}>{!loadingInitial && props.children}</AuthContext.Provider>;
};

export const useAuth = function (): AuthContext {
  return useContext(AuthContext);
};
