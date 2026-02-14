import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import VendorDash from '../screens/vendor/VendorDash';
import VendorListingStack from './VendorListingStack';
import VendorFeedback from '../screens/vendor/VendorFeedback';
import VendorBusiness from '../screens/vendor/VendorBusiness';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName, focused, color, size) => {
  let iconName;
  if (routeName === 'Dash') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (routeName === 'Listing') {
    iconName = focused ? 'list' : 'list-outline';
  } else if (routeName === 'Feedback') {
    iconName = focused ? 'chatbubble' : 'chatbubble-outline';
  } else if (routeName === 'Business') {
    iconName = focused ? 'business' : 'business-outline';
  }
  return <Icon name={iconName} size={size} color={color} />;
};

export default function VendorBottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) =>
          getTabBarIcon(route.name, focused, color, size),
        tabBarActiveTintColor: '#EF4444',
        tabBarInactiveTintColor: '#111827',
        tabBarStyle: {
          paddingBottom: 10,
          height: 65,
          marginBottom: 33,
          backgroundColor: '#f3f5f8ff',
        },
      })}
    >
      <Tab.Screen name="Dash" component={VendorDash} />
      <Tab.Screen name="Listing" component={VendorListingStack} />
      <Tab.Screen name="Feedback" component={VendorFeedback} />
      <Tab.Screen name="Business" component={VendorBusiness} />
    </Tab.Navigator>
  );
}