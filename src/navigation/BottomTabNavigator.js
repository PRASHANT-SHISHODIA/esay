import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import EventsScreen from "../screens/EventsScreen";
import FindScreen from "../screens/FindScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TrackScreen from "../screens/TrackScreen";

const Tab = createBottomTabNavigator();
const getTabBarIcon=(routeName,focused,color,size)=>{
  let iconName;
  if(routeName==='Home'){
    iconName=focused?'home':'home-outline';
  }
  else if(routeName==='Track'){
    iconName=focused?'navigate':'navigate-outline';
  }
  else if(routeName==='Find'){
    iconName=focused?'location':'location-outline';
  }
  else if(routeName==='Events'){
    iconName=focused?'calendar':'calendar-outline';
  }
  else if(routeName==='Profile'){
    iconName=focused?'person':'person-outline';
  }
  return <Icon name={iconName} size={size} color={color}/>;

};

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={({route})=>({
      headerShown: false,
      tabBarIcon:({focused,color,size})=>
        getTabBarIcon(route.name,focused,color,size),
      tabBarActiveTintColor: '#EF4444',
       tabBarInactiveTintColor: '#111827',
       tabBarStyle:{
        paddingBottom:10,
        height:65,
        marginBottom:33,
        backgroundColor:'#f3f5f8ff',
      
       }
    })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Track"
        component={TrackScreen}
      />
      <Tab.Screen
        name="Find"
        component={FindScreen}
      />
      <Tab.Screen
        name="Events"
        component={EventsScreen}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  
  );
}
