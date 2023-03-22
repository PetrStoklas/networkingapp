import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '../components/AnimatedTabBar/AnimatefTabBar';
import Matching from '../components/Matching';
import Settings from '../components/Settings';
import Chat from '../components/Chat';
import ChatIcon from '../components/AnimatedTabBar/icons/ChatIcon';
import HomeIcon from '../components/AnimatedTabBar/icons/HomeIcon';
import SettingsIcon from '../components/AnimatedTabBar/icons/SettingsIcon';
import routesConstants from '../routesConstants';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator tabBar={(props) => <AnimatedTabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tab.Screen name={routesConstants.matching()} component={Matching} options={{ tabBarIcon: HomeIcon }} />
      <Tab.Screen name={routesConstants.chat()} component={Chat} options={{ tabBarIcon: ChatIcon }} />
      <Tab.Screen name={routesConstants.settings()} component={Settings} options={{ tabBarIcon: SettingsIcon }} />
    </Tab.Navigator>
  );
};

export default Main;
