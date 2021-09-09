/* eslint-disable react/prop-types */
import React from 'react';
import {
  ScrollView, View, Text, StyleSheet, Image, Dimensions,
} from 'react-native';
import { DataTable } from 'react-native-paper';

export default function ProductDetails({ route }) {
  const { item } = route.params;

  return (
    <ScrollView style={styles.detailsContainer}>
      <Image
        source={typeof item.image === 'string' ? { uri: item.image } : item.image}
        style={styles.imageStyle}
      />
      <View>
        <Text style={styles.description}>
          Evidentemente, a contínua expansão de nossa atividade exige a precisão e a definição do remanejamento dos quadros funcionais.
          Neste sentido, o aumento do diálogo entre os diferentes setores produtivos oferece uma interessante oportunidade para verificação do remanejamento dos quadros funcionais.
        </Text>
      </View>
      <View style={styles.manufacturingContainer}>
        <View style={styles.manufacturingHeaders}>
          <Text>{'Data Fabricação: '}</Text>
          <Text>{'Data de validade: '}</Text>
          <Text>{'Quantidade: '}</Text>
        </View>
        <View style={styles.manufacturingValues}>
          <Text>{item.manufacturingdate}</Text>
          <Text>{item.expirationdate}</Text>
          <Text>{item.quantity}</Text>
        </View>
      </View>
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Item</DataTable.Title>
            <DataTable.Title numeric>Quantidade</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell>Porção</DataTable.Cell>
            <DataTable.Cell numeric>{item.nutritionalinfo.portion}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Carboidratos</DataTable.Cell>
            <DataTable.Cell numeric>{item.nutritionalinfo.carbohydrate}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Proteínas</DataTable.Cell>
            <DataTable.Cell numeric>{item.nutritionalinfo.proteins}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Gorduras Totais</DataTable.Cell>
            <DataTable.Cell numeric>{item.nutritionalinfo.totalfat}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Gorduras Saturadas</DataTable.Cell>
            <DataTable.Cell numeric>{item.nutritionalinfo.saturedfat}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Gorduras trans</DataTable.Cell>
            <DataTable.Cell numeric>{item.nutritionalinfo.transfat}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Sódio</DataTable.Cell>
            <DataTable.Cell numeric>{item.nutritionalinfo.sodium}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Fibra Alimentar</DataTable.Cell>
            <DataTable.Cell numeric>{item.nutritionalinfo.dietaryfiber}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
        <View style={styles.footerContainer}>
          <Text>
            {`Adicionado em: ${item.createdAt}`}
          </Text>
          <View style={item.consumed ? styles.consumedStyle : styles.notConsumedStyle}>

            <Text style={item.consumed ? styles.consumedStyle : styles.notConsumedStyle}>{item.consumed ? 'Consumido' : 'Não consumido' }</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'red',
  },
  consumedStyle: {
    backgroundColor: '#e65555',
    borderRadius: 3,
    color: 'white',
    padding: 3,
  },
  container: {
    flexDirection: 'column',
  },
  description: {
    marginTop: 20,
    padding: 5,
    textAlign: 'justify',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  footerContainer: {
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  imageStyle: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderColor: 'black',
    borderWidth: 2,
    height: 300,
    width,
  },
  manufacturingContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  manufacturingHeaders: {
    backgroundColor: '#c9c9c7',
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
    padding: 5,
  },
  manufacturingValues: {
    backgroundColor: '#e0e0e0',
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
    padding: 5,
  },
  notConsumedStyle: {
    backgroundColor: '#4fd64f',
    borderRadius: 3,
    color: 'white',
    padding: 3,
  },
});
