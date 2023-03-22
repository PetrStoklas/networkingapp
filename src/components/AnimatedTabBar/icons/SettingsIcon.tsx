import React from 'react';
import styles from '../styles';
import Lottie from 'lottie-react-native';

const SettingsIcon = () => (
  <Lottie loop={false} source={require('../../../../assets/icons/settings.json')} style={styles.icon} />
);

export default SettingsIcon;
