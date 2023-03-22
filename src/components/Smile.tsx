import React, { FC, useEffect, useCallback, useRef } from 'react';
import { Animated, Easing } from 'react-native';
// @ts-ignore
import SmileSvg from '../../assets/images/smile.svg';

interface SmileProps {
  rotating?: boolean;
  width?: number;
  height?: number;
}

const Smile: FC<SmileProps> = ({ rotating = false, width = 200, height = 200 }) => {
  const rotateValueHolder = useRef(new Animated.Value(0)).current;

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const startSmileRotation = useCallback(() => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => startSmileRotation());
  }, [rotateValueHolder]);

  useEffect(() => {
    startSmileRotation();
  }, [startSmileRotation]);

  if (!rotating) {
    return <SmileSvg width={width} height={height} />;
  }

  return (
    <Animated.View
      style={{
        width,
        height,
        transform: [{ rotate: RotateData }],
      }}
    >
      <SmileSvg width={width} height={height} />
    </Animated.View>
  );
};

export default Smile;
