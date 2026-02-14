import { StyleSheet, ScrollView, Text, TouchableOpacity,View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { events } from './event/Event';


export default function UpcomingRide() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
  {/* Header */}
  <View style={styles.headerRow}>
    <Text style={styles.sectionHeading}>Upcoming Rides</Text>
    <TouchableOpacity>
      <Text style={styles.viewCalendar}>View Calendar →</Text>
    </TouchableOpacity>
  </View>

  {/* Horizontal cards */}
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <RideCardCom
      title="Midnight Highway Ride"
      date="Oct 24, 8 PM"
      location="Downtown"
      onPress={() => navigation.navigate('Events', { screen: 'EventDetails', params: { event: events[0] } })}
    />
    <RideCardCom
      title="Coastal Escape"
      date="Oct 28, 6 AM"
      location="West Coast"
      onPress={() => navigation.navigate('Events', { screen: 'EventDetails', params: { event: events[1] } })}
    />
    <RideCardCom
      title="Off-Road Adventure"
      date="Nov 02,2023 • 7:00 AM"
      location="West Coast"
      onPress={() => navigation.navigate('Events', { screen: 'EventDetails', params: { event: events[2] } })}
    />
  </ScrollView>

</View>

  )
}
const RideCardCom = ({ title, date, location, onPress }) => (
  <TouchableOpacity style={styles.rideCard} onPress={onPress}>
    {/* Image placeholder */}
    <View style={styles.rideImage}>
      <Ionicons name="image-outline" size={22} color="#9CA3AF" />
    </View>

    {/* Info */}
    <View style={styles.rideInfo}>
      <Text style={styles.rideTitle} numberOfLines={1}>
        {title}
      </Text>

      <View style={styles.infoRow}>
        <Ionicons name="calendar-outline" size={14} color="#6B7280" />
        <Text style={styles.infoText}>{date}</Text>
      </View>

      <View style={styles.infoRow}>
        <Ionicons name="location-outline" size={14} color="#6B7280" />
        <Text style={styles.infoText}>{location}</Text>
      </View>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
    section: {
  marginHorizontal: 16,
  marginTop: 20,
},

headerRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 12,
},

sectionHeading: {
  fontSize: 14,
  fontWeight: '600',
  color: '#111827',
  marginTop:10,
  marginLeft:15
},

viewCalendar: {
  fontSize: 12,
  fontWeight: '500',
  color: '#EF4444',
},

rideCard: {
  width: 260,
  backgroundColor: '#fff',
  borderRadius: 14,
  padding: 12,
  marginRight: 12,
  flexDirection: 'row',
  alignItems: 'center',
  elevation: 2,
},

rideImage: {
  width: 48,
  height: 48,
  borderRadius: 8,
  backgroundColor: '#F3F4F6',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 10,
},

rideInfo: {
  flex: 1,
},

rideTitle: {
  fontSize: 13,
  fontWeight: '600',
  color: '#111827',
  marginBottom: 4,
},

infoRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 2,
},

infoText: {
  fontSize: 11,
  color: '#6B7280',
  marginLeft: 4,
},

detailsBtn: {
  backgroundColor: '#FEE2E2',
  paddingHorizontal: 10,
  paddingVertical: 6,
  borderRadius: 8,
},

detailsText: {
  fontSize: 11,
  fontWeight: '600',
  color: '#EF4444',
},

})