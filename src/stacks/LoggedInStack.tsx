import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routeConstants from '../routesConstants';
import RegisteredStack from './RegisteredStack';
import RegistrationStack from './RegistrationStack';
import { useAuth } from '../hooks/useAuth';

const Stack = createNativeStackNavigator();

const LoggedInStack = () => {
  const { profile } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {profile?.hasCompleteProfile ? (
        <Stack.Screen name={routeConstants.registered} component={RegisteredStack} />
      ) : (
        <Stack.Screen name={routeConstants.registration} component={RegistrationStack} />
      )}
    </Stack.Navigator>
  );
};
export default LoggedInStack;
