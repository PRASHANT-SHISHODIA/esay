import React, { useState } from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setRole, sendOtp } from '../app/authSlice';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const isValidMobile = mobile => {
  const regex = /^[6-9]\d{9}$/;
  return regex.test(mobile);
};

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { role, loading } = useSelector(state => state.auth);
  const [mobile, setMobile] = useState('');

  const handleLogin = async () => {
    if (!isValidMobile(mobile)) {
      Alert.alert('Error', 'Enter valid mobile number');
      return;
    }

    if (!role) {
      Alert.alert('Error', 'Please select role');
      return;
    }

    // 🔥 SEND OTP API CALL
    try {
      const res = await dispatch(sendOtp({ phone: mobile, role })).unwrap();

      // success
      navigation.navigate('OTP', { mobile, role });
    } catch (err) {
      Alert.alert(
        'Error',
        typeof err === 'string' ? err : err?.message || JSON.stringify(err),
      );
    }

    // ✅ API success → navigate to OTP screen
    navigation.navigate('OTP', {
      mobile: mobile,
      role: role,
    });
  };
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <View style={styles.logoIcon}>
            <Ionicons name="bicycle-outline" size={18} color="#fff" />
          </View>

          <Text style={styles.logoText}>
            Easy <Text style={styles.logoHighlight}>Rasta</Text>
          </Text>
        </View>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>
          Enter your details to sign in to your account
        </Text>
      </View>

      {/* ROLE SELECT */}
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[styles.roleCard, role === 'rider' && styles.roleCardActive]}
          onPress={() => dispatch(setRole('rider'))}
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
          onPress={() => dispatch(setRole('vendor'))}
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

      {/* MOBILE INPUT */}

      <TextInput
        placeholder="Mobile Number"
        placeholderTextColor="#BDBDBD"
        style={styles.input}
        keyboardType="phone-pad"
        maxLength={10}
        value={mobile}
        onChangeText={setMobile}
      />
      <TouchableOpacity
        style={styles.forgotWrapper}
        // onPress={() => navigation.navigate('ForgotPassword')}
      >
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* OTP BUTTON */}
      <TouchableOpacity
        style={styles.otpButton}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.otpText}>Get OTP →</Text>
        )}
      </TouchableOpacity>
      <View style={styles.footer}>
        <View style={styles.footerRow}>
          <Text style={styles.footerText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.footerLink}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const COLORS = {
  primary: '#E53935',
  primaryDark: '#D32F2F',
  secondary: '#FF7043',
  lightRed: '#FFF1F1',
  border: '#E0E0E0',
  textPrimary: '#212121',
  textSecondary: '#9E9E9E',
  white: '#FFFFFF',
  grayBg: '#F9FAFB',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },

  logoIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#FF4D1C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  logoHighlight: {
    color: '#FF4D1C',
  },

  logoText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
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
    marginTop: 12,
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
  },

  roleContainer: {
    flexDirection: 'row',
    marginBottom: 15,
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
    marginTop: 6,
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
    marginBottom: 20,
  },

  otpButton: {
    height: 54,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
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
  footerRow: {
    flexDirection: 'row',
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
  forgotWrapper: {
    alignItems: 'flex-end',
    // marginTop: 8
    marginBottom: 20,
  },

  forgotText: {
    color: '#ff3d00',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default LoginScreen;
