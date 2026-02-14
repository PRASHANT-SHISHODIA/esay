import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function RideStats() {
   const navigation = useNavigation();
  return (
   <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate('Profile',{screen:'RideHistory'})}>
      <View style={styles.bor}>
          <View style={styles.head}>
            <View style={styles.headerLeft}>
              <Icon name="paper-plane-outline" size={18} color="#F04A23" />
              <Text style={styles.headerTitle}>Your Ride Stats</Text>
            </View>

            <Icon name="chevron-forward" size={18} color="#9CA3AF" />
          </View>

          {/* Stats */}
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>TOTAL DIST</Text>
              <Text style={styles.statValue}>
                1,245 <Text style={styles.unit}>km</Text>
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.stat}>
              <Text style={styles.statLabel}>RIDES</Text>
              <Text style={styles.statValue}>42</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.stat}>
              <Text style={styles.statLabel}>AVG SPEED</Text>
              <Text style={styles.statValue}>
                38 <Text style={styles.unit}>km/h</Text>
              </Text>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Last Ride:{' '}
              <Text style={styles.bold}>Mountain View Point (62km)</Text>
            </Text>

            <Text style={styles.date}>Oct 22</Text>
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
    paddingTop: 10,
   
  },
    footer: {
    marginTop: 14,
    marginLeft:15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  footerText: {
    fontSize: 12,
    color: '#6B7280',
  },

  bold: {
    color: '#111827',
    fontWeight: '600',
  },

  date: {
    fontSize: 12,
    color: '#F04A23',
    fontWeight: '600',
    marginRight:10
  },
   stat: {
    flex: 1,
    alignItems: 'center',
  },

  statLabel: {
    fontSize: 11,
    color: '#9CA3AF',
    fontWeight: '600',
  },

  statValue: {
    marginTop: 6,
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },

  unit: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
  },

  divider: {
    width: 1,
    height: 36,
    backgroundColor: '#E5E7EB',
  },
   head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft:20,
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop:20,
  },

  headerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  bor:{
    marginTop:10,
    borderWidth:1, 
    borderColor: '#f7f4f4ff',
    borderRadius:10,
    marginHorizontal: 16,
  },
   statsRow: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})