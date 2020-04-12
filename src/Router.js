import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/home';
import Party from './pages/games/party';
import Hot from './pages/games/hot';
import INever from './pages/games/i-never';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Party" component={Party}/>
        <Stack.Screen name="Hot" component={Hot}/>
        <Stack.Screen name="INever" component={INever}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}