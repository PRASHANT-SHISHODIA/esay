import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();

  const [pushEnabled, setPushEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>


      {/* ACCOUNT */}
      <Text style={styles.sectionTitle}>ACCOUNT</Text>

      <View style={styles.card}>
        <SettingRow
          icon="person-outline"
          title="Edit Profile"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <Divider />
        <SettingRow
          icon="lock-closed-outline"
          title="Change Password"
          onPress={() => navigation.navigate('ChangePassword')}
        />
      </View>

      {/* PREFERENCES */}
      <Text style={styles.sectionTitle}>PREFERENCES</Text>

      <View style={styles.card}>
        <SwitchRow
          icon="notifications-outline"
          title="Push Notifications"
          value={pushEnabled}
          onValueChange={setPushEnabled}
        />
        <Divider />
        <SwitchRow
          icon="location-outline"
          title="Location Services"
          value={locationEnabled}
          onValueChange={setLocationEnabled}
        />
        <Divider />
        <SwitchRow
          icon="moon-outline"
          title="Dark Mode"
          value={darkMode}
          onValueChange={setDarkMode}
        />
      </View>

      {/* LOGOUT */}
      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

      {/* Version */}
      <Text style={styles.version}>App Version 1.0.2 (Build 45)</Text>
    </View>
  );
};
const SettingRow = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <View style={styles.rowLeft}>
      <Ionicons name={icon} size={18} color="#666" />
      <Text style={styles.rowText}>{title}</Text>
    </View>
    <Ionicons name="chevron-forward" size={16} color="#aaa" />
  </TouchableOpacity>
);
const SwitchRow = ({ icon, title, value, onValueChange }) => (
  <View style={styles.row}>
    <View style={styles.rowLeft}>
      <Ionicons name={icon} size={18} color="#666" />
      <Text style={styles.rowText}>{title}</Text>
    </View>
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={{ false: '#ddd', true: '#F97316' }}
      thumbColor="#fff"
    />
  </View>
);
const Divider = () => <View style={styles.divider} />;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

  sectionTitle: {
    fontSize: 12,
    color: '#888',
    marginTop: 24,
    marginBottom: 8,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
  },

  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  rowText: {
    fontSize: 14,
    fontWeight: '500',
  },

  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginLeft: 44,
  },

  logoutBtn: {
    borderWidth: 1,
    borderColor: '#F97316',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 30,
  },

  logoutText: {
    color: '#F97316',
    fontWeight: '600',
  },

  version: {
    textAlign: 'center',
    fontSize: 12,
    color: '#aaa',
    marginTop: 14,
  },
});
export default SettingsScreen;
