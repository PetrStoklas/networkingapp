import React from 'react';
import styles from '../styles';
import Lottie from 'lottie-react-native';

const HomeIcon = () => (
  <Lottie loop={false} source={require('../../../../assets/icons/home.json')} style={styles.icon} />
);

export default HomeIcon;
