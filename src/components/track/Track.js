import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Track() {
  const navigation = useNavigation();
  const [liveSharing, setLiveSharing] = useState(false);
  const [crashDetection, setCrashDetection] = useState(true);

  return (
    <View style={styles.container}>
      {/* Bottom Sheet */}
      <View style={styles.sheet}>
        
        {/* Header */}
        <View style={styles.headerRow}>
          <Text style={styles.title}>Ready to Ride?</Text>
          <View style={styles.gpsBadge}>
            <Text style={styles.gpsText}>📶 GPS Active</Text>
          </View>
        </View>

        {/* Live Sharing */}
        <View style={styles.card}>
          <View style={styles.left}>
            <View style={[styles.iconBox, { backgroundColor: '#E8FFF1' }]}>
              <Ionicons name="people-outline" size={18} color="#16A34A" />
            </View>
            <View>
              <Text style={styles.cardTitle}>Live Sharing</Text>
              <Text style={styles.cardSub}>
                {liveSharing ? 'Enabled' : 'Disabled'}
              </Text>
            </View>
          </View>

          <Switch
            value={liveSharing}
            onValueChange={setLiveSharing}
            trackColor={{ false: '#E5E7EB', true: '#86EFAC' }}
            thumbColor={liveSharing ? '#16A34A' : '#fff'}
          />
        </View>

        {/* Crash Detection */}
        <View style={styles.card}>
          <View style={styles.left}>
            <View style={[styles.iconBox, { backgroundColor: '#F3E8FF' }]}>
              <Ionicons name="shield-checkmark-outline" size={18} color="#7C3AED" />
            </View>
            <View>
              <Text style={styles.cardTitle}>Crash Detection</Text>
              <Text style={styles.cardSub}>Active</Text>
            </View>
          </View>

          <Switch
            value={crashDetection}
            onValueChange={setCrashDetection}
            trackColor={{ false: '#E5E7EB', true: '#C4B5FD' }}
            thumbColor={crashDetection ? '#7C3AED' : '#fff'}
          />
        </View>

        {/* Start Ride Button */}
        <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('RideDetails')}>
          <Ionicons name="navigate" size={18} color="#fff" />
          <Text style={styles.startText}>START RIDE</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    justifyContent: 'flex-end',
    marginTop:643
  },

  sheet: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#fff',
  padding: 16,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
},

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },

  gpsBadge: {
    backgroundColor: '#FFECEC',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  gpsText: {
    fontSize: 11,
    color: '#EF4444',
    fontWeight: '300',
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  cardTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111827',
  },

  cardSub: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 2,
  },

  startBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EF4444',
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 10,
    gap: 8,
  },

  startText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
