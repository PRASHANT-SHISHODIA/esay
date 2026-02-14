import React from 'react'
import Track from "../components/track/Track"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LiveRideScreen from '../components/track/LiveRideScreen';



const Stack = createNativeStackNavigator();

const TrackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrackHome"
        component={Track}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RideDetails"
        component={LiveRideScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    //
  
   
  )
}

export default TrackScreen