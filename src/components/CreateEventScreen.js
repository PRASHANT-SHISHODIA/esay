import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const CreateEventScreen = () => {
  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('Oct 24, 2023');
  const [time, setTime] = useState('08:00 AM');
//   const [meetingPoint, setMeetingPoint] = useState('');
  const [rideType, setRideType] = useState('Cruise');
  const [difficulty, setDifficulty] = useState('Easy');

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={22} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Create Event</Text>

          <TouchableOpacity style={styles.publishBtn}>
            <Text style={styles.publishText}>Publish</Text>
          </TouchableOpacity>
        </View>

        {/* Event Title */}
        <Text style={styles.label}>EVENT TITLE</Text>
        <TextInput
          placeholder="e.g. Sunday Morning Cruise"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />

        {/* Description */}
        <Text style={styles.label}>DESCRIPTION</Text>
        <TextInput
          placeholder="Describe the vibe, route, and requirements..."
          style={[styles.input, styles.textArea]}
          multiline
          value={desc}
          onChangeText={setDesc}
        />

        {/* Date & Time */}
        <View style={styles.row}>
          <View style={styles.half}>
            <Text style={styles.label}>DATE</Text>
            <TouchableOpacity style={styles.inputRow}>
              <Ionicons name="calendar-outline" size={16} color="#6B7280" />
              <Text style={styles.inputText}>{date}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.half}>
            <Text style={styles.label}>TIME</Text>
            <TouchableOpacity style={styles.inputRow}>
              <Ionicons name="time-outline" size={16} color="#6B7280" />
              <Text style={styles.inputText}>{time}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Meeting Point */}
        <Text style={styles.label}>MEETING POINT</Text>
        <TouchableOpacity style={styles.inputRow}>
          <Ionicons name="location-outline" size={16} color="#6B7280" />
          <Text style={styles.placeholder}>Search location...</Text>
        </TouchableOpacity>

        {/* Ride Type & Difficulty */}
        <View style={styles.row}>
          <View style={styles.half}>
            <Text style={styles.label}>RIDE TYPE</Text>
            <TouchableOpacity style={styles.selector}>
              <Text style={styles.selectorText}>{rideType}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.half}>
            <Text style={styles.label}>DIFFICULTY</Text>
            <TouchableOpacity style={styles.selector}>
              <Text style={styles.selectorText}>{difficulty}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Upload Route */}
        <TouchableOpacity style={styles.uploadBox}>
          <Ionicons name="cloud-upload-outline" size={22} color="#9CA3AF" />
          <Text style={styles.uploadText}>
            Upload Route Image (GPX/JPG)
          </Text>
        </TouchableOpacity>

        {/* Itinerary */}
        <View style={styles.itineraryHeader}>
          <Text style={styles.label}>ITINERARY</Text>
          <TouchableOpacity>
            <Text style={styles.addStop}>+ Add Stop</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.emptyText}>No stops added yet.</Text>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginTop: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
  },

  publishBtn: {
    backgroundColor: '#EF4444',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },

  publishText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },

  label: {
    fontSize: 11,
    color: '#6B7280',
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
  },

  textArea: {
    height: 90,
    textAlignVertical: 'top',
  },

  row: {
    flexDirection: 'row',
    gap: 12,
  },

  half: {
    flex: 1,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },

  inputText: {
    fontSize: 14,
    color: '#111827',
  },

  placeholder: {
    fontSize: 14,
    color: '#9CA3AF',
  },

  selector: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },

  selectorText: {
    fontSize: 14,
    fontWeight: '600',
  },

  uploadBox: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderStyle: 'dashed',
    borderRadius: 12,
    paddingVertical: 28,
    alignItems: 'center',
    gap: 6,
  },

  uploadText: {
    fontSize: 13,
    color: '#6B7280',
  },

  itineraryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

  addStop: {
    color: '#EF4444',
    fontWeight: '600',
  },

  emptyText: {
    textAlign: 'center',
    color: '#9CA3AF',
    marginTop: 12,
    fontSize: 12,
  },
});


export default CreateEventScreen;
