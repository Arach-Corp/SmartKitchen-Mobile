/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyleSheet, SafeAreaView, View,
} from 'react-native';
import ListProducts from '../components/listProducts';
import { products } from '../../assets/dados.json';
// eslint-disable-next-line react/prop-types

export default function Products({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        <ListProducts data={products} navigation={navigation} destiny="productDetails" />
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    paddingBottom: 0,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 0,
  },

});
