import React from 'react';
import {StyleSheet,Image, View,Text,TouchableOpacity} from 'react-native';
import { Input } from 'react-native-elements';


export const  ProductCard = ({name,price,category,desription,productImage}) => (
    
   <View style={styles.productCardBox}>
       <Image 
        style={styles.productImage}
        source={productImage}>
       </Image>
       <Text style={styles.productCategory}>{category}</Text>
       <Text style={styles.productName}>{name}</Text>
       <Text style={styles.productPrice}>{price}</Text>
       <Text style={styles.productDescription}>{desription}</Text>

       <Input style={styles.nameInput} placeholder='Имя'/>
       <Input style={styles.phoneInput} placeholder='Телефон'/>
       <TouchableOpacity style={styles.orderButton}>
            <Text>My button</Text>
       </TouchableOpacity>
   </View>

)

const styles = StyleSheet.create({
    productCardBox:{
        backgroundColor:'white',
        
    },
    productCategory:{
        fontSize:16,
        marginLeft:'6%'
    },
    productName:{
        fontSize:28,
        marginLeft:'6%'
    },
    productImage:{
        marginLeft:'5%',
        height:280
    },
    productPrice:{
        fontSize:20,
        marginLeft:'6%',
        color:'#317AE8'
    },
    productDescription:{
        fontSize:14,
        marginLeft:'6%',
        color:'#939399'
    },
    nameInput:{
        fontSize:14,
        color:'#317AE8',
        marginTop:20
    },
    phoneInput:{
        fontSize:14,
        marginBottom:10
    },
    orderButton:{
        marginLeft:'5%',
        backgroundColor:'#317AE8',
        width:'89%',
        borderRadius:20
    }

})



