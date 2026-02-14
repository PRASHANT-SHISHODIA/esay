import React, { useLayoutEffect,useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import ShareModal from './ShareModal';

const RideDetailButton = () => {
  const navigation = useNavigation();
  const [shareVisible, setShareVisible] = useState(false);


  const renderDetailButton = () => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        
        {/* Share Button */}
        <TouchableOpacity
          onPress={() => setShareVisible(true)}
          style={{ marginRight: 16 }}
        >
          <Icon name="share-social-outline" size={22} color="#fff" />
        </TouchableOpacity>

        {/* Details / More Button */}
        <TouchableOpacity
          onPress={() => console.log('Details clicked')}
        >
          <Icon name="ellipsis-vertical" size={22} color="#fff" />
        </TouchableOpacity>

    </View>
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Ride Details',
      headerStyle: {
        backgroundColor: '#f97316', 
      },
      headerTintColor: '#fff',
      headerRight: renderDetailButton,
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <ShareModal
        visible={shareVisible}
        onClose={() => setShareVisible(false)}
        onSave={() => {
          console.log('Save ride');
          setShareVisible(false);
        }}
        />
    </View>
  );

};

export default RideDetailButton;
