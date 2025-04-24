import React, { useState } from 'react';
import { Text, View, TextInput, FlatList, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';

export default function App() {
  const [item, setItem] = useState('');
  const [wishlist, setWishlist] = useState([]);

  const handleAddItem = () => {
    if (item.trim() === '') {
      Alert.alert('Error', 'Please enter an item.');
      return;
    }
    setWishlist(prevList => [...prevList, { key: Math.random().toString(), name: item }]);
    setItem('');
  };

  const handleDeleteItem = (key) => {
    setWishlist(prevList => prevList.filter(item => item.key !== key));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Wishlist</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={item}
        onChangeText={setItem}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
      <Text style={styles.addButtonText}>Add to Wishlist</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.list}
        data={wishlist}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <Text style={styles.listItem}>• {item.name}</Text>
            <TouchableOpacity onPress={() => handleDeleteItem(item.key)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}