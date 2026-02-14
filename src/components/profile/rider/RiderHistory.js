import React, { useState } from 'react';
import { ImageBackground,View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LogModal from './LogModal';
import FilterScreen from './FilterScreen';
import { useNavigation } from '@react-navigation/native';


const TRACKS = [
  {
    id: 1,
    title: 'Cycle Sisters Low Hall to Highams Park Lake',
    date: '2025-12-22T07:30:00',
    km: 18.1,
    time: 163,
    avg: 10.4,
  },
  {
    id: 2,
    title: 'Evening Commute',
    date: '2026-01-05T18:15:00',
    km: 18.2,
    time: 42,
    avg: 32,
  },
  {
    id: 3,
    title: 'Sunday Long Ride',
    date: '2026-01-13T09:00:00',
    km: 145,
    time: 190,
    avg: 65,
  },
];
const rideImage = {
  uri: 'https://imgd.aeplcdn.com/642x361/bw/ec/35529/Royal-Enfield-Classic-350-Action-132573.jpg?wm=0&q=80',
};
export default function RiderHistory() {
  const [showFilter, setShowFilter] = useState(false);
  const [sortBy, setSortBy] = useState('km');
  const [timeRange, setTimeRange] = useState('all');

  const navigation=useNavigation();

  const handlePress = (item) => {
    navigation.navigate('RideDetails', {
      ride: item, 
    });
  }

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const filteredTrack = TRACKS.filter(track => {
    const trackDate = new Date(track.date);
    const trackMonth = trackDate.getMonth();
    const trackYear = trackDate.getFullYear();
    if (timeRange === 'all') return true;

    if (
      timeRange === 'month' &&
      trackMonth === currentMonth &&
      trackYear === currentYear
    ) {
      return true;
    }

    if (timeRange === 'last') {
      const lastMonthDate = new Date(currentYear, currentMonth - 1, 1);
      return (
        trackMonth === lastMonthDate.getMonth() &&
        trackYear === lastMonthDate.getFullYear()
      );
    }

    return false;
  });

  const sortedTracks = [...filteredTrack].sort((a, b) => {
    if (sortBy === 'km') return b.km - a.km;
    if (sortBy === 'date') return new Date(a.date) - new Date(b.date);
    if (sortBy === 'avg') return b.avg - a.avg;
    return 0;
  });

  return (
    <View style={styles.container}>
      <LogModal showFilter={showFilter} setShowFilter={setShowFilter} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* LIFETIME PERFORMANCE */}
        <View style={styles.performanceCard}>
          <View style={styles.performanceHeader}>
            <Ionicons name="trending-up" size={16} color="#fff" style={{ marginRight: 6 }} />
            <Text style={styles.performanceTitle}>LIFETIME PERFORMANCE</Text>
          </View>

          <View style={styles.performanceRow}>
            <PerfItem value="181.3" label="TOTAL KM" />
            <PerfItem value="3" label="RIDES" />
            <PerfItem value="110" label="MAX KM/H" />
          </View>
        </View>

        {showFilter && (
          <FilterScreen
            sortBy={sortBy}
            setSortBy={setSortBy}
            timeRange={timeRange}
            setTimeRange={setTimeRange}
            // close={() => setShowFilter(false)}
          />
        )}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Tracks</Text>
          <Text style={styles.sectionSub}>
            {sortedTracks.length} rides found
          </Text>
        </View>

        {sortedTracks.length === 0 ? (
          <Text style={{ textAlign: 'center', marginTop: 20 }}>
            No rides found
          </Text>
        ) : (
          sortedTracks.map(item => (
            <TrackCard
              key={item.id}
              title={item.title}
              date={new Date(item.date).toDateString()}
              km={`${item.km} km`}
              time={`${item.time} min`}
              avg={`${item.avg} km/h`}
                 image={rideImage}  
               onPress={() => handlePress(item)}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}
const PerfItem = ({ value, label }) => (
  <View style={styles.perfItem}>
    <Text style={styles.perfValue}>{value}</Text>
    <Text style={styles.perfLabel}>{label}</Text>
  </View>
);

const TrackCard = ({ title, date, km, time, avg, image, onPress }) => ( 
  
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={styles.trackCard}
  >
    {/* IMAGE SECTION */}
    <ImageBackground
      source={image || rideImage}
      style={styles.trackImage}
      imageStyle={{
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
      }}
    >
      {/* Overlay */}
      <View style={styles.overlay} />

      <View style={styles.imageContent}>
        <Text style={styles.imageTitle}>{title}</Text>
        <Text style={styles.imageDate}>{date}</Text>
      </View>
  
    </ImageBackground>

    {/* STATS SECTION */}
    <View style={styles.trackStats}>
      <StatItem value={km} label="KM" />
      <StatItem value={time} label="TIME" />
      <StatItem value={avg} label="AVG" />
    </View>
  </TouchableOpacity>

);


const StatItem = ({ value, label }) => (
  <View style={styles.statItem}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F3F4F6',
    // marginBottom:80
  },

  performanceCard: {
    backgroundColor: '#E5391A',
    margin: 10,
    padding: 16,
    // marginBottom:40
  },

  performanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 22,
  },

  performanceTitle: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  performanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  perfItem: {
    alignItems: 'center',
    flex: 1,
  },

  perfValue: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
  },

  perfLabel: {
    color: '#FEE2E2',
    fontSize: 11,
    marginTop: 2,
  },

  /* SECTION HEADER */
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 8,
    marginTop:20
  },

  sectionTitle: {
    fontWeight: '700',
    fontSize: 14,
  },

  sectionSub: {
    fontSize: 12,
    color: '#6B7280',
  },

  trackCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 14,
    borderRadius: 14,
    overflow: 'hidden',
  },

  trackImage: {
    height: 90,
    backgroundColor: '#D1D5DB',
  },

  trackBody: {
    padding: 14,
  },

  trackTitle: {
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 2,
  },

  trackDate: {
    fontSize: 11,
    color: '#6B7280',
    marginBottom: 10,
  },

  trackStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  statItem: {
    alignItems: 'center',
    flex: 1,
  },

  statValue: {
    fontWeight: '700',
    fontSize: 13,
  },
  statLabel: {
    fontSize: 10,
    color: '#6B7280',
    marginTop: 2,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

imageContent: {
  padding: 12,
  marginTop:40,
},

imageTitle: {
  color: '#fff',
  fontSize: 14,
  fontWeight: '700',
},

imageDate: {
  color: '#E5E7EB',
  fontSize: 11,
  marginTop: 2,
},
})
