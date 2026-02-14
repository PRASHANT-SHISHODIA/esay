import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';

const STORE_TYPES = ['Fuel', 'Repair', 'Food', 'Other'];

const AddListingScreen = ({ navigation }) => {
  const [businessName, setBusinessName] = useState('');
  const [storeType, setStoreType] = useState('Fuel');
  const [landmark, setLandmark] = useState('');
  const [restroom, setRestroom] = useState(false);
  const [serviceName, setServiceName] = useState('');
  const [price, setPrice] = useState('');

  const handlePublish = () => {
    // 🔹 API integration yahan hogi
    console.log({
      businessName,
      storeType,
      landmark,
      restroom,
      serviceName,
      price,
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* BUSINESS NAME */}
      <Text style={styles.label}>BUSINESS NAME</Text>
      <TextInput
        placeholder="e.g. Joe's Garage"
        placeholderTextColor="#BDBDBD"
        style={styles.input}
        value={businessName}
        onChangeText={setBusinessName}
      />

      {/* STORE TYPE */}
      <Text style={styles.label}>STORE TYPE</Text>
      <View style={styles.typeRow}>
        {STORE_TYPES.map(type => (
          <TouchableOpacity
            key={type}
            style={[styles.typeBtn, storeType === type && styles.typeBtnActive]}
            onPress={() => setStoreType(type)}
          >
            <Text
              style={[
                styles.typeText,
                storeType === type && styles.typeTextActive,
              ]}
            >
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* LOCATION */}
      <Text style={styles.label}>LOCATION</Text>
      <View style={styles.mapBox}>
        <TouchableOpacity style={styles.mapBtn}>
          <Text style={styles.mapBtnText}>📍 Drop Pin on Map</Text>
        </TouchableOpacity>
      </View>

      {/* LANDMARK */}
      <Text style={styles.label}>LANDMARK</Text>
      <TextInput
        placeholder="e.g. Near City Hospital"
        style={styles.input}
        value={landmark}
        onChangeText={setLandmark}
      />

      {/* AMENITIES */}
      <Text style={styles.section}>Amenities</Text>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Restroom Available</Text>
        <Switch
          value={restroom}
          onValueChange={setRestroom}
          trackColor={{ false: '#E0E0E0', true: '#FF6A00' }}
        />
      </View>

      {/* SERVICES */}
      <Text style={styles.section}>$ Services & Pricing</Text>
      <View style={styles.serviceRow}>
        <TextInput
          placeholder="Service Name"
          style={[styles.input, { flex: 1, marginRight: 8 }]}
          value={serviceName}
          onChangeText={setServiceName}
        />
        <TextInput
          placeholder="Price"
          keyboardType="numeric"
          style={[styles.input, { width: 80 }]}
          value={price}
          onChangeText={setPrice}
        />
        <TouchableOpacity style={styles.addService}>
          <Text style={styles.addServiceText}>＋</Text>
        </TouchableOpacity>
      </View>

      {/* OFFERS */}
      <View style={styles.offersRow}>
        <Text style={styles.section}>Offers & Discounts</Text>
        <View style={styles.inactiveBadge}>
          <Text style={styles.inactiveText}>Inactive</Text>
        </View>
      </View>

      {/* PUBLISH */}
      <TouchableOpacity style={styles.publishBtn} onPress={handlePublish}>
        <Text style={styles.publishText}>Publish Listing</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  back: {
    fontSize: 20,
    marginRight: 12,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#212121',
  },

  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#757575',
    marginTop: 14,
    marginBottom: 6,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 14,
    backgroundColor: '#FFFFFF',
  },

  typeRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  typeBtn: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 8,
  },

  typeBtnActive: {
    borderColor: '#FF6A00',
    backgroundColor: '#FFF3E0',
  },

  typeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#424242',
  },

  typeTextActive: {
    color: '#FF6A00',
  },

  mapBox: {
    height: 120,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mapBtn: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FF6A00',
  },

  mapBtnText: {
    color: '#FF6A00',
    fontWeight: '600',
    fontSize: 13,
  },

  section: {
    fontSize: 14,
    fontWeight: '700',
    color: '#212121',
    marginTop: 20,
    marginBottom: 10,
  },

  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },

  switchText: {
    fontSize: 14,
    color: '#424242',
  },

  serviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  addService: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FFF3E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },

  addServiceText: {
    fontSize: 20,
    color: '#FF6A00',
    fontWeight: '700',
  },

  offersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inactiveBadge: {
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },

  inactiveText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#757575',
  },

  publishBtn: {
    backgroundColor: '#FF6A00',
    height: 54,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },

  publishText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default AddListingScreen;
