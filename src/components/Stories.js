import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const stories = [
  {
    id: 1,
    title: 'First Ride',
    image: 'https://picsum.photos/400/600?random=1',
    description: 'My first bike ride of the year!',
  },
  {
    id: 2,
    title: 'Mountain Adventure',
    image: 'https://picsum.photos/400/600?random=2',
    description: 'Conquered the mountain trails.',
  },
  {
    id: 3,
    title: 'City Cruise',
    image: 'https://picsum.photos/400/600?random=3',
    description: 'Night ride through the city lights.',
  },
  {
    id: 4,
    title: 'Group Ride',
    image: 'https://picsum.photos/400/600?random=4',
    description: 'Riding with friends.',
  },
];

export default function StoriesScreen() {
  const navigation = useNavigation();
  const [currentStory, setCurrentStory] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStory < stories.length - 1) {
        setCurrentStory(currentStory + 1);
      } else {
        navigation.goBack();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentStory, navigation]);

  const nextStory = () => {
    if (currentStory < stories.length - 1) {
      setCurrentStory(currentStory + 1);
    }
  };

  const prevStory = () => {
    if (currentStory > 0) {
      setCurrentStory(currentStory - 1);
    }
  };

  const handlePress = (event) => {
    const { locationX } = event.nativeEvent;
    const screenWidth = Dimensions.get('window').width;
    if (locationX > screenWidth / 2) {
      nextStory();
    } else {
      prevStory();
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rider Recap 2023</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Story View */}
      <TouchableOpacity style={styles.storyContainer} onPress={handlePress} activeOpacity={1}>
        <Image
          source={{ uri: stories[currentStory].image }}
          style={styles.storyImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.storyTitle}>{stories[currentStory].title}</Text>
          <Text style={styles.storyDescription}>{stories[currentStory].description}</Text>
        </View>
      </TouchableOpacity>

      {/* Progress Indicators */}
      <View style={styles.progressContainer}>
        {stories.map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressBar,
              index <= currentStory && styles.progressBarActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 50,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  storyContainer: {
    flex: 1,
    position: 'relative',
  },
  storyImage: {
    width: width,
    height: height * 0.8,
  },
  overlay: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
  },
  storyTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  storyDescription: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.9,
  },
  progressContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 4,
  },
  progressBar: {
    flex: 1,
    height: 3,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 2,
  },
  progressBarActive: {
    backgroundColor: '#fff',
  },
});