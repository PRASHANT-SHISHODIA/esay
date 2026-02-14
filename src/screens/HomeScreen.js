import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import CreateEventScreen from '../components/CreateEventScreen';
import Stories from '../components/Stories';

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={Header}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateEvent"
        component={CreateEventScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Stories"
        component={Stories}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
    