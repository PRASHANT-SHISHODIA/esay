import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import AuthStack from './AuthStack';
import RiderStack from './RiderStack';
import VendorStack from './VendorStack';

export default function RootNavigator() {
  const { isLoggedIn, role } = useSelector(state => state.auth);

  return (
    <NavigationContainer>
      {!isLoggedIn && <AuthStack />}
      {isLoggedIn && role === 'rider' && <RiderStack />}
      {isLoggedIn && role === 'vendor' && <VendorStack />}
    </NavigationContainer>
  );
}
