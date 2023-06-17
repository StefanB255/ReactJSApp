import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Box from '../views/boxes'

const ShowAll = () => {
  return (
    <ScrollView
    style={styles.showAllBox}
    >
        
            <Box
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
  )
}

export default ShowAll

const styles = StyleSheet.create({
    showAllBox:{
        alignSelf: 'center'
    }
})