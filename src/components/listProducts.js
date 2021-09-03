/* eslint-disable react/prop-types */
import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import CardProduct from './cardProduct';

export { FlatList } from 'react-native';

export default function ListProducts({ data, navigation, destiny }) {
  const cardList = ({ item }) => (
    <CardProduct
      name={item.name}
      quantity={item.quantity}
      image={item.image}
      lastTime={item.lastTime}
      cosumed={item.consumed}
      onPress={() => {
        navigation.navigate(destiny, { item });
      }}
    />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={cardList}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
}
