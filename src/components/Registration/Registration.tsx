import React from 'react';
import Name from './Name';
import PhotosUpload from './PhotosUpload';
import Birth from './Birth';
import Gender from './Gender';
import SexOrientation from './SexOrientation';
import Bio from './Bio';
import { RegistrationRoutes } from './types';
import styles from './styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegistrationContextProvider } from './RegistrationState';
import Uploading from './Uploading';
import { Surface } from 'react-native-paper';

const RegistrationStack = createNativeStackNavigator();

const Registration = () => (
  <RegistrationContextProvider>
    <Surface style={styles.mainWrap}>
      <RegistrationStack.Navigator initialRouteName={RegistrationRoutes.name} screenOptions={{ headerShown: false }}>
        <RegistrationStack.Screen name={RegistrationRoutes.name} component={Name} />
        <RegistrationStack.Screen name={RegistrationRoutes.birth} component={Birth} />
        <RegistrationStack.Screen name={RegistrationRoutes.gender} component={Gender} />
        <RegistrationStack.Screen name={RegistrationRoutes.sexOrientation} component={SexOrientation} />
        <RegistrationStack.Screen name={RegistrationRoutes.bio} component={Bio} />
        <RegistrationStack.Screen name={RegistrationRoutes.photosUpload} component={PhotosUpload} />
        <RegistrationStack.Screen name={RegistrationRoutes.uploading} component={Uploading} />
      </RegistrationStack.Navigator>
    </Surface>
  </RegistrationContextProvider>
);

export default Registration;
