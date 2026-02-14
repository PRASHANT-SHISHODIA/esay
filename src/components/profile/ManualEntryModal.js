import React, { useState } from 'react';
import {
  Alert,
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ManualEntryModal = ({ visible, onClose, onSave }) => {
  const [form, setForm] = useState({
    title: '',
    distance: '',
    duration: '',
    date: null,
  });

  const [errors, setErrors] = useState({});

  const [showDatePicker, setShowDatePicker] = useState(false);

  const updateField = (key, value) => {
    setForm(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  // 🔍 Validation
  const validate = () => {
    const newErrors = {};

    if (!form.title.trim()) newErrors.title = 'Title is required';

    if (!form.distance) {
      newErrors.distance = 'Distance is required';
    } else if (isNaN(form.distance) || Number(form.distance) <= 0) {
      newErrors.distance = 'Enter valid distance';
    }

    if (!form.durationHours) {
      newErrors.durationHours = 'Hours required';
    }

    // if (!form.durationMinutes) {
    //   newErrors.durationMinutes = 'Minutes required';
    // } else if (Number(form.durationMinutes) > 59) {
    //   newErrors.durationMinutes = 'Minutes must be < 60';
    // }

    if (!form.date) newErrors.date = 'Date is required';

    return Object.keys(newErrors).length === 0;
  };

  const formatDate = date => {
    if (!date) return '';
    return date.toLocaleDateString('en-GB');
  };
  // 💾 Save
  const handleSave = () => {
    if (!validate()) return;

    onSave({
      ...form,
      distance: Number(form.distance),
    });

    // reset
    setForm({
      title: '',
      distance: '',
      duration: '',
      date: '',
    });
    setErrors({});
  };
  // const handleClose = () => {
  //   if (form.title || form.distance || form.durationHours || form.date) {
  //     Alert.alert('Discard changes?', 'Your entered data will be lost.', [
  //       { text: 'Cancel', style: 'cancel' },
  //       { text: 'Discard', onPress: onClose },
  //     ]);
  //   } else {
  //     onClose();
  //   }
  // };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.header}>
          <Text style={{ fontSize: 20, fontWeight: 500, marginBottom: 15 }}>
            Manual Entry
          </Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={{ fontSize: 18 }}>✕</Text>
          </TouchableOpacity>
          </View>

          {/* Title */}
          <View style={styles.field}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              placeholder="Morning Ride"
              placeholderTextColor="#777676ff"
              value={form.title}
              onChangeText={v => updateField('title', v)}
              style={styles.input}
            />
            {errors.title && <Text style={styles.error}>{errors.title}</Text>}
          </View>

          {/* Distance */}
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <View style={{ flex: 0.5 }}>
              <View style={styles.field}>
                <Text style={styles.label}>Distance (km)</Text>
                <TextInput
                  placeholder="0.0"
                  placeholderTextColor="#777676ff"
                  value={form.distance}
                  keyboardType="decimal-pad"
                  onChangeText={v => updateField('distance', v)}
                  style={styles.input}
                />
                {errors.distance && (
                  <Text style={styles.error}>{errors.distance}</Text>
                )}
              </View>
            </View>

            {/* Duration */}
            <View style={{ flex: 0.5 }}>
              <View style={styles.field}>
                <Text style={styles.label}>Duration</Text>
                {/* <View style={{ flexDirection: 'row', gap: 8 }}> */}
                {/* Hours */}
                <TextInput
                  placeholder="Hours"
                  placeholderTextColor="#777676ff"
                  value={form.durationHours}
                  onChangeText={v =>
                    updateField('durationHours', v.replace(/[^0-9]/g, ''))
                  }
                  style={styles.input}
                />

                {/* Minutes */}
                {/* <TextInput
                placeholder="Minutes"
                keyboardType="number-pad"
                value={form.durationMinutes}
                onChangeText={v =>
                  updateField('durationMinutes', v.replace(/[^0-9]/g, ''))
                }
                style={[styles.input, { flex: 1 }]}
              /> */}
                {/* </View> */}

                {errors.durationHours && (
                  <Text style={styles.error}>
                    Both hours and minutes are required
                  </Text>
                )}
              </View>
            </View>
          </View>

          {/* Date */}
          <View style={styles.field}>
            <Text style={styles.label}>Date</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <TextInput
                placeholder="Select date"
                placeholderTextColor="#777676ff"
                value={form.date ? formatDate(form.date) : ''}
                editable={false} // ⛔ no keyboard
                pointerEvents="none"
                style={styles.input}
              />
            </TouchableOpacity>

            {errors.date && <Text style={styles.error}>{errors.date}</Text>}
          </View>

          {/* Date Picker */}
          {showDatePicker && (
            <DateTimePicker
              value={form.date || new Date()}
              mode="date"
              display="default"
              maximumDate={new Date()} 
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) {
                  updateField('date', selectedDate);
                }
              }}
            />
          )}

          {/* Save Button */}
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save Ride</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = {
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 16,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#111827',
    backgroundColor: '#f5f2f2d3',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    backgroundColor: '#e96a01ff',
    padding: 14,
    borderRadius: 12,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  field: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
    color: '#6b7280',
  },
};

export default ManualEntryModal;
