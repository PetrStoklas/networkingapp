import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import useAuth from '../../hooks/useAuth';
import styles from './styles';

const Login = () => {
  const { signIn } = useAuth();

  return (
    <SafeAreaView style={styles.mainWrap}>
      <Button title="Google sign-In" onPress={() => signIn()} />
    </SafeAreaView>
  );
};

export default Login;
