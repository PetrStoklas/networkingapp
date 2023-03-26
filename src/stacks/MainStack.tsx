import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../components/Login';
import LoggedInStack from './LoggedInStack';
import routeConstants from '../routesConstants';
import { useAuth } from '../hooks/useAuth';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name={routeConstants.loggedin} component={LoggedInStack} />
      ) : (
        <Stack.Screen name={routeConstants.login} component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default MainStack;
