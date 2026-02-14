import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../components/profile/Profile';
import GarageScreen from '../components/profile/garage/GarageScreen';
import AddVehicle from '../components/profile/garage/AddVehicle';
import UpdateDocument from '../components/profile/garage/UpdateDocument';
import RiderHistory from '../components/profile/rider/RiderHistory';
import RideDetailsScreen from '../components/profile/rider/RideDetailsScreen';
import AchievementsScreen from '../components/profile/achievement/AchievementsScreen';
import Settings from '../components/profile/settings/Settings';
import NotificationsScreen from '../components/profile/notifications/NotificationsScreen';
import HelpSupportScreen from '../components/profile/helpsupport/HelpSupportScreen';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileHome"
        component={Profile}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Garage"
        component={GarageScreen}
        options={{
          title: 'My Garage',
        }}
      />
      <Stack.Screen name="AddVehicle" component={AddVehicle} />
      <Stack.Screen
        name="UpdateDocument"
        component={UpdateDocument}
        options={{ title: 'Update Document' }}
      />
      <Stack.Screen name="RideHistory" component={RiderHistory} />
      <Stack.Screen name="RideDetails" component={RideDetailsScreen} />
      <Stack.Screen name="Achievements" component={AchievementsScreen} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Help & Support" component={HelpSupportScreen} />
    </Stack.Navigator>
  );
}
