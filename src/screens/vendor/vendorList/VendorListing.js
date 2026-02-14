import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const listings = [
  {
    id: '1',
    name: 'Shell Station - Downtown',
    address: '123 Main St',
    views: 450,
    rating: 4.5,
    status: 'ACTIVE',
    category: 'Fuel',
  },
  {
    id: '2',
    name: "Mike's Repair Shop",
    address: '45 Industrial Ave',
    views: 120,
    rating: 4.8,
    status: 'PAUSED',
    category: 'Repair',
  },
];

const VendorListing = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Listings</Text>
        <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('AddListing')}>
          <Text style={styles.addText}>＋ Add New</Text>
        </TouchableOpacity>
      </View>

      {/* LIST */}
      <FlatList
        data={listings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>

            {/* IMAGE */}
            <View style={styles.image}>
              <View
                style={[
                  styles.statusBadge,
                  item.status === 'ACTIVE'
                    ? styles.activeBadge
                    : styles.pausedBadge,
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    item.status === 'ACTIVE'
                      ? styles.activeText
                      : styles.pausedText,
                  ]}
                >
                  {item.status}
                </Text>
              </View>

              <View style={styles.menuDot}>
                <Text>⋮</Text>
              </View>
            </View>

            {/* INFO */}
            <View style={styles.info}>
              <View style={styles.titleRow}>
                <Text style={styles.title}>{item.name}</Text>
                <View style={styles.category}>
                  <Text style={styles.categoryText}>{item.category}</Text>
                </View>
              </View>

              <Text style={styles.address}>📍 {item.address}</Text>

              <View style={styles.metaRow}>
                <Text style={styles.meta}>
                  {item.views} Views
                </Text>
                <Text style={styles.meta}>
                  ⭐ {item.rating} Rating
                </Text>

                <View style={styles.actions}>
                  <Text style={styles.actionIcon}>⏻</Text>
                  <Text style={styles.actionIcon}>⤴</Text>
                </View>
              </View>
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
    marginTop: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#212121',
  },

  addBtn: {
    backgroundColor: '#FF6A00',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },

  addText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },

  card: {
    backgroundColor: '#F9FAFB',
    borderRadius: 14,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },

  image: {
    height: 120,
    backgroundColor: '#E5E7EB',
    position: 'relative',
  },

  statusBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },

  activeBadge: {
    backgroundColor: '#E8F5E9',
  },

  pausedBadge: {
    backgroundColor: '#ECEFF1',
  },

  statusText: {
    fontSize: 11,
    fontWeight: '700',
  },

  activeText: {
    color: '#2E7D32',
  },

  pausedText: {
    color: '#263238',
  },

  menuDot: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },

  info: {
    padding: 12,
  },

  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#212121',
    flex: 1,
    paddingRight: 8,
  },

  category: {
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },

  categoryText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#EF6C00',
  },

  address: {
    fontSize: 12,
    color: '#757575',
    marginTop: 6,
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  meta: {
    fontSize: 12,
    color: '#424242',
    marginRight: 16,
    fontWeight: '600',
  },

  actions: {
    marginLeft: 'auto',
    flexDirection: 'row',
  },

  actionIcon: {
    fontSize: 16,
    marginLeft: 12,
    color: '#757575',
  },
});

export default VendorListing;
