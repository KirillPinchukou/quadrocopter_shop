import React from 'react';
import {StyleSheet,ScrollView,FlatList, View} from 'react-native';
import Product from '../Product';
import {PRODUCT_DETAILS} from '../../screens/screenNames';

const ProductList = ({products, navigation}) => {
    const handleProductPress = (product) => navigation.navigate(PRODUCT_DETAILS, {...product});
    return (
        <ScrollView 
          contentContainerStyle={styles.contentContainer}
          style={styles.container} 
          horizontal
        >
            {products.map((product) => (<Product onProductPress={handleProductPress} key={product.id} {...product}/>))}
        </ScrollView>
)};

const styles = StyleSheet.create({
        container:{
           flex:1           
        },
        contentContainer: {
           paddingLeft: 20,
        }
});

 export default ProductList; 
       