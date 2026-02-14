import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function UpdateDocument() {
  const navigation = useNavigation();
  const route = useRoute();
  const { document, currentDate } = route.params || {};
  const [showPicker, setShowPicker] = useState(false);
  const [expiryDate, setExpiryDate] = useState(currentDate ? new Date(currentDate) : new Date());

  const onChangeDate = (event, selectedDate) => {
    setShowPicker(false); // picker band

    if (selectedDate) {
      setExpiryDate(selectedDate); // date save
    }
  };
  const formattedDate = expiryDate
    ? expiryDate.toISOString().split('T')[0]
    : '';

  const handleUpdate = () => {
    if (!formattedDate) {
      Alert.alert('Error', 'Please select a new expiry date');
      return;
    }
    // Here you can update the document expiry date
    console.log(`Updated ${document} to ${formattedDate}`);
    Alert.alert('Success', `${document} updated successfully`);
    navigation.goBack();
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F3F4F6', padding: 16 }}>
      <View style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
          New Expiry Date
        </Text>
        <TouchableOpacity onPress={() => setShowPicker(true)}>
          <TextInput
            editable={false}
            pointerEvents="none"
            placeholder="Select expiry date"
            value={formattedDate}
            style={{
              borderWidth: 1,
              borderColor: '#D1D5DB',
              borderRadius: 8,
              padding: 12,
              fontSize: 16,
              backgroundColor: '#fff',
            }}
          />
        </TouchableOpacity>

        {showPicker && (
          <DateTimePicker
            value={expiryDate}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onChangeDate}
          />
        )}
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#EF4444',
          padding: 16,
          borderRadius: 8,
          alignItems: 'center',
        }}
        onPress={handleUpdate}
      >
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
          Update
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
