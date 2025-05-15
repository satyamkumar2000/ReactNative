import React from 'react';
import { View, Image, Text, Button } from 'react-native';
import styles from './style';

export default function PictureViewingScreen({ route, navigation }) {
  const { item } = route.params || {};

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.caption}>No image selected</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={item.thumbnail} style={styles.fullImage} />
      <Text style={styles.fullCaption}>{item.caption}</Text>
      <Button title="Back to Gallery" onPress={() => navigation.goBack()} />
    </View>
  );
}
