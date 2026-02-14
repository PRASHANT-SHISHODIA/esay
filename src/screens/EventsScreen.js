import React from 'react';
import Event from '../components/event/Event'
import EventDetailsScreen from '../components/event/EventDetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const EventsScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EventsHome"
        component={Event}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EventDetails"
        component={EventDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    //
  //  <Event/>

  )
}

export default EventsScreen