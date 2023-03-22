import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import useGoogleSignin from '../../hooks/auth/useGoogleSignin';
import styles from './styles';

const Login = () => {
  const { mutate: signIn } = useGoogleSignin();

  return (
    <SafeAreaView style={styles.mainWrap}>
      <Button title="Google sign-In" onPress={() => signIn()} />
    </SafeAreaView>
  );
};

export default Login;
