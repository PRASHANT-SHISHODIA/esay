import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const stats = [
  { id: '1', label: 'Views', value: '854', sub: '+54', color: '#4CAF50' },
  { id: '2', label: 'Rating', value: '4.8', sub: 'Avg', color: '#FFC107' },
  { id: '3', label: 'Pending', value: '3', sub: 'Requests', color: '#FF7043' },
];

const listings = [
  {
    id: '1',
    name: 'Shell Station - Downtown',
    location: 'Main St, City Center',
    status: 'Active',
  },
  {
    id: '2',
    name: "Mike's Repair Shop",
    location: 'Industrial Area',
    status: 'Paused',
  },
];

const VendorDashboard = () => {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Vendor Panel</Text>
          <Text style={styles.headerSub}>AutoHub Services</Text>
        </View>
        <View style={styles.bell} />
      </View>

      {/* STATS */}
      <View style={styles.statsRow}>
        {stats.map(item => (
          <View key={item.id} style={styles.statCard}>
            <Text style={styles.statLabel}>{item.label}</Text>
            <Text style={styles.statValue}>{item.value}</Text>
            <Text style={[styles.statSub, { color: item.color }]}>
              {item.sub}
            </Text>
          </View>
        ))}
      </View>

      {/* QUICK ACTIONS */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.actionsRow}>
        <TouchableOpacity style={[styles.actionCard, styles.addCard]}>
          <View style={styles.plusCircle}>
            <Text style={styles.plus}>＋</Text>
          </View>
          <Text style={styles.actionText}>New Listing</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <View style={styles.graphIcon} />
          <Text style={styles.actionText}>View Analytics</Text>
        </TouchableOpacity>
      </View>

      {/* LISTINGS */}
      <View style={styles.listHeader}>
        <Text style={styles.sectionTitle}>Your Listings</Text>
        <Text style={styles.viewAll}>View All →</Text>
      </View>

      <FlatList
        data={listings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listCard}>
            <View style={styles.imagePlaceholder} />

            <View style={{ flex: 1 }}>
              <Text style={styles.listTitle}>{item.name}</Text>
              <Text style={styles.listLocation}>{item.location}</Text>
            </View>

            <View
              style={[
                styles.status,
                item.status === 'Active'
                  ? styles.active
                  : styles.paused,
              ]}
            >
              <Text
                style={[
                  styles.statusText,
                  item.status === 'Active'
                    ? styles.activeText
                    : styles.pausedText,
                ]}
              >
                {item.status}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },

  /* HEADER */
  header: {
    backgroundColor: '#E53935',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

  headerSub: {
    color: '#FFECEC',
    fontSize: 13,
    marginTop: 2,
  },

  bell: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },

  /* STATS */
  statsRow: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
  },

  statCard: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 4,
    alignItems: 'center',
  },

  statLabel: {
    fontSize: 12,
    color: '#9E9E9E',
  },

  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#212121',
    marginVertical: 4,
  },

  statSubGreen: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4CAF50',
  },

  statSubYellow: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFC107',
  },

  statSubOrange: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FF7043',
  },

  /* SECTION */
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#212121',
    marginTop: 20,
  },

  /* QUICK ACTIONS */
  actionsRow: {
    flexDirection: 'row',
    marginTop: 12,
  },

  actionCard: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginRight: 10,
  },

  addCard: {
    backgroundColor: '#FFF4E6',
  },

  plusCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFD6A6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  plus: {
    fontSize: 22,
    color: '#E53935',
  },

  graphIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E0E0E0',
  },

  actionText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#212121',
  },

  /* LIST */
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  viewAll: {
    fontSize: 13,
    color: '#E53935',
    fontWeight: '600',
  },

  listCard: {
    flexDirection: 'row',
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },

  imagePlaceholder: {
    width: 44,
    height: 44,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    marginRight: 12,
  },

  listTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#212121',
  },

  listLocation: {
    fontSize: 12,
    color: '#9E9E9E',
    marginTop: 2,
  },

  statusActive: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },

  statusPaused: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },

  activeText: {
    color: '#4CAF50',
    fontSize: 12,
    fontWeight: '600',
  },

  pausedText: {
    color: '#9E9E9E',
    fontSize: 12,
    fontWeight: '600',
  },
});


export default VendorDashboard;
