import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import { COLORS, icons, images, SIZES } from '../constants'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreen from '../screens/IntroScreen';
import Details from '../screens/details';
import Buttons from '../buttons/buttons';
import ShowAll from '../screens/showAll';
import ReactPage from '../screens/ReactPage';

const HomeScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true} options={{ headerShown: false}}>
      <Stack.Navigator options={{ headerShown: false}}>
      
      <Stack.Screen name="IntroScreen" component={IntroScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="Details" component={Details} options={{ headerShown: false}}/>
      <Stack.Screen name="Buttons" component={Buttons} options={{ headerShown: false}}/>
      <Stack.Screen name="ShowAll" component={ShowAll} options={{ headerShown: false}}/>
      <Stack.Screen name="ReactPage" component={ReactPage} options={{ headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeScreen;