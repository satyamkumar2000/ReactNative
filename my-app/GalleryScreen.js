import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const DATA = [
  {
    id: '1',
    thumbnail: require('./assets/bengal_tiger.jpg'),
    caption: 'Bengal Tiger',
  },
  {
    id: '2',
    thumbnail: require('./assets/mount_everest.jpg'),
    caption: 'Mount Everest',
  },
  {
    id: '3',
    thumbnail: require('./assets/quantum_computer.jpg'),
    caption: 'Quantum Computer',
  },
];

export default function GalleryScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.galleryCard}
      onPress={() => navigation.navigate('Viewer', { item })}
    >
      <Image source={item.thumbnail} style={styles.thumbnail} />
      <Text style={styles.caption}>{item.caption}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList data={DATA} keyExtractor={(item) => item.id} renderItem={renderItem} />
    </View>
  );
}
