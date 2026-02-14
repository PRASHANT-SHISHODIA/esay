import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VendorListing from '../screens/vendor/vendorList/VendorListing';
import AddListing from '../screens/vendor/vendorList/AddListing';

const Stack = createNativeStackNavigator();

export default function VendorListingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="VendorListingHome"
        component={VendorListing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddListing"
        component={AddListing}
        options={{
          title: 'Add New Listing',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}