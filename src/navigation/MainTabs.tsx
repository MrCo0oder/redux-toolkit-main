import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {Image} from 'react-native';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const icons = {
  home: require('../assets/home.png'),
  settings: require('../assets/settings.png'),
  profile: require('../assets/profile.png'),
};
const renderIcon =
  (icon: keyof typeof icons) =>
  ({color, size}: {color: string; size: number}) =>
    (
      <Image
        source={icons[icon]}
        style={{height: size, width: size}}
        tintColor={color}
      />
    );
export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarIcon: renderIcon('home')}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{tabBarIcon: renderIcon('settings')}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarIcon: renderIcon('profile')}}
      />
    </Tab.Navigator>
  );
}
