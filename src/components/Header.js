import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet
} from 'react-native';
import QuicFind from "./QuicFind"
import Rank from "./Rank"
import RideStats from "./RideStats"
import RcValid from "./RcValid"
import SoloRide from "./SoloRide"
import ViewStore from "./ViewStore"
import UpcomingRide from './UpcomingRide';
import { useNavigation } from '@react-navigation/native';


const Header = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Main Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>
              <Text style={styles.easy}>Easy </Text>
              <Text style={styles.rasta}>Rasta</Text>
            </Text>

            <Text style={styles.greeting}>Good morning, Alex</Text>
          </View>
          <TouchableOpacity style={styles.bellButton} activeOpacity={0.8}>
            <View styel={{ flexDirection: 'row', alignItems: 'center' }}>
              {/* <View style={styles.dot} /> */}
              <Icon name="notifications-outline" size={22} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Separator Line */}
        <View style={styles.separator} />

        {/* 2023 Wrapped Section */}
        <TouchableOpacity onPress={() => navigation.navigate('Stories')}>
          <LinearGradient
            colors={['#3B2F7F', '#1F2A6D']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.recapCard}
          >
            <View style={styles.wrappedSection}>
              <Text style={styles.wrappedSubtitle}>YOUR 2023 WRAPPED</Text>
              <Text style={styles.wrappedTitle}>RIDER RECAP</Text>
              <Text style={styles.wrappedDescription}>
                See your year on the road
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Separator Line */}
        <View style={styles.separator} />

        {/* Rank Section */}
       <Rank/>

        {/* Separator Line */}
        <View style={styles.separator} />

        {/* Ride Stats Section */}
       <RideStats/>

        {/* Separator Line */}
        <View style={styles.separator} />

        {/* Bike Section */}
        <RcValid/>

        {/* Separator Line */}
        <View style={styles.separator} />

        {/* Solo Ride Section */}
        <SoloRide/>

        {/* Separator Line */}
        <View style={styles.separator} />

        <ViewStore/>
        <QuicFind/>
       <UpcomingRide/>
    
      
      </ScrollView>

      
     
    </SafeAreaProvider>
  );
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: '#ff4b23ff',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',

  },
  title: {
    flexDirection: 'row',
    // optional
  },

  easy: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },

  rasta: {
    color: '#FFE5DC',
    fontSize: 20,
    fontWeight: '700',
  },
  greeting: {
    marginTop: 6,
    fontSize: 14,
    color: '#fff',
  },
  bellButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255,255,255,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    margin: 2,
  },
  recapCard: {
    margin: 16,
    padding: 20,
    borderRadius: 17,
  },
  wrappedSection: {
    paddingHorizontal: 7,
    paddingVertical: 10,
  },
  wrappedSubtitle: {
    fontSize: 10,
    fontWeight: '600',
    color: '#B9B6E8',
    letterSpacing: 1,
    marginBottom: 5,
  },
  wrappedTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  wrappedDescription: {
    fontSize: 14,
    color: '#DAD9FF',
  },
})

export default Header;
