import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'

const VerticalView = ({source,title,text}) => {
  return (
    <View>
    <TouchableOpacity style={styles.siteBox}>
            <Image
            source={source}
            style={styles.siteImg}
            />

        <SafeAreaView style={styles.siteDesc}>
            <Text style={styles.siteTitle}>{title}</Text>
            <Text style={styles.siteText} numberOfLines={4}>{text}</Text>
        </SafeAreaView>

    </TouchableOpacity>
    </View>
  )
}

export default VerticalView

const styles = StyleSheet.create({
    siteBox:{
        width: '95%',
        height: 170,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 10,
    },
    siteImg:{
        width: '50%',
        height: '95%',
        resizeMode: 'cover',
        alignSelf: 'center',
        borderRadius: 10,
    },
    siteDesc:{
        width: '45%',
        paddingVertical: 20,
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    siteTitle:{
        fontSize: 18,
        fontWeight: '600'
    },

})