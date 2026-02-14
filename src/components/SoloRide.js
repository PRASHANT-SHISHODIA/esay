import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function SoloRide() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Track')}
        activeOpacity={0.8}
      >
        <View style={styles.section}>
          <View style={styles.soloRideCard}>
            {/* Left Content */}
            <View style={styles.leftContent}>
              <View style={styles.iconCircle}>
                <Ionicons name="navigate" size={18} color="#ff4d4d" />
              </View>

              <View>
                <Text style={styles.soloRideTitle}>Solo Ride?</Text>
                <Text style={styles.soloRideText}>
                  Track stats & share location
                </Text>
              </View>
            </View>

            {/* Right Button */}
            <TouchableOpacity style={styles.blueButton}>
              <Text style={styles.blueButtonText}>Quick Start</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 13,
  },
  section: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  soloRideCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 25,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ffecec',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  soloRideTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },

  soloRideText: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
  blueButton: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
  },

  blueButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1e293b',
  },
});
