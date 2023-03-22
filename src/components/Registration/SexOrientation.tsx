import React, { FC, useState } from 'react';
import { GenderType, RegistrationRoutes } from './types';
import { Button, Checkbox, Surface, Text } from 'react-native-paper';
import { View } from 'react-native';
import styles from './styles';
import { useNavigation } from '../../hooks/useNavigation';
import { useRegistrationContext } from './RegistrationState';

const SexOrientation: FC = () => {
  const [value, setValue] = useState<GenderType | undefined>();

  const navigation = useNavigation();
  const { updateUserState } = useRegistrationContext();

  const handleOnNextPress = () => {
    if (!updateUserState) {
      return;
    }

    updateUserState({ targetGender: value });
    navigation.navigate(RegistrationRoutes.bio);
  };

  return (
    <Surface style={styles.horizontalStack}>
      <Text variant="headlineLarge" style={styles.title}>
        Target gender
      </Text>
      <Text style={styles.subtitle} variant="bodyLarge">
        What gender are you interested in? Help us to pick the most suitable profiles for you.
      </Text>
      <View style={styles.textInput}>
        <View style={styles.optionRow}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={value === GenderType.male ? 'checked' : 'unchecked'}
              onPress={() => setValue(GenderType.male)}
            />
          </View>
          <Text variant="bodyLarge">Male</Text>
        </View>

        <View style={styles.optionRow}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={value === GenderType.female ? 'checked' : 'unchecked'}
              onPress={() => setValue(GenderType.female)}
            />
          </View>
          <Text variant="bodyLarge">Female</Text>
        </View>
      </View>

      <Button mode="contained" style={styles.submitButton} disabled={!value} onPress={handleOnNextPress}>
        Next
      </Button>
    </Surface>
  );
};

export default SexOrientation;
