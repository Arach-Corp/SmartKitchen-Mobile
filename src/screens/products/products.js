/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {
  StyleSheet, SafeAreaView, View,
} from 'react-native';
import ListProducts from '../../components/listProducts';
import { products } from '../../../assets/dados.json';
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
    backgroundColor: '#e0e0e0',
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

});
