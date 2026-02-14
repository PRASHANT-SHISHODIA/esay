import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RideDetailButton from './RideDetailButton';

export default function RideDetailsScreen({ route }) {
  const { ride } = route.params;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <RideDetailButton />
      {/* MAP */}
      <View style={styles.mapBox}>
        <Text style={{ color: '#9CA3AF' }}>Ride Map</Text>
        <View style={styles.fakeRoute} />
      </View>

      {/* TITLE */}
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{ride.title}</Text>
          <Image
            source={{
              uri: 'https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2023/12/11/02b7857e-1a95-4b1a-8e9b-47909394da72_10d6e32f.jpg?itok=AtObzAs0&v=1702263075',
            }}
            style={styles.avatar}
          />
        </View>

        <Text style={styles.date}>
          {new Date(ride.date).toDateString()} at{' '}
          {new Date(ride.date).toLocaleTimeString()}
        </Text>

        {/* STATS GRID */}
        <View style={styles.statsGrid}>
          <Stat label="DISTANCE" value={`${ride.km} km`} />
          <Stat label="ELEVATION" value="78 m" />
          <Stat label="MOVING TIME" value={`${ride.time} min`} />
          <Stat label="AVG SPEED" value={`${ride.avg} km/h`} />
          <Stat label="MAX ELEVATION" value="34 m" />
          <Stat label="TOTAL TIME" value={`${ride.time} min`} />
        </View>

        {/* BUTTON */}
        <TouchableOpacity style={styles.analysisBtn}>
          <Text style={styles.analysisText}>View Analysis Charts</Text>
        </TouchableOpacity>

        {/* REACTIONS */}
        <View style={styles.reactionRow}>
          <View style={styles.users}>
            <View style={styles.userCircle} />
            <View style={styles.userCircle} />
            <View style={styles.userCircle} />
            <Text style={styles.more}>+3</Text>
          </View>

          <View style={styles.actions}>
            <View style={styles.action}>
              <Ionicons name="thumbs-up-outline" size={18} />
              <Text style={styles.actionText}>8</Text>
            </View>

            <View style={styles.action}>
              <Ionicons name="chatbubble-outline" size={18} />
              <Text style={styles.actionText}>2</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const Stat = ({ label, value }) => (
  <View style={styles.statBox}>
    <Text style={styles.statLabel}>{label}</Text>
    <Text style={styles.statValue}>{value}</Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  mapBox: {
    height: 200,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fakeRoute: {
    position: 'absolute',
    width: '70%',
    height: 6,
    backgroundColor: '#F97316',
    borderRadius: 6,
    transform: [{ rotate: '-12deg' }],
  },

  content: {
    padding: 16,
  },

  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    flex: 1,
    paddingRight: 10,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FB923C',
  },

  date: {
    fontSize: 12,
    color: '#6B7280',
    marginVertical: 6,
  },

  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },

  statBox: {
    width: '50%',
    marginBottom: 16,
  },

  statLabel: {
    fontSize: 11,
    color: '#9CA3AF',
    fontWeight: '600',
  },

  statValue: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 2,
  },

  analysisBtn: {
    borderWidth: 1,
    borderColor: '#FB923C',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 12,
  },

  analysisText: {
    color: '#FB923C',
    fontWeight: '700',
  },

  reactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },

  users: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#E5E7EB',
    marginRight: -8,
    borderWidth: 1,
    borderColor: '#fff',
  },

  more: {
    marginLeft: 12,
    fontSize: 12,
    color: '#6B7280',
  },

  actions: {
    flexDirection: 'row',
    gap: 16,
  },

  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  actionText: {
    fontSize: 12,
  },
});
