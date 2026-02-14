import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VendorBottomTabNavigator from './VendorBottomTabNavigator';

const Stack = createNativeStackNavigator();

export default function VendorStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="VendorTabs" component={VendorBottomTabNavigator} />
    </Stack.Navigator>
  );
}
