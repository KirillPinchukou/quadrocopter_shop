import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export const Navbar = props => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    navbar:{
        marginTop:'9%',
        justifyContent:'flex-end'
    },
    text:{
        paddingLeft: '6%',
        fontWeight:'bold',
        fontSize:24
    }
})