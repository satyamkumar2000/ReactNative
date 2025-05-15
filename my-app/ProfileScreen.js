import React, { useEffect, useState } from 'react';
import { View, Alert, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Button, RadioButton } from 'react-native-paper';
import styles from './style';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ageRange, setAgeRange] = useState('18-24');

  const [savedProfile, setSavedProfile] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await AsyncStorage.getItem('profile');
        if (data) {
          const profile = JSON.parse(data);
          setName(profile.name);
          setEmail(profile.email);
          setAgeRange(profile.ageRange || '18-24');
          setSavedProfile(profile);
        }
      } catch (err) {
        console.log('Error loading profile', err);
      }
    };
    loadProfile();
  }, []);

  const saveProfile = async () => {
    if (!name || !email) {
      Alert.alert('Validation', 'Name and Email are required.');
      return;
    }

    const profile = { name, email, ageRange };
    await AsyncStorage.setItem('profile', JSON.stringify(profile));
    setSavedProfile(profile);
    Alert.alert('Saved', 'Profile saved successfully.');
  };

  return (
    <View style={styles.container}>
      {savedProfile && (
        <View style={styles.readOnlyBox}>
          <Text style={styles.readOnlyText}>{savedProfile.name}</Text>
          <Text style={styles.readOnlyText}>{savedProfile.email}</Text>
          <Text style={styles.readOnlyText}>{savedProfile.ageRange}</Text>
        </View>
      )}
      <View style={styles.editBox}>
        <TextInput
          label="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
          underlineColor="#000"
          theme={{ colors: { primary: '#000', text: '#000' } }}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          underlineColor="#000"
          theme={{ colors: { primary: '#000', text: '#000' } }}
        />

        <Text style={styles.toggleText}>Select Age Range:</Text>
        <RadioButton.Group onValueChange={setAgeRange} value={ageRange}>
          <View style={styles.radioRow}>
            <RadioButton value="18-24" color="#000" />
            <Text style={styles.toggleText}>18–24</Text>
          </View>
          <View style={styles.radioRow}>
            <RadioButton value="25-34" color="#000" />
            <Text style={styles.toggleText}>25–34</Text>
          </View>
          <View style={styles.radioRow}>
            <RadioButton value="35+" color="#000" />
            <Text style={styles.toggleText}>35+</Text>
          </View>
        </RadioButton.Group>

        <Button mode="contained" onPress={saveProfile} style={{ backgroundColor: '#000', marginTop: 20 }}>
          Save Profile
        </Button>
      </View>
    </View>
  );
}
