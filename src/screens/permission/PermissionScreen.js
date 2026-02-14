import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { loginSuccess } from '../../features/auth/authSlice';
import PermissionItem from './PermissionItem';
import { useNavigation } from '@react-navigation/native';

const PermissionsScreen = ({ route }) => {
  // const dispatch = useDispatch();
  // const { mobile, role } = route.params || {};

  const [location, setLocation] = useState(false);
  const [notification, setNotification] = useState(false);
  const [tracking, setTracking] = useState(false);
  const navigation = useNavigation();

  const permissions = [
    {
      id: 'location',
      title: 'Location Access',
      description:
        'Required for live tracking your rides and finding nearby fuel & repair shops.',
      icon: 'location-outline',
      color: '#E53935',
      bg: '#FEF2F2',
      value: location,
      setter: setLocation,
    },
    {
      id: 'notification',
      title: 'Notifications',
      description:
        'Get updates on nearby events, ride invites, and safety alerts.',
      icon: 'notifications-outline',
      color: '#7C3AED',
      bg: '#F5F3FF',
      value: notification,
      setter: setNotification,
    },
    {
      id: 'tracking',
      title: 'Always-on Tracking',
      description:
        'Ensures your ride is recorded accurately even when your phone is in your pocket.',
      icon: 'navigate-outline',
      color: '#16A34A',
      bg: '#ECFDF5',
      value: tracking,
      setter: setTracking,
    },
  ];

  const handleAllowAll = () => {
    setLocation(true);
    setNotification(true);
    setTracking(true);

    setTimeout(() => {
      navigation.replace('MainTabs');
    }, 400);
  };

  const handleMaybeLater = () => {
    navigation.replace('MainTabs');
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Text style={styles.title}>Enable Permissions</Text>
      <Text style={styles.subtitle}>
        To provide the best riding experience, Easy Rasta needs access to a few
        things on your device.
      </Text>

      {/* PERMISSIONS */}
      {permissions.map(item => (
        <PermissionItem key={item.id} {...item} />
      ))}

      {/* BUTTON */}
      <TouchableOpacity style={styles.button} onPress={handleAllowAll}>
        <Text style={styles.buttonText}>Allow All & Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMaybeLater}>
        <Text style={styles.later}>Maybe Later</Text>
      </TouchableOpacity>
    </View>
  );
};

const COLORS = {
  primary: '#E53935',
  border: '#E5E7EB',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  white: '#FFFFFF',
};

const styles = StyleSheet.create({
  /* SCREEN */
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 48,
  },

  /* HEADER */
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
    marginBottom: 32,
  },

  /* PERMISSION CARD */
  permissionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 14,
    borderWidth: 1.5,
    marginBottom: 16,
  },

  /* LEFT ICON CIRCLE */
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  /* TEXT */
  permissionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },

  permissionDesc: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 4,
    lineHeight: 18,
    paddingRight: 8,
  },

  /* BUTTON */
  button: {
    height: 56,
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },

  /* MAYBE LATER */
  later: {
    textAlign: 'center',
    marginTop: 18,
    fontSize: 13,
    color: COLORS.textSecondary,
  },
});

export default PermissionsScreen;
