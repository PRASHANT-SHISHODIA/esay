import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const podiumData = [
  { id: 2, name: 'Alex Rider', km: '1,105 km', rank: 2 },
  { id: 1, name: 'Sarah J.', km: '1,240 km', rank: 1 },
  { id: 3, name: 'Mike T.', km: '980 km', rank: 3 },
];

const listData = [
  { id: 4, name: 'Elena R.', km: '850 km', trend: 'up' },
  { id: 5, name: 'Chris P.', km: '720 km', trend: 'down' },
  { id: 6, name: 'Sam W.', km: '690 km' },
  { id: 'you', name: 'You', km: '1,105 km', highlight: true },
];

const LeaderboardScreen = () => {
  const [activeTab, setActiveTab] = useState('Monthly');

  const renderItem = ({ item, index }) => (
    <View
      style={[
        styles.row,
        item.highlight && styles.highlightRow,
      ]}
    >
      <Text style={styles.rank}>{index + 4}</Text>

      <View style={styles.user}>
        <View style={styles.avatar} />
        <Text style={styles.name}>{item.name}</Text>
      </View>

      <View style={styles.distanceWrap}>
        <Text style={styles.distance}>{item.km}</Text>
        {item.trend === 'up' && (
          <Ionicons name="arrow-up" size={14} color="green" />
        )}
        {item.trend === 'down' && (
          <Ionicons name="arrow-down" size={14} color="red" />
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Toggle Buttons */}
      {/* <View style={styles.topTabs}>
        <TouchableOpacity style={styles.tab}>
          <Ionicons name="ribbon-outline" size={16} />
          <Text>Achievements</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Ionicons name="trending-up-outline" size={16} color="#fff" />
          <Text style={{ color: '#fff' }}>Leaderboard</Text>
        </TouchableOpacity>
      </View> */}

      {/* Monthly / All Time */}
      <View style={styles.filterTabs}>
        {['Monthly', 'All Time'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.filterBtn,
              activeTab === tab && styles.activeFilter,
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.filterText,
                activeTab === tab && styles.activeText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Podium */}
      <View style={styles.podium}>
        {podiumData.map(item => (
          <View
            key={item.id}
            style={[
              styles.podiumItem,
              item.rank === 1 && styles.centerPodium,
            ]}
          >
            {item.rank === 1 && (
              <Ionicons name="crown" size={20} color="gold" />
            )}
            <View
              style={[
                styles.podiumAvatar,
                item.rank === 1 && styles.goldBorder,
              ]}
            />
            <Text style={styles.podiumName}>{item.name}</Text>
            <Text style={styles.podiumKm}>{item.km}</Text>
          </View>
        ))}
      </View>

      {/* List */}
      <View style={styles.listHeader}>
        <Text style={styles.headerText}>RIDER</Text>
        <Text style={styles.headerText}>DISTANCE</Text>
      </View>

      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },

  topTabs: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderRadius: 30,
    padding: 4,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 25,
    gap: 6,
  },

  activeTab: {
    backgroundColor: '#0D1B2A',
  },

  filterTabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },

  filterBtn: {
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 6,
  },

  activeFilter: {
    backgroundColor: '#E53935',
    borderColor: '#E53935',
  },

  filterText: {
    color: '#555',
  },

  activeText: {
    color: '#fff',
  },

  podium: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },

  podiumItem: {
    alignItems: 'center',
  },

  centerPodium: {
    marginTop: -10,
  },

  podiumAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
    marginVertical: 6,
  },

  goldBorder: {
    borderWidth: 3,
    borderColor: 'gold',
  },

  podiumName: {
    fontWeight: '600',
  },

  podiumKm: {
    color: 'red',
    fontSize: 12,
  },

  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  headerText: {
    color: '#888',
    fontSize: 12,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  highlightRow: {
    backgroundColor: '#FFF1F1',
    borderRadius: 8,
    paddingHorizontal: 8,
  },

  rank: {
    width: 30,
    fontWeight: '600',
  },

  user: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 8,
  },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#bbb',
  },

  name: {
    fontWeight: '500',
  },

  distanceWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  distance: {
    fontWeight: '600',
  },
});

export default LeaderboardScreen;
