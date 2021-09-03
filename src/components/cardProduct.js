import React from 'react';
import {
  StyleSheet, View, Text, Image, TouchableOpacity,
} from 'react-native';

export default function CardProduct({
  // eslint-disable-next-line react/prop-types
  name, quantity, lastTime, consumed, image, style, onPress,
}) {
  return (

    <TouchableOpacity style={[styles.cardContainer, style]} onPress={onPress}>
      <View style={styles.leftSectionCardContainer}>
        <Image
          style={styles.imageCard}
          source={typeof image === 'string' ? { uri: image } : image}
        />
      </View>
      <View style={styles.middleSectionCardContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.textQuantity}>{`Quantidade: ${quantity}`}</Text>
      </View>
      <View style={styles.rightSectionCardContainer}>
        <Text style={styles.lastTimeText}>{lastTime}</Text>
        <View style={[styles.tagCardContainer, consumed ? { backgroundColor: '#d44242' } : { backgroundColor: '#0fbd5a' }]}>
          <Text style={styles.tagCard}>
            {consumed ? 'Consumido' : 'Disponível'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 7,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 10,
    maxHeight: 95,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  imageCard: {
    borderColor: 'black',
    borderRadius: 60,
    borderWidth: 1,
    height: 50,
    width: 50,
  },
  lastTimeText: {
    fontSize: 9,
    fontStyle: 'italic',
    fontWeight: 'normal',
    textAlign: 'right',
  },
  leftSectionCardContainer: {
    alignContent: 'center',
  },
  middleSectionCardContainer: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    flex: 2,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  productName: {
    fontWeight: 'bold',
  },
  rightSectionCardContainer: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  tagCard: {
    borderRadius: 30,
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    padding: 2,
    textAlign: 'center',
  },
  tagCardContainer: {
    borderRadius: 30,
  },
  textQuantity: {
    fontSize: 10,
  },
});
