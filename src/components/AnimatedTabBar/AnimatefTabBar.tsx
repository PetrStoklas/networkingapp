import React, { useState } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';
import Animated, { useAnimatedStyle, withTiming, useDerivedValue } from 'react-native-reanimated';
import { LayoutChangeEvent, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import TabBarComponent from './TabBarComponent';
import theme from '../../theme';

type LayoutItem = { x: number; index: number };
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const AnimatedTabBar = ({ state: { index: activeIndex, routes }, navigation, descriptors }: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets();
  const [coordsState, setCoordsState] = useState<LayoutItem[]>([]);

  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    event.persist();
    setCoordsState((prevState) => [...prevState, { x: event.nativeEvent?.layout.x, index }]);
  };

  // animations ------------------------------------------------------

  const xOffset = useDerivedValue(() => {
    if (coordsState.length !== routes.length) {
      return 0;
    }

    return [...coordsState].find(({ index }) => index === activeIndex)!.x - 25;
  }, [activeIndex, coordsState]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(xOffset.value, { duration: 250 }) }],
    };
  });

  return (
    <View style={[styles.tabBar, { paddingBottom: bottom }]}>
      <AnimatedSvg width={110} height={60} viewBox="0 0 110 60" style={[styles.activeBackground, animatedStyles]}>
        <Path
          fill={theme.colors.background}
          d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
        />
      </AnimatedSvg>

      <View style={styles.tabBarContainer}>
        {routes.map((route, index) => {
          const active = index === activeIndex;
          const { options } = descriptors[route.key];

          return (
            <TabBarComponent
              key={route.key}
              active={active}
              options={options}
              onLayout={(e) => handleLayout(e, index)}
              onPress={() => navigation.navigate(route.name)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default AnimatedTabBar;
