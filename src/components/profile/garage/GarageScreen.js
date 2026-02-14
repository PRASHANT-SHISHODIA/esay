import React, { useEffect,useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styles from "./styles"
import Stat,{DocumentItem ,FuelStat,SectionHeader,ServiceItem} from './Stats'

const vehicles = [
  {
    id: 1,
    name: 'Night Fury',
    meta: '2021 • MH-12-AB-1234',
    image: 'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_1280.jpg',
    odometer: '12,500 km',
    serviceDue: 'In 500 km',
    health: 'Good',
    fuelAvg: '25.0',
    fuelSpent: '$20',
    fuelLast: '25 km/l',
  },
  {
    id: 2,
    name: 'Thunder Bolt',
    meta: '2022 • MH-12-CD-5678',
    image: 'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_1280.jpg',
    odometer: '8,000 km',
    serviceDue: 'In 200 km',
    health: 'Excellent',
    fuelAvg: '28.0',
    fuelSpent: '$15',
    fuelLast: '28 km/l',
  },
];

export default function GarageScreen() {
  const navigation = useNavigation();
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.right}
          onPress={() => navigation.navigate('AddVehicle')}
        >
          <Ionicons name="add" size={16} color="#EF4444" />
          <Text style={styles.addvehicle}>Add Vehicle</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* VEHICLE CARDS */}
      <View style={styles.vehicleCardsContainer}>
        {vehicles.map(vehicle => (
          <TouchableOpacity
            key={vehicle.id}
            activeOpacity={0.8}
            onPress={() => setSelectedVehicle(vehicle)}
            style={[
              styles.vehicleCard,
              selectedVehicle.id === vehicle.id && styles.selectedVehicleCard,
            ]}
          >
            <Image
              source={{ uri: vehicle.image }}
              style={styles.bikeImage}
            />

        <View style={styles.overlay}>
          <Text style={styles.bikeName}>{vehicle.name}</Text>
          <Text style={styles.bikeMeta}>{vehicle.meta}</Text>
        </View>

            <View style={styles.vehicleStats}>
              <Stat label="ODOMETER" value={vehicle.odometer} />
              <Stat label="SERVICE DUE" value={vehicle.serviceDue} danger />
              <Stat label="HEALTH" value={vehicle.health} success />
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* FUEL INSIGHTS */}
      <View style={styles.fuelCard}>
        <View style={styles.fuelHeader}>
          <Ionicons name="trending-up" size={16} color="#22C55E" />
          <Text style={styles.fuelTitle}>Fuel Insights</Text>
        </View>

        <View style={styles.fuelRow}>
          <FuelStat value={selectedVehicle.fuelAvg} label="AVG KM/L" />
          <FuelStat value={selectedVehicle.fuelSpent} label="TOTAL SPENT" />
          <FuelStat value={selectedVehicle.fuelLast} label="LAST TRIP" highlight />
        </View>
      </View>

      {/* DOCUMENTS */}
      <SectionHeader title="Documents" />

      <DocumentItem
        icon="shield-checkmark-outline"
        title="Insurance"
        status="Expired"
        date="2024-12-15"
        action="Update"
        danger
        onPress={() => navigation.navigate('UpdateDocument', { document: 'Insurance', currentDate: '2024-12-15' })}
      />

      <DocumentItem
        icon="document-text-outline"
        title="Pollution (PUC)"
        status="Expired"
        date="2023-11-20"
        action="Update"
        danger
        onPress={() => navigation.navigate('UpdateDocument', { document: 'Pollution (PUC)', currentDate: '2023-11-20' })}
      />

      <DocumentItem
        icon="card-outline"
        title="Registration (RC)"
        status="Active"
        date="MH-12-AB-1234"
        action="View"
        success
      />

      {/* SERVICE & LOGS */}
      <SectionHeader title="Service & Logs" icon="construct-outline" />

      <ServiceItem
        title="General Service"
        date="2023-06-10"
        price="$120"
        note="10,000 km"
      />

      <ServiceItem
        title="Fuel Refill"
        date="2023-06-15 • Shell Station"
        price="$20"
        note="25 km/l"
        highlight
      />

      <ServiceItem
        title="Oil Change"
        date="2023-05-02"
        price="$45"
      />

    </ScrollView>
  );
}

