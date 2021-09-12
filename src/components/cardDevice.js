import React from 'react';
import {
  StyleSheet, View, Text, Image, TouchableOpacity,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CardDevice({
  // eslint-disable-next-line react/prop-types
  description, itemKey, timestamp, main, style, onPress,
}) {
  const cleanTimestamp = timestamp.replace(/T.............../, '');
  return (

    <TouchableOpacity style={[styles.cardContainer, style]} onPress={onPress}>
      <View style={styles.leftSectionCardContainer}>
        <MaterialCommunityIcons name="devices" style={[styles.icon, main ? { borderColor: '#30c735' } : { borderColor: 'black' }]} color={main ? '#30c735' : 'grey'} size={50} />
      </View>
      <View style={styles.middleSectionCardContainer}>
        <Text style={styles.deviceName}>
          {description}
        </Text>
        <Text style={styles.creationDate}>
          Data de criação:
          {' '}
          {cleanTimestamp}
        </Text>
      </View>
      <View style={styles.rightSectionCardContainer}>
        <View style={[styles.tagCardContainer, main ? { backgroundColor: '#30c735' } : { backgroundColor: 'grey' }]}>
          <Text style={[styles.tagCard, main ? { color: '#ccc' } : { color: '#fff' }]}>
            {main ? 'Principal' : 'Secundário'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>

  );
}
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 7,
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 15,
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
  creationDate: {
    fontSize: 10,
    fontStyle: 'italic',
    textAlign: 'left',
  },
  deviceName: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
  icon: {
    borderRadius: 6,
    borderWidth: 1,
    padding: 3,
  },
  leftSectionCardContainer: {
    alignContent: 'center',

  },
  middleSectionCardContainer: {
    flexDirection: 'column',
    flex: 2,
    justifyContent: 'space-between',
    marginLeft: 10,

  },
  rightSectionCardContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginLeft: 5,
  },
  tagCardContainer: {
    borderRadius: 30,
    paddingHorizontal: 5,
  },
});
