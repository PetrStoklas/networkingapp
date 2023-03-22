import React, { FC, useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { Button, Surface, Text, TextInput } from 'react-native-paper';
import styles from './styles';
import { useRegistrationContext } from './RegistrationState';
import { RegistrationRoutes } from './types';
import { useNavigation } from '../../hooks/useNavigation';

const Birth: FC = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();
  const { updateUserState } = useRegistrationContext();

  const handleOnNextPress = () => {
    if (!updateUserState) {
      return;
    }

    updateUserState({ dateOfBirth: date });
    navigation.navigate(RegistrationRoutes.gender);
  };

  const onDatePickerConfirm = (date: Date) => {
    setOpen(false);
    setDate(date);
  };

  return (
    <Surface style={styles.horizontalStack}>
      <Text variant="headlineLarge" style={styles.title}>
        Date of birth?
      </Text>
      <Text variant="bodyLarge" style={styles.subtitle}>
        Sometimes you just want to meet people within specific group age, right? Tell the truth as you cannot change his
        value later.
      </Text>
      <TextInput
        label="Name"
        mode="outlined"
        style={styles.textInput}
        value={date.toLocaleDateString()}
        onTouchStart={() => setOpen(true)}
      />
      <DatePicker
        modal
        mode="date"
        theme="dark"
        open={open}
        date={date}
        onConfirm={onDatePickerConfirm}
        onCancel={() => setOpen(false)}
      />
      <Button mode="contained" style={styles.submitButton} onPress={handleOnNextPress}>
        Next
      </Button>
    </Surface>
  );
};

export default Birth;
