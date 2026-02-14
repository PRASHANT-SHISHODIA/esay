import { Text, View,  StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function QuicFind() {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.section}>
        <View style={styles.separator} />

        <Text style={styles.sectionHeading}>Quick Find</Text>

        <View style={styles.quickFindRow}>
          <QuickFindItem 
            icon="car" 
            label="Fuel" 
            bg="#FFF3E8" 
            color="#FF7A00" 
            onPress={() => navigation.navigate('Find', { type: 'fuel' })} 
          />
          <QuickFindItem
            icon="cafe"
            label="Food"
            bg="#FFF8E1"
            color="#F59E0B"
            onPress={() => navigation.navigate('Find', { type: 'food' })}
          />
          <QuickFindItem
            icon="build"
            label="Repair"
            bg="#F3F4F6"
            color="#6B7280"
            onPress={() => navigation.navigate('Find', { type: 'repair' })}
          />
          <QuickFindItem
            icon="calendar"
            label="Events"
            bg="#FFECEC"
            color="#EF4444"
            onPress={() => navigation.navigate('Events')}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
}
const QuickFindItem = ({ icon, label, bg, color, onPress }) => (
  <TouchableOpacity style={styles.quickFindItem} onPress={onPress}>
    <View style={[styles.iconBox, { backgroundColor: bg }]}>
      <Ionicons name={icon} size={22} color={color} />
    </View>
    <Text style={styles.quickFindLabel}>{label}</Text>
  </TouchableOpacity>
);

export const styles=StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 15,
  },
     section: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 15,
  },
  quickFindRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},

quickFindItem: {
  alignItems: 'center',
  width: '22%',
},
iconBox: {
  width: 56,
  height: 56,
  borderRadius: 16,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 6,
},

quickFindLabel: {
  fontSize: 12,
  fontWeight: '500',
  color: '#374151',
},
})
