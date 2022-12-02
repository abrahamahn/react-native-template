import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';

import Signin from '../screens/Authentication/Signin';
import Signup from '../screens/Authentication/Signup';
import Confirm from '../screens/Authentication/Confirm';
import Forgot from '../screens/Authentication/Forgot';
import Reset from '../screens/Authentication/Reset';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          cardStyle: {
            backgroundColor: '#0e1529'
          },
          headerShown: false
        }}>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Confirm" component={Confirm} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Reset" component={Reset} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};