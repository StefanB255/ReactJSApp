import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({title,text, onPress}) => {
  return (
    <View style={styles.headerView}>
        <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity>
        <Text 
        style={styles.headerText}
        onPress={onPress}
        >{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

    headerView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        marginBottom: 0,
    },
    headerTitle:{
        fontWeight: '600',
        fontSize: 20,
    },
    headerText:{
        fontSize: 18,
        fontWeight: '300'
    }

})