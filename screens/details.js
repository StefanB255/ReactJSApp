import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Box from '../views/boxes'
import Header from '../views/headerView'
import ShowAll from './showAll'
import VerticalView from '../views/VerticalScrollView'
import ReactPage from './ReactPage'

const Details = ({navigation}) => {
  return (
    
      <View>
      <Header
      title="My skills"
      text="Show All"
      onPress={()=> navigation.navigate(ShowAll)}
      />
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScrollStyle}
        >
        
            <Box
            onPress={()=> navigation.navigate(ReactPage)}
            source={require('../images/reactIcon.png')}
            name="ReactJS"
            text="React is also an architecture. 
            Frameworks that implement it let you fetch data in asynchronous components that run on the server 
            or even during the build."
            />
            <Box
            source={require('../images/javaScript.png')}
            name="JavaScript"
            text="JavaScript is the programming language of the Web. 
            JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."
            />

            

        </ScrollView>

        <ScrollView
        style={styles.verticalScrollStyle}
        >
            <VerticalView
            source={require('../images/impossible-bureau.jpg')}
            title="Impossible Bureau"
            text="An independent digital agency, delivering unique screen-based experiences."
            />

            <VerticalView
            source={require('../images/deskpass.jpg')}
            title="Deskpass"
            text="Deskpass provides teams with affordable, 
            flexible access to thousands of coworking spaces and conference rooms for individuals and teams across the globe."
            />

            <VerticalView
            source={require('../images/imperial-barber.jpg')}
            title="Imperial Barber"
            text="Jedinstveni berberski Imperial sistem nastao
             je kombinacijom osnove muške frizure i modernih detalja koje donose trendovi."
            />

            <VerticalView
            source={require('../images/etq.jpg')}
            title="ETQ Amsterdam"
            text="ETQ creates a modern minimalist perspective on footwear. 
            Shop the latest collection for men at the official online store with worldwide shipping."
            />
        </ScrollView>

      </View>
    
  )
}

export default Details

const styles = StyleSheet.create({
    horizontalScrollStyle:{
        marginHorizontal: 15,
    },
    verticalScrollStyle:{
        height: 500,
    },
    
})