import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';

const EventDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Cover */}
        <ImageBackground
          source={{ uri: 'https://picsum.photos/600/400' }}
          style={styles.cover}
        >
          <LinearGradient
            colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.7)']}
            style={StyleSheet.absoluteFill}
          />

          {/* Top Icons */}
          <View style={styles.topIcons}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="share-social-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Badges */}
          <View style={styles.badges}>
            <View style={[styles.badge, { backgroundColor: '#EF4444' }]}>
              <Text style={styles.badgeText}>CRUISE</Text>
            </View>
            <View style={[styles.badge, { backgroundColor: '#FACC15' }]}>
              <Text style={styles.badgeTextDark}>MODERATE</Text>
            </View>
          </View>

          {/* Title */}
          <Text style={styles.title}>{event.title}</Text>
          <View style={styles.meta}>
            <Ionicons name="calendar-outline" size={14} color="#E5E7EB" />
            <Text style={styles.metaText}>{event.date}</Text>
            <Ionicons name="time-outline" size={14} color="#E5E7EB" />
            <Text style={styles.metaText}>{event.date}</Text>
          </View>
        </ImageBackground>

        {/* Stats */}
        <View style={styles.statsCard}>
          <Stat label="DISTANCE" value="35 km" />
          <Divider />
          <Stat label="PRICE" value={event.price} valueColor="#16A34A" />
          <Divider />
          <Stat label="GOING" value={event.members} />
        </View>

        {/* Host */}
        <View style={styles.hostCard}>
          <View style={styles.hostLeft}>
            <View style={styles.avatar} />
            <View>
              <Text style={styles.hostLabel}>HOSTED BY</Text>
              <Text style={styles.hostName}>{event.author}</Text>
            </View>
          </View>
          <View style={styles.rating}>
            <Ionicons name="star" size={14} color="#FACC15" />
            <Text style={styles.ratingText}>4.8</Text>
          </View>
        </View>

        {/* About */}
        <Text style={styles.sectionTitle}>About Event</Text>
        <Text style={styles.aboutText}>
          Join us for a late-night cruise through the city limits. Smooth
          roads, cool breeze, and great company.
        </Text>

        {/* Itinerary */}
        <Text style={styles.sectionTitle}>Itinerary</Text>

        <Timeline
          time="08:00 PM"
          title="Downtown Plaza"
          sub="Meetup & Briefing"
        />
        <Timeline
          time="09:00 PM"
          title="River Bridge"
          sub="Photo Stop"
        />
        <Timeline
          time="10:30 PM"
          title="Highway Diner"
          sub="Late Night Snack & End"
          last
        />

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Action */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="share-social-outline" size={18} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.goingBtn}>
          <Ionicons name="checkmark-circle-outline" size={18} color="#fff" />
          <Text style={styles.goingText}>Going</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Stat = ({ label, value, valueColor }) => (
  <View style={styles.stat}>
    <Text style={styles.statLabel}>{label}</Text>
    <Text style={[styles.statValue, valueColor && { color: valueColor }]}>
      {value}
    </Text>
  </View>
);

const Divider = () => <View style={styles.statDivider} />;

const Timeline = ({ time, title, sub, last }) => (
  <View style={styles.timelineRow}>
    <View style={styles.timelineLeft}>
      <View style={styles.dot} />
      {!last && <View style={styles.line} />}
    </View>
    <View style={styles.timelineContent}>
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.place}>{title}</Text>
      <Text style={styles.sub}>{sub}</Text>
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff',marginTop:40 },

  cover: { height: 260, padding: 16, justifyContent: 'flex-end' },

  topIcons: {
    position: 'absolute',
    top: 14,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  badges: { flexDirection: 'row', gap: 8 },
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 },
  badgeText: { color: '#fff', fontSize: 11, fontWeight: '700' },
  badgeTextDark: { color: '#000', fontSize: 11, fontWeight: '700' },

  title: { color: '#fff', fontSize: 22, fontWeight: '800', marginTop: 8 },

  meta: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 6 },
  metaText: { color: '#E5E7EB', fontSize: 12 },

  statsCard: {
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 14,
    elevation: 2,
  },

  stat: { alignItems: 'center' },
  statLabel: { fontSize: 11, color: '#6B7280' },
  statValue: { fontSize: 16, fontWeight: '700' },
  statDivider: { width: 1, backgroundColor: '#E5E7EB' },

  hostCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 8,
  },

  hostLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  avatar: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#E5E7EB' },
  hostLabel: { fontSize: 11, color: '#9CA3AF' },
  hostName: { fontSize: 14, fontWeight: '600' },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  ratingText: { fontWeight: '600', fontSize: 12 },

  sectionTitle: {
    marginTop: 20,
    marginHorizontal: 16,
    fontSize: 15,
    fontWeight: '700',
  },

  aboutText: {
    marginHorizontal: 16,
    marginTop: 6,
    fontSize: 13,
    color: '#4B5563',
  },

  timelineRow: { flexDirection: 'row', marginHorizontal: 16, marginTop: 14 },
  timelineLeft: { alignItems: 'center', width: 20 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#EF4444' },
  line: { width: 2, flex: 1, backgroundColor: '#FCA5A5' },

  timelineContent: { marginLeft: 10 },
  time: { fontSize: 12, color: '#EF4444', fontWeight: '600' },
  place: { fontSize: 14, fontWeight: '600' },
  sub: { fontSize: 12, color: '#6B7280' },

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff',
    gap: 12,
    elevation: 10,
  },

  iconBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  goingBtn: {
    flex: 1,
    backgroundColor: '#16A34A',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },

  goingText: { color: '#fff', fontWeight: '700' },
});

export default EventDetailsScreen;
