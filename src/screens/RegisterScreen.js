import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUserType } from '../app/authSlice';
import { registerUser } from '../app/authSlice';

const RegisterScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { role, loading } = useSelector(state => state.auth);

  // mobile OTP screen se aaya ho to
  const mobileFromOtp = route?.params?.mobile || '';

  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState(mobileFromOtp);
  const [referral, setReferral] = useState('');

  const handleRegister = async () => {
    if (!fullName || mobile.length !== 10) {
      Alert.alert('Error', 'Please enter valid details');
      return;
    }

    if (!role) {
      Alert.alert('Error', 'Role missing');
      return;
    }

    try {
      
      await dispatch(
        registerUser({
          name: fullName,
          phone: mobile,
          role: role,
          referralCode: referral || undefined,
        })
      ).unwrap();

      
      Alert.alert('Success', 'Registration successful');

      navigation.replace('OTP', {
        mobile: mobile,
        role: role,
      });

    } catch (err) {
      Alert.alert(
        'Registration Failed',
        err?.message || err || 'Something went wrong'
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Join the community of riders and explore together
        </Text>
      </View>

      {/* ROLE SELECT */}
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[styles.roleCard, role === 'rider' && styles.roleCardActive]}
          onPress={() => dispatch(setUserType('rider'))}
        >
          <Text
            style={[styles.roleText, role === 'rider' && styles.roleTextActive]}
          >
            Rider
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.roleCard,
            role === 'vendor' && styles.roleCardActive,
            { marginRight: 0 },
          ]}
          onPress={() => dispatch(setUserType('vendor'))}
        >
          <Text
            style={[
              styles.roleText,
              role === 'vendor' && styles.roleTextActive,
            ]}
          >
            Vendor
          </Text>
        </TouchableOpacity>
      </View>

      {/* INPUTS */}
      <TextInput
        placeholder="Full Name"
        placeholderTextColor="#9E9E9E"
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        placeholder="Mobile Number"
        placeholderTextColor="#9E9E9E"
        keyboardType="phone-pad"
        maxLength={10}
        style={styles.input}
        value={mobile}
        onChangeText={setMobile}
      />

      <TextInput
        placeholder="Referral Code (Optional)"
        placeholderTextColor="#9E9E9E"
        style={styles.input}
        value={referral}
        onChangeText={setReferral}
      />

      {/* BUTTON */}
      <TouchableOpacity style={styles.otpButton} onPress={handleRegister}>
        <Text style={styles.otpText}>Get OTP →</Text>
      </TouchableOpacity>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text
            style={styles.footerLink}
            onPress={() => navigation.navigate('Login')}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};
const COLORS = {
  primary: '#E53935',
  lightRed: '#FFF1F1',
  border: '#E0E0E0',
  textPrimary: '#212121',
  textSecondary: '#9E9E9E',
  white: '#FFFFFF',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },

  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 6,
    textAlign: 'center',
  },

  roleContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  roleCard: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: COLORS.white,
  },

  roleCardActive: {
    backgroundColor: COLORS.lightRed,
    borderColor: COLORS.primary,
  },

  roleText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },

  roleTextActive: {
    color: COLORS.primary,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 15,
    marginBottom: 15, 
  },

  otpButton: {
    height: 54,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    marginTop: 10,
  },

  otpText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },

  footer: {
    marginTop: 25,
    alignItems: 'center',
  },

  footerText: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },

  footerLink: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});

export default RegisterScreen;
