import React, { useEffect } from 'react';
import { Text,View, StyleSheet } from 'react-native';
import LogoSvg from '../components/LogoSvg';

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{ justifyContent:'center',alignItems: 'center',marginTop: '80%'}}>
  <LogoSvg />

  <Text style={styles.title}>
    Easy<Text style={{ color: '#FF4D1C' }}>Rasta</Text>
  </Text>

  <Text style={styles.tagline}>
    RIDE. EXPLORE. CONNECT.
  </Text>
</View>
  );
}

const styles = StyleSheet.create({
  title: {
  fontSize: 28,
  fontWeight: '700',
  color: '#111',
  marginTop: 12
},
tagline: {
  fontSize: 12,
  color: '#888',
  letterSpacing: 1,
  marginTop: 4
}

});
