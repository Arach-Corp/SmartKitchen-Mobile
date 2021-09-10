/* eslint-disable react/prop-types */
import { useHeaderHeight } from '@react-navigation/elements';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import React from 'react';
import {
  Dimensions, FlatList, SafeAreaView, StyleSheet,
} from 'react-native';
import CardProduct from './cardProduct';

export { FlatList } from 'react-native';

export default function ListProducts({ data, navigation, destiny }) {
  const cardList = ({ item, index }) => (
    <CardProduct
      name={item.name}
      quantity={item.quantity}
      image={item.image}
      lastTime={item.lastTime}
      cosumed={item.consumed}
      onPress={() => {
        navigation.navigate(destiny, { item });
      }}
      index={index}
    />
  );

  const { height } = Dimensions.get('window');
  const listHeight = height - useHeaderHeight() - useBottomTabBarHeight();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={cardList}
        keyExtractor={(item, index) => index.toString()}
        style={[styles.listContainer, { minHeight: listHeight }]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    textAlign: 'center',
  },
  listContainer: {
    paddingVertical: 10,

  },
});
