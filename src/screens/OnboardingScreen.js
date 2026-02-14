// screens/OnboardingScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [
  {
    title: 'Join Epic Events',
    desc: 'Discover local rides, meetups, and charity runs. Connect with the community.',
    icon: 'calendar-outline',
     color:"#7C3AED"
  },
  {
    title: 'Track Your Rides',
    desc: 'Live tracking, speed stats, and route sharing with friends and family.',
    icon:'navigate-outline',
    color:"#E53935" 
  },
  {
    title: 'Ride with Safety',
    desc: 'Integrated SOS features and crash detection to keep you safe on the road..',
    icon: 'shield-checkmark-outline',
    color:"#F97316"
  },
  {
    title: 'Find Essentials',
    desc: 'Locate fuel, food, and repair shops instantly with our Merged Finder.',
    icon:'location-outline',
    color:'#16A34A'
  },
];

export default function OnboardingScreen({ navigation }) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    } else {
      navigation.replace('Login');
    }
  };

  return (
    <View style={styles.container}>
      {/* Skip */}
      <TouchableOpacity
        style={styles.skip}
        onPress={() => navigation.replace('Login')}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* ICON */}
      <View style={styles.iconWrapper}>
        <Ionicons name={data[index].icon} size={36} color={data[index].color} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{data[index].title}</Text>
        <Text style={styles.desc}>{data[index].desc}</Text>
      </View>

      {/* Dots */}
      <View style={styles.dots}>
        {data.map((_, i) => (
          <View key={i} style={[styles.dot, index === i && styles.activeDot]} />
        ))}
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
        <Text style={styles.nextText}>Next →</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 40,
  
  },
  skip: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  skipText: {
    color: '#999',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ddd',
    margin: 4,
  },
  activeDot: {
    backgroundColor: '#ff3d00',
  },
  nextBtn: {
    backgroundColor: '#ff3d00',
    margin: 16,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  nextText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  iconWrapper: {
  width: 80,
  height: 80,
  borderRadius: 40,
  backgroundColor: '#F3ECFF', 
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  marginTop: 460,
},
});
