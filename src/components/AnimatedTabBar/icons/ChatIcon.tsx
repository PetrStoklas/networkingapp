import React from 'react';
import styles from '../styles';
import Lottie from 'lottie-react-native';

const ChatIcon = () => (
  <Lottie loop={false} source={require('../../../../assets/icons/chat.json')} style={styles.icon} />
);

export default ChatIcon;
