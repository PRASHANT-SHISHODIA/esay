import React, { useCallback, useLayoutEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ManualEntryModal from '../ManualEntryModal';
import Icon  from 'react-native-vector-icons/Ionicons';

const LogModal = ({ showFilter, setShowFilter }) => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const renderLogButton = useCallback(() => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={{
          backgroundColor: '#fff7ed',
          paddingHorizontal: 10,
          paddingVertical: 6,
          borderRadius: 12,
          marginRight: 8,
        }}
      >
        <Text style={{ color: '#fb923c', fontWeight: '600' }}> + Log</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setShowFilter(!showFilter)}
        style={{
          backgroundColor: '#fff7ed',
          padding: 8,
          borderRadius: 12,
        }}
      >
        <Icon name="filter-outline" size={18} color="#fb923c" />
      </TouchableOpacity>
    </View>
  ),[showFilter,setShowFilter]); 

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Travel History',
      headerRight: renderLogButton,
    });
  }, [navigation,renderLogButton]); 

   
  return (
    <View style={{ flex: 1 }}>
      <ManualEntryModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        onSave={() => {
          console.log('Save ride');
          setShowModal(false);
        }}
        />
    </View>
  );
};

export default LogModal;
