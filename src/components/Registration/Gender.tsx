import React, { FC, useState } from 'react';
import styles from './styles';
import { RegistrationRoutes } from './types';
import { GenderType } from '../../types/user';
import { Button, Checkbox, Text, Surface } from 'react-native-paper';
import { View } from 'react-native';
import { useRegistrationContext } from './RegistrationState';
import { useNavigation } from '../../hooks/useNavigation';

const Gender: FC = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState<GenderType | undefined>();
  const { updateUserState } = useRegistrationContext();

  const handleOnNextPress = () => {
    if (!updateUserState) {
      return;
    }

    updateUserState({ gender: value });
    navigation.navigate(RegistrationRoutes.sexOrientation);
  };

  return (
    <Surface style={styles.horizontalStack}>
      <Text variant="headlineLarge" style={styles.title}>
        Your gender
      </Text>
      <Text style={styles.subtitle} variant="bodyLarge">
        Please don't say you are something in between. You cannot modify this information later.
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

export default Gender;
