// src/navigation/AppStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import PermissionScreen from '../screens/permission/PermissionScreen';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Permission" component={PermissionScreen} />
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
       
    </Stack.Navigator>
  );
}
