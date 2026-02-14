import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const notifications = [
  {
    id: '1',
    type: 'ride',
    title: 'Ride Reminder',
    desc: 'Midnight Highway Run starts in 1 hour.',
    time: '1h ago',
    icon: 'bicycle-outline',
    color: '#3B82F6',
  },
  {
    id: '2',
    type: 'service',
    title: 'Service Due',
    desc: 'Yamaha MT-07 service due in 500km.',
    time: '5h ago',
    icon: 'construct-outline',
    color: '#F97316',
  },
  {
    id: '3',
    type: 'badge',
    title: 'Badge Earned',
    desc: "You unlocked 'Explorer' badge!",
    time: '1d ago',
    icon: 'ribbon-outline',
    color: '#FACC15',
  },
  {
    id: '4',
    type: 'feature',
    title: 'New Feature',
    desc: 'Try out the new Group Tracking feature.',
    time: '2d ago',
    icon: 'flash-outline',
    color: '#EF4444',
  },
];

const NotificationsScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={[styles.iconWrap, { backgroundColor: `${item.color}20` }]}>
        <Ionicons name={item.icon} size={20} color={item.color} />
      </View>

      <View style={styles.textWrap}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>

      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      {/* List */}
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Clear All */}
      <TouchableOpacity style={styles.clearBtn}>
        <Text style={styles.clearText}>Clear All Notifications</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 12,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  textWrap: {
    flex: 1,
  },

  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },

  desc: {
    fontSize: 12,
    color: '#6B7280',
  },

  time: {
    fontSize: 11,
    color: '#9CA3AF',
  },

  clearBtn: {
    paddingVertical: 16,
    alignItems: 'center',
  },

  clearText: {
    color: '#9CA3AF',
    fontSize: 13,
  },
});


export default NotificationsScreen;
