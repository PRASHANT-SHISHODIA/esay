import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DATA = [
  { id: '1', name: 'IndianOil', price: '$3.24', type: 'Fuel' },
  { id: '2', name: 'HP Petrol', price: '$3.92', type: 'Fuel' },
  { id: '3', name: 'Food Hub', price: '$12', type: 'Food' },
  { id: '4', name: 'Bike Repair Pro', price: 'Open', type: 'Repair' },
];

export default function FindScreen() {
  const [showList, setShowList] = useState(false);
  const [activeTab, setActiveTab] = useState('Fuel');

  const filteredData = DATA.filter(item => item.type === activeTab);

  return (
    <View style={styles.container}>
      {/* TOP SECTION */}
  
        <View style={styles.topSection}>
          {/* SEARCH */}
          <View style={styles.searchBox}>
            <Ionicons name="search" size={18} color="#6B7280" />
            <Text style={styles.searchText}>
              {activeTab === 'Fuel' ? 'Petrol pumps' : activeTab}
            </Text>
          </View>

          {/* TABS */}
          <View style={styles.tabs}>
            {['Fuel', 'Food', 'Repair'].map(tab => (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={[styles.tab, activeTab === tab && styles.activeTab]}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.activeTabText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
       
          {!showList ? (
            <View style={styles.mapView}>
              <Text style={styles.mapText}>🗺 Map View (pins here)</Text>
            </View>
          ) : (
            <FlatList
              data={filteredData}
              keyExtractor={item => item.id}
              contentContainerStyle={{ paddingBottom: 100 }}
              renderItem={({ item }) => (
                <View style={styles.listCard}>
                  <Text style={styles.price}>{item.price}</Text>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.tag}>{item.type}</Text>
                </View>
              )}
            />
          )}
          <TouchableOpacity
            style={styles.showListBtn}
            onPress={() => setShowList(!showList)}
          >
            <Ionicons name={showList ? 'map' : 'list'} size={16} color="#fff" />
            <Text style={styles.showListText}>
              {showList ? 'Show Map' : 'Show List'}
            </Text>
          </TouchableOpacity>
      

      {/* MAP / LIST */}

      {/* FLOATING BUTTON */}
      {/* <TouchableOpacity
    style={styles.showListBtn}
    onPress={() => setShowList(!showList)}
  >
    <Ionicons name={showList ? 'map' : 'list'} size={16} color="#fff" />
    <Text style={styles.showListText}>
      {showList ? 'Show Map' : 'Show List'}
    </Text>
  </TouchableOpacity> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    paddingTop:25,
  },

  topSection: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  searchBox: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },

  searchText: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '500',
  },

  tabs: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 8,
  },

  tab: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  activeTab: {
    backgroundColor: '#FEE2E2',
  },

  tabText: {
    fontSize: 12,
    color: '#374151',
  },

  activeTabText: {
    color: '#EF4444',
    fontWeight: '600',
  },

  mapView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mapText: {
    fontSize: 16,
    color: '#6B7280',
  },

  listCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 10,
    padding: 14,
    borderRadius: 14,
  },

  price: {
    backgroundColor: '#16A34A',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    alignSelf: 'flex-start',
    fontSize: 12,
  },

  name: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 6,
  },

  tag: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 2,
  },

  showListBtn: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#111827',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },

  showListText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
