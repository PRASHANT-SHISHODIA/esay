import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Rank() {
  const navigation = useNavigation();

  return (
    <View>
     {/* Rank Section */}
        <View style={styles.row}>
          {/* RANK CARD */}
          <TouchableOpacity style={styles.rankCard} onPress={() => navigation.navigate('Profile',{screen:'Achievements'})}>
            <Text style={styles.sectionHeading}>RANK</Text>

            <View style={styles.rankInfo}>
              <Text style={styles.level}>Level 5</Text>
              <Text style={styles.rankTitle}>Trail Blazer</Text>
              <Text style={styles.xp}>5750 / 8000 XP</Text>

              {/* Absolute badge */}
              <Text style={styles.rankChange}>+3</Text>

              {/* Progress Bar */}
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '72%' }]} />
              </View>
            </View>
          </TouchableOpacity>

          {/* COMMUNITY CARD */}
          <View style={styles.communityCard}>
            <Text style={{ color: 'white',fontSize: 12, }}>Community</Text>

            <Text style={styles.communityTitle}>Lead the Pack</Text>
            <Text style={styles.communityText}>
              Host a ride for your crew today.
            </Text>

            <TouchableOpacity style={styles.redButton} onPress={() => navigation.navigate('CreateEvent')}>
              <Text style={styles.redButtonText}>+ Host</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>

  )
}

const styles = StyleSheet.create({
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
   row: {
  flexDirection: 'row',
  gap: 12,               // spacing between cards (RN 0.71+)
  paddingHorizontal: 1,
},
rankCard: {
  flex: 1,              
  backgroundColor: '#FFFFFF',
  borderRadius: 16,
  padding: 16,
  borderWidth: 1,
  borderColor: '#FFE0D8',
  position: 'relative',
},
rankInfo: {
    flex: 1,
  },
  level: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
    marginBottom: 1,
  },
  rankTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  xp: {
    fontSize: 14,
    color: '#666',
  },
  rankChange: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#34C759',
  },
  progressBarContainer: {
    marginTop: 5,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E5E5E5',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 3,
  },
  communityCard: {
  flex: 1,               
  backgroundColor: '#1F2937',
  borderRadius: 16,
  padding: 10,
  position: 'relative',
},
  communityTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  communityText: {
    fontSize: 10,
    color: '#DAD9FF',
    marginBottom: 20,
    textAlign: 'center',
    paddingRight: 10,

  },
    redButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 25,
     alignItems: 'center',
     marginTop: 18,
  },
  redButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
   
  },
})