import React, { useRef, useState } from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { loginUser,validateOtp} from '../../app/authSlice';
import { setToken } from '../../utils/auth';

const OtpScreen = ({ route, navigation }) => {
  const { mobile, role } = route.params;
  const dispatch = useDispatch();

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join('');

    if (enteredOtp.length !== 6) {
      Alert.alert('Error', 'Enter valid 6 digit OTP');
      return;
    }

    try {
     
      await dispatch(
        validateOtp({
          phone: mobile,
          otp: enteredOtp,
        })
      ).unwrap();

     
      const loginRes = await dispatch(
        loginUser({
          phone: mobile,
          role: role,
        })
      ).unwrap();


      if (loginRes?.token) {
        await setToken(loginRes.token);
      }


      if (role === 'vendor') {
        navigation.reset({
          index: 0,
          routes: [{ name: 'VendorHome' }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'RiderHome' }],
        });
      }

    } catch (err) {
      Alert.alert(
        'Invalid OTP',
        err?.message || 'OTP verification failed'
      );
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <View style={styles.logoIcon}>
            <Ionicons name="bicycle-outline" size={18} color="#fff" />
          </View>

          <Text style={styles.logoText}>
            Easy <Text style={styles.logoHighlight}>Rasta</Text>
          </Text>
        </View>
      </View>

      <Text style={styles.title}>Verification</Text>
      <Text style={styles.subtitle}>Enter the code sent to {mobile}</Text>

      {/* OTP INPUT */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => (inputs.current[index] = ref)}
            style={styles.otpBox}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={text => handleChange(text, index)}
          />
        ))}
      </View>

      <Text style={styles.resend}>
        Didn’t receive code? <Text style={styles.resendLink}>Resend SMS</Text>
      </Text>

      {/* VERIFY BUTTON */}
      <TouchableOpacity style={styles.verifyBtn} onPress={handleVerify}>
        <Text style={styles.verifyText}>Verify & Login 🔒</Text>
      </TouchableOpacity>

      <Text style={styles.changeNumber} onPress={() => navigation.goBack()}>
        Change Number
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
header: {
  paddingTop: 60,
  paddingHorizontal: 20,
  marginTop: 50,
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

logoText: {
  fontSize: 18,
  fontWeight: '700',
  color: '#111',
},

logoHighlight: {
  color: '#FF4D1C',
},
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 40,
  },

  subtitle: {
    fontSize: 14,
    color: '#9E9E9E',
    marginVertical: 10,
  },

  otpContainer: {
    flexDirection: 'row',
    marginVertical: 30,
  },

  otpBox: {
    width: 50,
    height: 55,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 6,
  },

  resend: {
    fontSize: 13,
    color: '#9E9E9E',
  },

  resendLink: {
    color: '#E53935',
    fontWeight: '600',
  },

  verifyBtn: {
    marginTop: 40,
    width: '100%',
    height: 54,
    backgroundColor: '#E53935',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  verifyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  changeNumber: {
    marginTop: 20,
    fontSize: 13,
    color: '#9E9E9E',
  },
});

export default OtpScreen;
