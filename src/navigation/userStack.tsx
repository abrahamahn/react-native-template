import React from 'react';
import { Model, Text, View, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/User/Home';
import Settings from '../screens/User/Settings';
import User from '../screens/User/User';
const Tab = createBottomTabNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#0e1529'}
        }}
        sceneContainerStyle={{ backgroundColor: '#0e1529'}}
      >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarShowLabel: false
        }} />
        <Tab.Screen name="User" component={User} options={{
          tabBarShowLabel: false
        }} />
        <Tab.Screen name="Settings" component={Settings} 
          listeners={{
            tabPress: e => {
              e.preventDefault();
            },
          }}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <SettingsScreen />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}