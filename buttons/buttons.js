import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const Buttons = ({onPress,title}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.buttonStyle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Buttons

const styles = StyleSheet.create({
    buttonStyle:{
        width: 250,
        backgroundColor: 'lightblue',
        color: '#fff',
        textAlign: 'center',
        padding: 15,
        fontSize: 18,
        fontWeight: '600',
        borderRadius: 5,
        alignSelf: 'center',
        marginVertical: 20,
    }
})