import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function RcValid() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    {/* Bike Section */}
    <TouchableOpacity onPress={() => navigation.navigate('Profile', { screen: 'Garage' })}>
        <View style={styles.bor}>
          <View style={styles.section}>
            <View style={styles.bike}>
              <Text style={styles.sectionHeading}>Yamaha MT-07</Text>
              <Icon name="chevron-forward" size={18} color="#9CA3AF" />
            </View>
            <View style={styles.bikeInfo}>
              <View style={styles.serviceContainer}>
                <Text style={styles.serviceText}>Service in 500km</Text>
              </View>
              <Text style={styles.rcText}>RC Valid</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
     container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 12,
  },
   bor:{
    marginTop:10,
    borderWidth:1, 
    borderColor: '#f7f4f4ff',
    borderRadius:10,
    marginHorizontal: 16,
  },
  bike:{
    flexDirection:"row", 
    justifyContent: 'space-between',
  },
  section: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 15,
  },
   bikeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   },
  serviceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceText: {
    fontSize: 11,
    color: '#ff3b30',
  },
  rcText: {
    fontSize: 11,
    color: '#34C759',
    fontWeight: '600',
  },
})