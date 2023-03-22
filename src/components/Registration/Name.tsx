import React, { FC, useState } from 'react';
import { Button, Surface, Text, TextInput } from 'react-native-paper';
import styles from './styles';
import { useNavigation } from '../../hooks/useNavigation';
import { useRegistrationContext } from './RegistrationState';
import { RegistrationRoutes } from './types';

const Name: FC = () => {
  const [value, setValue] = useState('');
  const navigation = useNavigation();
  const { updateUserState } = useRegistrationContext();

  const handleOnNextPress = () => {
    if (!updateUserState) {
      return;
    }

    updateUserState({ name: value });
    navigation.navigate(RegistrationRoutes.birth);
  };

  return (
    <Surface style={styles.horizontalStack}>
      <Text variant="headlineLarge" style={styles.title}>
        What is your name?
      </Text>
      <Text variant="bodyLarge" style={styles.subtitle}>
        Your name will be displayed on your profile to everybody
      </Text>
      <TextInput label="Name" mode="outlined" style={styles.textInput} onChangeText={(text) => setValue(text)} />
      <Button mode="contained" style={styles.submitButton} disabled={!value} onPress={handleOnNextPress}>
        Next
      </Button>
    </Surface>
  );
};

export default Name;
