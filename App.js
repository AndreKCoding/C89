import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './navigation/TabNavigator'
import BottomTabNavigator from './navigation/TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import Login from './screens/Login';
import Profile from './screens/Profile';
import Feed from './screens/Feed';
import Register from './screens/Register';
import StoryCard from './screens/StoryCard';
import CreatePost from './screens/CreatePost';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Navigation' component={BottomTabNavigator}/>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='Feed' component={Feed}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='CreatePost' component={CreatePost}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
