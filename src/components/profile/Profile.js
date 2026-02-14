import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { logout } from '../../app/authSlice';
import SignOut from './signOut/SignOut';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [showLogout, setShowLogout] = useState(false);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* PROFILE HEADER */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarWrapper}>
          <View style={styles.avatar} />
          <View style={styles.onlineDot} />
        </View>

        <Text style={styles.name}>Alex Rider</Text>
        <Text style={styles.level}>Level 5 • Trail Blazer</Text>
      </View>

      {/* RANK CARD */}
      <TouchableOpacity
        style={styles.rankCard}
        onPress={() => navigation.navigate('Achievements')}
      >
        <Text style={styles.rankLabel}>CURRENT RANK</Text>
        <Text style={styles.rankTitle}>Trail Blazer</Text>

        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>

        <View style={styles.rankRow}>
          <Text style={styles.rankText}>5750 XP</Text>
          <Text style={styles.rankText}>2250 XP to Level 6</Text>
        </View>

        <TouchableOpacity style={styles.leaderboardBtn}>
          <Ionicons name="trophy-outline" size={14} color="#fff" />
          <Text style={styles.leaderboardText}>View Leaderboard</Text>
        </TouchableOpacity>

        <Text style={styles.nextRank}>Next: Road Warrior</Text>
      </TouchableOpacity>

      {/* QUICK ACTIONS */}
      <View style={styles.actionRow}>
        <ActionCard
          icon="construct-outline"
          title="My Garage"
          sub="Manage vehicles & docs"
          onPress={() => navigation.navigate('Garage')}
        />
        <ActionCard
          icon="time-outline"
          title="Ride History"
          sub="View past trips & stats"
          onPress={() => navigation.navigate('RideHistory')}
        />
      </View>

      {/* BADGES */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Badges</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Achievements')}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.badgesRow}>
        <Badge title="Safety First" icon="shield-checkmark-outline" />
        <Badge title="Veteran" icon="ribbon-outline" />
        <Badge title="Speed Demon" icon="flash-outline" />
        <Badge title="Explorer" icon="location-outline" />
      </View>

      {/* SETTINGS */}

      <View style={styles.settingsCard}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          activeOpacity={0.7}
        >
          <SettingItem icon="settings-outline" title="Settings" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications')}
          activeOpacity={0.7}
        >
          <SettingItem
            icon="notifications-outline"
            title="Notifications"
            badge="4"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Help & Support')}
          activeOpacity={0.7}
        >
          <SettingItem icon="help-circle-outline" title="Help & Support" />
        </TouchableOpacity>
      </View>

      {/* SIGN OUT */}
      <TouchableOpacity
        style={styles.signOut}
        onPress={() => setShowLogout(true)}
        activeOpacity={0.7}
      >
        <Ionicons name="log-out-outline" size={18} color="#EF4444" />
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
      <SignOut 
        visible={showLogout} 
        onClose={() => setShowLogout(false)} 
        onConfirm={() => {
          dispatch(logout());
          setShowLogout(false);
        }}
      />
    </ScrollView>
  );
}

/* 🔹 COMPONENTS */

const ActionCard = ({ icon, title, sub, onPress }) => (
  <TouchableOpacity style={styles.actionCard} onPress={onPress}>
    <Ionicons name={icon} size={20} color="#EF4444" />
    <Text style={styles.actionTitle}>{title}</Text>
    <Text style={styles.actionSub}>{sub}</Text>
  </TouchableOpacity>
);

const Badge = ({ icon, title }) => (
  <View style={styles.badge}>
    <Ionicons name={icon} size={22} color="#EF4444" />
    <Text style={styles.badgeText}>{title}</Text>
  </View>
);

const SettingItem = ({ icon, title, badge }) => (
  <View style={styles.settingItem}>
    <View style={styles.settingLeft}>
      <Ionicons name={icon} size={18} color="#6B7280" />
      <Text style={styles.settingText}>{title}</Text>
    </View>
    <View style={styles.settingRight}>
      {badge && (
        <View style={styles.badgeCount}>
          <Text style={styles.badgeNum}>{badge}</Text>
        </View>
      )}
      <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
    </View>
  </View>
);
