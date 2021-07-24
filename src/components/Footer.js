import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import footer from '../../img/footer.png';

export const Footer = () =>{
    return(
        <View style={styles.advertisementBox}>
            <Image style={styles.footerBox} 
                source={footer}>                     
            </Image>
        </View>
    )

} 
const styles = StyleSheet.create({
    footerBox:{
        height:'27%',
        width:'110%',
        marginTop:'10%'
    }
})