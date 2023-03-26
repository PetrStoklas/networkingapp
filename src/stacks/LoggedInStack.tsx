import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routeConstants from '../routesConstants';
import RegisteredStack from './RegisteredStack';
import RegistrationStack from './RegistrationStack';
import useHasCompleteProfile from '../hooks/auth/useHasCompleteProfile';

const Stack = createNativeStackNavigator();

const LoggedInStack = () => {
  const hasCompleteProfile = useHasCompleteProfile();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {hasCompleteProfile ? (
        <Stack.Screen name={routeConstants.registered} component={RegisteredStack} />
      ) : (
        <Stack.Screen name={routeConstants.registration} component={RegistrationStack} />
      )}
    </Stack.Navigator>
  );
};
export default LoggedInStack;
