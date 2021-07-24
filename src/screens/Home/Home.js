import React,{Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { Advertisement } from '../../../Advertisement';
import { FilterBar } from '../../components/Filter';
import { ProductList } from '../../components/ProductList';

const products  = [{
  id:1,
  name:"DJI Air 25",
  price: 1424,
  rate: 5,
  speed: 100,
  productImage: require('../../../img/UdoDron.png')
},
{
  id:2,
  name:"DJI Mavic Mini",
  price: 990,
  rate: 4.5,
  speed: 800,
  productImage: require('../../../img/DJI.png')
},

{
  id:4,
  name:"DJI martice 200",
  price: 2790,
  rate:3.8,
  speed: 200,
  productImage: require('../../../img/DJI.png')
}];

const FILTER_TYPES = {
  all: {
    type: 'all',
    callback: (products) => products,
  },
  cheap: {
    type: 'cheap',
    callback: (products) => [products.slice().sort((a, b) => b.price - a.price).pop()],
  },
  fast: {
    type: 'fast',
    callback: (products) => [products.slice().sort((a, b) => a.speed - b.speed).pop()],
  },
  best: {
    type: 'best',
    callback: (products) => [products.slice().sort((a, b) => a.rate - b.rate).pop()],
  },

}

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      filter: FILTER_TYPES.all
    }
   
  }


  handleFilterChange = (filter) => {
    this.setState({filter});
  }

  render() {
    const {navigation} = this.props;
    const {filter} = this.state;
    const filteredProducts = filter.callback(products);

    return (
      <View style={styles.container}>
        <Advertisement
            category='Need For Speed'
            name='UdoDron 3 Pro'
            price='1984 $'
        />
        <FilterBar filters={FILTER_TYPES} activeFilter={filter} onFilterChange={this.handleFilterChange}/>
        <ProductList navigation={navigation} products={filteredProducts} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#E5E5E5',
  },
});

export default HomeScreen;
