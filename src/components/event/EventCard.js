import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'

export default function EventCard({ status, statusColor, tag, title, date, author, price, members }) {
  

  return (
    <View style={styles.card}>
      <View style={styles.cardImage}>
        <View style={[styles.statusBadge, { backgroundColor: statusColor }]}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
        <View style={styles.priceBadge}>
          <Text style={styles.priceText}>{price}</Text>
        </View>
        <View style={styles.tagBadge}>
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      </View>

      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{title}</Text>

        <View style={styles.row}>
          <Ionicons name="calendar-outline" size={14} color="#6B7280" />
          <Text style={styles.subText}>{date}</Text>
        </View>

        <View style={styles.rowBetween}>
          <View style={styles.row}>
            <Ionicons name="person-circle-outline" size={18} color="#9CA3AF" />
            <Text style={styles.subText}>by {author}</Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="people-outline" size={16} color="#6B7280" />
            <Text style={styles.subText}>{members}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 14,
    borderRadius: 14,
    overflow: 'hidden',
  },

  cardImage: {
    height: 90,
    backgroundColor: '#E5E7EB',
    padding: 10,
  },

  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },

  statusText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
  },

  priceBadge: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },

  priceText: {
    fontSize: 11,
    fontWeight: '600',
  },

  tagBadge: {
    position: 'absolute',
    bottom: 8,
    left: 10,
    backgroundColor: '#EF4444',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },

  tagText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
  },

  cardBody: {
    padding: 14,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
   subText: {
    fontSize: 12,
    color: '#6B7280',
  },
})