import React, { FC, useState } from 'react';
import { Button, Surface, Text, TextInput } from 'react-native-paper';
import { View } from 'react-native';
import styles from './styles';
import { useRegistrationContext } from './RegistrationState';
import { RegistrationRoutes } from './types';
import { useNavigation } from '../../hooks/useNavigation';

const Bio: FC = () => {
  const [value, setValue] = useState('');
  const navigation = useNavigation();
  const { updateUserState } = useRegistrationContext();

  const handleOnNextPress = () => {
    if (!updateUserState) {
      return;
    }

    updateUserState({ bio: value });
    navigation.navigate(RegistrationRoutes.photosUpload);
  };

  return (
    <Surface style={styles.horizontalStack}>
      <View>
        <Text variant="headlineLarge" style={styles.title}>
          Something about you
        </Text>
        <Text variant="bodyLarge" style={styles.subtitle}>
          Let others see some words about you
        </Text>
      </View>
      <TextInput
        multiline={true}
        numberOfLines={5}
        label="Bio"
        mode="outlined"
        style={styles.textInput}
        onChangeText={(text) => setValue(text)}
      />
      <Button mode="contained" style={styles.submitButton} disabled={!value} onPress={handleOnNextPress}>
        Next
      </Button>
    </Surface>
  );
};

export default Bio;
