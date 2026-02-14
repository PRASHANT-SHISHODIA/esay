import React from 'react';
import { View, Text, TouchableOpacity, Switch,StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PermissionItem = ({
  title,
  description,
  icon,
  color,
  bg,
  value,
  setter,
}) => {
  return (
    <TouchableOpacity
  activeOpacity={0.9}
  onPress={() => setter(!value)}
  style={[
    styles.permissionCard,
    {
      borderColor: value ? color : COLORS.border,
      backgroundColor: value ? bg : COLORS.white,
    },
  ]}
>
  {/* LEFT */}
  <View style={styles.leftSection}>
    <View style={[styles.iconCircle, { backgroundColor: bg }]}>
      <Ionicons name={icon} size={20} color={color} />
    </View>

    <View style={styles.textWrapper}>
      <Text style={styles.permissionTitle}>{title}</Text>
      <Text style={styles.permissionDesc}>{description}</Text>
    </View>
  </View>

  {/* RIGHT */}
  {value ? (
    <Ionicons name="checkmark-circle" size={22} color={color} />
  ) : (
    <Switch
      value={value}
      onValueChange={setter}
      trackColor={{ false: '#E0E0E0', true: color }}
      thumbColor="#fff"
    />
  )}
</TouchableOpacity>

  );
};

const COLORS = {
  primary: '#E53935',
  border: '#E0E0E0',
  textPrimary: '#212121',
  textSecondary: '#9E9E9E',
  white: '#FFFFFF',
};

const styles = StyleSheet.create({
permissionCard: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: 18,
  paddingHorizontal: 16,
  borderRadius: 14,
  borderWidth: 1.5,
  marginBottom: 16,
},

leftSection: {
  flexDirection: 'row',
  alignItems: 'flex-start',
  flex: 1,
  paddingRight: 12,
},

iconCircle: {
  width: 42,
  height: 42,
  borderRadius: 21,
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 14,
},

textWrapper: {
  flex: 1,
},

permissionTitle: {
  fontSize: 15,
  fontWeight: '600',
  color: '#111827',
},

permissionDesc: {
  fontSize: 13,
  color: '#6B7280',
  marginTop: 4,
  lineHeight: 18,
},

})
export default PermissionItem;