import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Box = ({source,name,text, onPress}) => {
  return (
    <TouchableOpacity 
    style={styles.skillBox}
    onPress={onPress}
    >
        <View style={styles.skillIconBox}>
            <Image
            source={source}
            style={styles.skillIcon}
            />
        </View>

        <View style={styles.skillDesc}>
            <Text style={styles.skillTitle}>{name}</Text>
            <Text style={styles.skillText} numberOfLines={2}>{text}</Text>
        </View>

    </TouchableOpacity>
  )
}

export default Box

const styles = StyleSheet.create({
    skillBox:{
        width: 300,
        height: 160,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 5,
        marginVertical: 20,
        padding: 10,
    },
    skillIconBox:{
        width: 60,
        height: 60,
    },
    skillIcon:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    skillTitle:{
       fontWeight: '700',
       fontSize: 20, 
    },
    skillText:{
        fontWeight: '300',
        fontSize: 15,
    }
})