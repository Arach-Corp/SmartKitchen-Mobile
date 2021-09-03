import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from '../../screens/products';
import ProductDetails from '../../screens/productDetails';

const Stack = createNativeStackNavigator();

export default function ProductsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="productList"
        options={{
          headerShown: false,
        }}
        component={Products}
      />
      <Stack.Screen
        name="productDetails"
        options={({ route }) => ({ title: route.params.item.name })}
        component={ProductDetails}
      />
    </Stack.Navigator>
  );
}
