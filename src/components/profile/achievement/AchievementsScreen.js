import React, { useState } from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LeaderBoardScreen from './LeaderBoardScreen';
import Achievement from './Achievement';

/* ---------------- Progress Bar ---------------- */
const ProgressBar = ({ value }) => (
  <View style={styles.progressBg}>
    <View style={[styles.progressFill, { width: `${value}%` }]} />
  </View>
);

/* ---------------- Main Screen ---------------- */
const AchievementsScreen = () => {
  const [activeTab, setActiveTab] = useState('achievements');

  return (
    <FlatList
      data={[]}
      renderItem={null}
      keyExtractor={() => 'key'}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          {/* ---------- Header ---------- */}
          <LinearGradient
            colors={['#F97316', '#EA580C']}
            style={styles.header}
          >
            <Text style={styles.headerTitle}>Achievements</Text>

            <Text style={styles.levelLabel}>CURRENT LEVEL</Text>
            <Text style={styles.level}>Trail Blazer</Text>

            <View style={styles.levelRow}>
              <Text style={styles.levelSmall}>Level 5</Text>
              <Text style={styles.levelSmall}>5750 / 8000 XP</Text>
            </View>

            <ProgressBar value={72} />
          </LinearGradient>

          {/* ---------- Tabs ---------- */}
          <View style={styles.tabs}>
            {/* Achievements Tab */}
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === 'achievements' && styles.tabActive,
              ]}
              onPress={() => setActiveTab('achievements')}
              activeOpacity={0.8}
            >
              {activeTab === 'achievements' && (
                <Ionicons
                  name="ribbon-outline"
                  size={18}
                  color="#fff"
                  style={styles.tabIcon}
                />
              )}
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'achievements' && styles.tabTextActive,
                ]}
              >
                Achievements
              </Text>
            </TouchableOpacity>

            {/* Leaderboard Tab */}
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === 'leaderboard' && styles.tabActive,
              ]}
              onPress={() => setActiveTab('leaderboard')}
              activeOpacity={0.8}
            >
              {activeTab === 'leaderboard' && (
                <Ionicons
                  name="trending-up-outline"
                  size={18}
                  color="#fff"
                  style={styles.tabIcon}
                />
              )}
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'leaderboard' && styles.tabTextActive,
                ]}
              >
                Leaderboard
              </Text>
            </TouchableOpacity>
          </View>

          {/* ---------- Content ---------- */}
          {activeTab === 'achievements' && <Achievement />}
          {activeTab === 'leaderboard' && <LeaderBoardScreen />}

          <View style={{ height: 30 }} />
        </>
      }
    />
  );
};

export default AchievementsScreen;

/* ---------------- Styles ---------------- */
const styles = StyleSheet.create({
  header: {
    padding: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },

  levelLabel: {
    color: '#FFE4D5',
    fontSize: 12,
  },

  level: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
  },

  levelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },

  levelSmall: {
    color: '#FFE4D5',
    fontSize: 12,
  },

  progressBg: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 6,
    marginTop: 10,
  },

  progressFill: {
    height: 6,
    backgroundColor: '#fff',
    borderRadius: 6,
  },

  /* -------- Tabs -------- */
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 16,
    padding: 4,
  },

  tab: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 12,
  },

  tabActive: {
    backgroundColor: '#111827',
  },

  tabText: {
    color: '#6B7280',
    fontSize: 15,
    fontWeight: '500',
  },

  tabTextActive: {
    color: '#fff',
    fontWeight: '600',
  },

  tabIcon: {
    marginRight: 6,
  },
});
