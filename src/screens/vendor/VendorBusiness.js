import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import SignOut from '../../components/profile/signOut/SignOut';
import { useDispatch } from 'react-redux';
import { logout } from '../../app/authSlice';
import Ionicons from 'react-native-vector-icons/Ionicons';
  

const VendorBusinessScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState(true);
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useDispatch();

//   const handleLogout = () => {
//     // 🔴 yahan Redux logout dispatch hoga
//     console.log('Sign out');
//   };

  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.logoBox}>
          <Text style={styles.logoIcon}>🏪</Text>
        </View>

        <Text style={styles.businessName}>AutoHub Services</Text>
        <Text style={styles.vendorId}>Vendor ID: #VN-8842</Text>

        <View style={styles.verifiedBadge}>
          <Text style={styles.verifiedText}>✔ Verified Business</Text>
        </View>
      </View>

      {/* BUSINESS DETAILS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>BUSINESS DETAILS</Text>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>🏢  Edit Business Profile</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>📄  GST & Documents</Text>
          <View style={styles.rowRight}>
            <View style={styles.verifiedSmall}>
              <Text style={styles.verifiedSmallText}>Verified</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>💳  Payment Settlements</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>

      {/* SETTINGS */}
      <View style={styles.section}>
     
        <Text style={styles.sectionTitle}>SETTINGS</Text>
   

        <View style={styles.row}>
          <Text style={styles.rowText}>🔔  Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#E0E0E0', true: '#FF6A00' }}
          />
        </View>
      </View>

      {/* SIGN OUT */}
       <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => setShowLogout(true)}
        activeOpacity={0.4}
      >
        <Ionicons name="log-out-outline" size={18} color="#EF4444" />
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>
      <SignOut 
        visible={showLogout} 
        onClose={() => setShowLogout(false)} 
        onConfirm={() => {
          dispatch(logout());
          setShowLogout(false);
        }}/>

      <Text style={styles.version}>Vendor App v1.0</Text>

    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  /* HEADER */
  header: {
    backgroundColor: '#E53935',
    paddingVertical: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  logoBox: {
    width: 72,
    height: 72,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  logoIcon: {
    fontSize: 28,
  },

  businessName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  vendorId: {
    fontSize: 13,
    color: '#FFECEC',
    marginTop: 4,
  },

  verifiedBadge: {
    backgroundColor: '#D84315',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    marginTop: 10,
  },

  verifiedText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },

  /* SECTION */
  section: {
    backgroundColor: '#FFFFFF',
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: 6,
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#959595ff',
    marginLeft: 16,
    marginVertical: 8,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderColor: '#F0F0F0',
  },

  rowText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#212121',
  },

  arrow: {
    fontSize: 20,
    color: '#9E9E9E',
  },

  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  verifiedSmall: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    marginRight: 8,
  },

  verifiedSmallText: {
    fontSize: 11,
    color: '#2E7D32',
    fontWeight: '600',
  },

  /* LOGOUT */
  logoutBtn: {
    marginTop: 24,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E53935',
    borderRadius: 12,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
     flexDirection: 'row',
  },

  logoutText: {
    color: '#E53935',
    fontSize: 15,
    fontWeight: '700',
  },

  version: {
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 24,
    fontSize: 12,
    color: '#9E9E9E',
  },
});

export default VendorBusinessScreen;
