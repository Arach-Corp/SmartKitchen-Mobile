import React from 'react';
import {
  FlatList, SafeAreaView, StyleSheet, Dimensions,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import CardDevice from './cardDevice';

export default function ListDevices({ route, navigation, data }) {
  const cardList = ({ item, index }) => (
    <CardDevice
      description={item.descricao}
      itemKey={item.key}
      main={item.principal}
      onPress={() => navigation.navigate('deviceDetails', { item })}
      index={index}
      timestamp={item.timestamp}
    />
  );

  const { height } = Dimensions.get('window');
  const listHeight = height - useHeaderHeight();

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={cardList}
        keyExtractor={(item) => item.id.toString()}
        style={[styles.list, { minHeight: listHeight }]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
  },
});
