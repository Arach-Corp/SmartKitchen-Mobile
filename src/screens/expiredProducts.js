import React from 'react';
import {
  StyleSheet, SafeAreaView, View,
} from 'react-native';

import Card from '../components/cardProduct';
import image from '../../assets/favicon.png';
// eslint-disable-next-line react/prop-types

export default function ExpiredProducts() {
  return (

    <View style={styles.container}>
      <SafeAreaView style={styles.cardContainer}>
        <Card
          name="Teste"
          quantity="3"
          image={image}
          lastTime="Há 6 meses"
          consumed
          style={styles.cardStyle}
        />
        <Card
          name="Teste"
          quantity="3"
          image={image}
          lastTime="Há 6 meses"
          consumed={false}
          style={styles.cardStyle}
        />
        <Card
          name="Teste"
          quantity="3"
          image={image}
          lastTime="Há 6 meses"
          consumed={false}
          style={styles.cardStyle}
        />
        <Card
          name="Teste"
          quantity="3"
          image={image}
          lastTime="Há 6 meses"
          consumed={false}
          style={styles.cardStyle}
        />
        <Card
          name="Teste"
          quantity="3"
          image={image}
          lastTime="Há 6 meses"
          consumed={false}
          style={styles.cardStyle}
        />
        <Card
          name="Teste"
          quantity="3"
          image={image}
          lastTime="Há 6 meses"
          consumed={false}
          style={styles.cardStyle}
        />

      </SafeAreaView>

    </View>

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
  cardStyle: {

  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 0,
  },

});
