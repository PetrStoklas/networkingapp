import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../components/Login';
import useIsLoggedIn from '../hooks/auth/useIsLoggedIn';
import LoggedInStack from './LoggedInStack';
import routeConstants from '../routesConstants';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const isLoggedIn = useIsLoggedIn();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name={routeConstants.loggedin()} component={LoggedInStack} />
      ) : (
        <Stack.Screen name={routeConstants.login()} component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default MainStack;
