import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { add } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';

export default function AddVehicle() {
  const navigation = useNavigation();
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [regNumber, setRegNumber] = useState('');

  const handleSubmit = () => {
    if (!make || !model || !year || !regNumber) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    // Here you can save the vehicle data
    console.log({ make, model, year, regNumber });
    Alert.alert('Success', 'Vehicle added successfully');
    navigation.goBack();
  };
 console.log('shubham')
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.makeInput}>
        <Text style={styles.yearInput}>Make</Text>
        <TextInput
          style={styles.makeIn}
          placeholder="Enter vehicle make"
          value={make}
          onChangeText={setMake}
        />
      </View>

      <View style={styles.makeInput}>
        <Text style={styles.yearInput}>Model</Text>
        <TextInput
          style={styles.model}
          placeholder="Enter vehicle model"
          value={model}
          onChangeText={setModel}
        />
      </View>

      <View style={styles.makeInput}>
        <Text style={styles.yearInput}>Year</Text>
        <TextInput
          style={styles.yearnumber}
          placeholder="Enter year"
          value={year}
          onChangeText={setYear}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.reg}>
        <Text style={styles.yearInput}>Registration Number</Text>
        <TextInput
          style={styles.regnumber}
          placeholder="Enter registration number"
          value={regNumber}
          onChangeText={setRegNumber}
        />
      </View>

      <TouchableOpacity style={styles.vehicle} onPress={handleSubmit}>
        <Text style={styles.addButton}>Add Vehicle</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
  },
  makeInput: {
    marginBottom: 16,
  },
  yearInput: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  addButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  reg: {
    marginBottom: 24,
  },
  regnumber: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  vehicle: {
    backgroundColor: '#EF4444',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  yearnumber: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  model: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  makeIn: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});
