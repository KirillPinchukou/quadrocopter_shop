import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HOME, PRODUCT_DETAILS } from './src/screens/screenNames';
import Home from './src/screens/Home/Home';
import { ProductCard } from './src/components/ProductCard';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={HOME} component={Home} />
        <Stack.Screen name={PRODUCT_DETAILS} component={ProductCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;