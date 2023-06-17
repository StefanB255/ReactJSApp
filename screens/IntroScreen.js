import { StyleSheet, View, Text, ImageBackground, Image, Button  } from 'react-native'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../app';
import Layout from '../app/_layout';
import Details from './details';
import Buttons from '../buttons/buttons';


const IntroScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Image
      source={require('../images/backgroundImage.jpg')}
      style={{height:'100%', width: '100%'}}
      />
      
      <View style={styles.introContainer}>

      <View style={styles.introDesc}>
        <Text style={styles.introText}>Hi, this is my CV App.</Text>
      </View>
    
        <Buttons
        onPress={() => navigation.navigate(Details)}
        title="Continue"
        />


    </View>

    </View>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
  firstOne:{
    position: 'absolute',
    alignSelf: 'center',
  },
  mainContainer:{
    position:'relative',
    height: '100%',
  },
  introContainer:{
    height: '100%',
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  introDesc:{
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 20,
    opacity: 0.8,
    borderRadius: 5,
  },
  introText:{
    fontWeight: '700',
    fontSize: 20,
  },
  introButton:{
    alignSelf: 'center',
    backgroundColor: 'lightblue',
    marginBottom: 30,
    padding: 15,
    width: 250,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    borderRadius: 5,
    color: '#fff'
  },
})