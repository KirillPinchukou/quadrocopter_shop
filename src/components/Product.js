import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View,Image } from "react-native";
import rateLogo from '../../img/star.png';

 const Product = ({name,price,rate, productImage, onProductPress}) => (
   <TouchableOpacity onPress={onProductPress}>
    <View style={styles.container}>
      <Image source={productImage}/>
      <View style={styles.infoBlock}>
          <Text style={styles.nameText}>{name}</Text>
          <View style={styles.priceRateInfo}>
            <Text style={styles.priceText}>{price}</Text>
            <View style={styles.rateBlock}>
              <Image source={rateLogo}></Image>
              <Text style={styles.rate}>{rate}</Text>
            </View>
          </View>
      </View>
    </View>
  </TouchableOpacity>
)


const styles = StyleSheet.create({
 container:{
  backgroundColor:'#FFF',
  marginRight:18,
  borderRadius:18,
  height:248,
 },
 infoBlock:{
   paddingLeft:20,
   paddingRight:18
 },
 rateBlock:{
    flexDirection: 'row',
    alignItems: 'center',
 },
 priceRateInfo: {
   marginTop: 12,
   flexDirection: 'row',
   justifyContent: 'space-between'
 },
 nameText:{
   fontSize:14
 },
 priceText:{
  fontSize:16,
  fontWeight:'700',
},
rate: {
  marginLeft: 5
}

});

export default Product;