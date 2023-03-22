import React, { useEffect } from 'react';
import { useNavigation } from '../../hooks/useNavigation';
import { useRegistrationContext } from './RegistrationState';
import styles from './styles';
import { Surface, Text } from 'react-native-paper';
import { View } from 'react-native';
import Smile from '../Smile';
import { RegistrationRoutes } from './types';
import routesConstants from '../../routesConstants';

const Uploading = () => {
  const navigation = useNavigation();
  const { onSubmit } = useRegistrationContext();

  useEffect(() => {
    console.log('use effect in uploading');
    const submitData = async () => {
      if (!onSubmit) {
        return;
      }

      console.log('call on submit in upliading');
      try {
        await onSubmit();
        console.log('on submit success');
        // TODO: make it navigate when the smile is in correct position
        navigation.navigate(routesConstants.registered());
      } catch (err) {
        console.log('error when submitting registration data');
        console.log(JSON.stringify(err));
        navigation.navigate(RegistrationRoutes.name);
      }
    };

    submitData();
  }, [navigation, onSubmit]);

  return (
    <Surface style={styles.horizontalStack}>
      <View style={styles.uploadingSmileWrap}>
        <Smile rotating={true} />
      </View>
      <Text variant="headlineLarge" style={styles.title}>
        Uploading
      </Text>
    </Surface>
  );
};

export default Uploading;
