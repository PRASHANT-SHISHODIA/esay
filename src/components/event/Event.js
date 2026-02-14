import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EventCard from './EventCard';
import { useNavigation } from '@react-navigation/native';


 export const events = [
  {
    id: '1',
    status: 'GOING',
    statusColor: '#22C55E',
    tag: 'CRUISE',
    title: 'Midnight Highway Run',
    date: 'Oct 24, 2023 • 8:00 PM',
    author: 'Night Riders Club',
    price: 'Free',
    members: '42',
    isThisWeek: true,
  },
  {
    id: '2',
    status: 'CHARITY',
    statusColor: '#EF4444',
    tag: 'CHARITY',
    title: 'Coastal Charity Ride',
    date: 'Oct 28, 2023 • 9:00 AM',
    author: 'Sarah J.',
    price: '$10',
    members: '+',
    isThisWeek: true,
  },
  {
    id: '3',
    status: 'HOSTING',
    statusColor: '#FACC15',
    tag: 'OFF-ROAD',
    title: 'Off-Road Adventure',
    date: 'Nov 02, 2023 • 7:00 AM',
    author: 'Alex Rider',
    price: 'Free',
    members: '15',
    isThisWeek: false,
  },
];
export default function EventsScreen() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeTab, setActiveTab] = useState('Explore');
  const navigation = useNavigation();

  

  const filteredEvents = events.filter(event => {
    // First, filter by tab
    if (activeTab === 'My Events') {
      if (event.status !== 'GOING' && event.status !== 'HOSTING') {
        return false;
      }
    }
    // Then, filter by chip
    if (activeFilter === 'This Week') {
      return event.isThisWeek;
    }
    if (activeFilter === 'Free') {
      return event.price === 'Free';
    }
    if (activeFilter === 'Easy') {
      return event.status === 'CHARITY';
    }
    if (activeFilter === 'Hard') {
      return event.status === 'HOSTING';
    }
    return true;
  });
 

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 🔴 HEADER */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.headerTitle}>Events</Text>
            <View style={styles.headerTabs}>
              <TouchableOpacity onPress={() => setActiveTab('Explore')}>
                <Text style={[styles.headerTab, activeTab === 'Explore' && styles.activeHeaderTab]}>
                  Explore
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setActiveTab('My Events')}>
                <Text style={[styles.headerTab, activeTab === 'My Events' && styles.activeHeaderTab]}>
                  My Events
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* SEARCH */}
          <View style={styles.searchBox}>
            <Ionicons name="search" size={18} color="#9CA3AF" />
            <TextInput
              placeholder="Search rides, locations..."
              placeholderTextColor="#9CA3AF"
              style={styles.searchInput}
            />
            <View style={styles.filterIcon}>
              <Ionicons name="filter-outline" size={18} color="#374151" />
            </View>
          </View>
        </View>

        {/* FILTER CHIPS */}
        <View style={styles.chipsRow}>
          {['All', 'This Week', 'Free', 'Easy', 'Hard'].map(chip => (
            <TouchableOpacity
              key={chip}
              style={[styles.chip, activeFilter === chip && styles.activeChip]}
              onPress={() => setActiveFilter(chip)}
            >
              <Text
                style={[
                  styles.chipText,
                  activeFilter === chip && styles.activeChipText,
                ]}
              >
                {chip}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* EVENT CARDS */}
        {filteredEvents.map((event, index) => (
          <TouchableOpacity
            key={event.id}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('EventDetails', {
                event: event,
              })
            }
          >
            <EventCard
              status={event.status}
              statusColor={event.statusColor}
              tag={event.tag}
              title={event.title}
              date={event.date}
              author={event.author}
              price={event.price}
              members={event.members}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingTop: 40,
  },

  /* HEADER */
  header: {
    backgroundColor: '#E5391A',
    padding: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },

  headerTabs: {
    flexDirection: 'row',
    gap: 16,
  },

  headerTab: {
    color: '#FECACA',
    fontSize: 13,
  },

  activeHeaderTab: {
    color: '#fff',
    fontWeight: '700',
    borderBottomWidth: 2,
    borderColor: '#fff',
    paddingBottom: 2,
  },

  searchBox: {
    marginTop: 14,
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: '#111827',
  },

  filterIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* CHIPS */
  chipsRow: {
    flexDirection: 'row',
    padding: 16,
    gap: 10,
  },

  chip: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  activeChip: {
    backgroundColor: '#EF4444',
  },

  chipText: {
    fontSize: 12,
    color: '#374151',
  },

  activeChipText: {
    color: '#fff',
    fontWeight: '600',
  },
});
