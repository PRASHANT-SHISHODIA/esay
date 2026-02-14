import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const LiveRideScreen = () => {
  const navigation = useNavigation();
  const [isPaused, setIsPaused] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer;

    if (!isPaused) {
      timer = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isPaused]);

  const formatTime = () => {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    return `00:${min}:${sec}`;
  };

  return (
    <View style={styles.container}>
      {/* MAP PLACEHOLDER */}
      <View style={{ flex: 1 }} />

      {/* BOTTOM PANEL */}
      <View style={styles.bottomPanel}>
        <View style={styles.panelHandle} />

        {/* STATS */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>SPEED</Text>
            <Text style={styles.statValue}>
              7<Text style={styles.statUnit}> km/h</Text>
            </Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>TIME</Text>
            <Text style={styles.statValue}>{formatTime()}</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>KM</Text>
            <Text style={styles.statValue}>0.0</Text>
          </View>
        </View>

        {/* ACTION BUTTONS */}
        <View style={styles.actionRow}>
          {/* PAUSE / RESUME */}
          <TouchableOpacity
            style={styles.pauseBtn}
            onPress={() => setIsPaused(!isPaused)}
          >
            <Ionicons
              name={isPaused ? 'play' : 'pause'}
              size={20}
              color="#111"
            />
          </TouchableOpacity>

          {/* END RIDE */}
          <TouchableOpacity
            style={styles.endRideBtn}
            onPress={() => {
              // Stop the ride (clear timer, etc.)
              setIsPaused(true);
              // Navigate back to start ride
              navigation.goBack();
            }}
          >
            <Ionicons name="stop-circle-outline" size={18} color="#fff" />
            <Text style={styles.endRideText}>END RIDE</Text>
          </TouchableOpacity>

          {/* SHARE */}
          <TouchableOpacity style={styles.shareBtn}>
            <Ionicons name="share-social-outline" size={18} />
          </TouchableOpacity>
        </View>

        {/* SOS */}
        <TouchableOpacity style={styles.sosBtn}>
          <Text style={styles.sosText}>SOS Emergency</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7EB', // map placeholder color
  },

  /* ================= TOP DIRECTION CARD ================= */

  directionCard: {
    position: 'absolute',
    top: 20,
    left: 16,
    right: 16,
    backgroundColor: '#EA580C',
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 6,
  },

  directionIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#EF4444',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  directionTextWrap: {
    flex: 1,
  },

  directionSmall: {
    color: '#FEE2E2',
    fontSize: 11,
    fontWeight: '600',
  },

  directionMain: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },

  distanceText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },

  /* ================= FLOATING MAP BUTTONS ================= */

  floatingBtns: {
    position: 'absolute',
    right: 16,
    top: 120,
    gap: 12,
  },

  floatingBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },

  /* ================= USER LOCATION MARKER ================= */

  userMarker: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#EF4444',
    justifyContent: 'center',
    alignItems: 'center',
  },

  userArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#EF4444',
    marginTop: -4,
  },

  /* ================= BOTTOM PANEL ================= */

  bottomPanel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    padding: 16,
    elevation: 10,
  },

  panelHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#D1D5DB',
    alignSelf: 'center',
    marginBottom: 12,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  statBox: {
    alignItems: 'center',
    flex: 1,
  },

  statLabel: {
    fontSize: 11,
    color: '#6B7280',
    marginBottom: 4,
  },

  statValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
  },

  statUnit: {
    fontSize: 12,
    color: '#6B7280',
  },

  /* ================= ACTION BUTTONS ================= */

  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  pauseBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  endRideBtn: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#EF4444',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },

  endRideText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },

  shareBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* ================= SOS ================= */

  sosBtn: {
    alignSelf: 'center',
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#FEE2E2',
  },

  sosText: {
    color: '#EF4444',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default LiveRideScreen;
