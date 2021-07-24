import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import addvLogo from './img/UdoDron.png';

export const Advertisement = ({category,name,price}) =>{
    return(
        <View style={styles.advertisementBox}>
            <Text style={styles.advertisementHeaderText}>{category}</Text>
            <Text style={styles.advertisementNameText}>{name}</Text>
            <Text style={styles.advertisementPriceText}>{price}</Text>
            <Image style={styles.advertisementImg} 
                source={addvLogo}>
                                         
            </Image>
        </View>
    )

} 
const styles = StyleSheet.create({
    advertisementBox:{
        height:164,
        top:'3%',
        width:'90%',
        left:'5%',
        backgroundColor:'#317AE8',
        borderRadius:20,
    },
    advertisementHeaderText:{
        paddingLeft: 16,
        top:"35%",
        fontWeight:'bold',
        fontSize:14,
        color:'white'
    },
    advertisementNameText:{
        paddingLeft: 16,
        top:"35%",
        fontWeight:'bold',
        fontSize:24,
        color:'white'
    },
    advertisementPriceText:{
        paddingLeft: 16,
        top:"35%",
        fontWeight:'bold',
        fontSize:20,
        color:'white'
    },
    advertisementImg:{
        top:-75,
        left:'35%',
        width:'60%'

    }
}
    
)