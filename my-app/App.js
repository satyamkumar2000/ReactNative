import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import GalleryScreen from './GalleryScreen';
import PictureViewingScreen from './PictureViewingScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Gallery() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GalleryHome"
        component={GalleryScreen}
        options={{ title: 'Gallery' }}
      />
      <Stack.Screen
        name="Viewer"
        component={PictureViewingScreen}
        options={{ title: 'View Picture' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarIcon: () => null, 
            tabBarLabelStyle: {
              fontSize: 16,        
              textAlign: 'center',  
              paddingBottom: 8,   
            },
            tabBarStyle: {
              height: 60,    
            },
          }}
        >
          <Tab.Screen
            name="Gallery"
            component={Gallery}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: true }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
