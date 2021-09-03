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
      <View>
        <Text>{`Data Fabricação: ${item.manufacturingdate}`}</Text>
        <Text>{`Data de validade: ${item.expirationdate}`}</Text>
        <Text>{`Quantidade: ${item.quantity}`}</Text>
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
        <Text>
          {`Adicionado em: ${item.createdAt}`}
        </Text>
        <Text>{item.consumed ? 'Consumido' : 'Não consumido' }</Text>
      </View>
    </ScrollView>
  );
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'red',
  },
  container: {
    flexDirection: 'column',
  },
  description: {
    padding: 5,
    textAlign: 'justify',
  },
  detailsContainer: {
    flexDirection: 'column',
  },
  imageStyle: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderColor: 'black',
    borderWidth: 2,
    height: 300,
    width,
  },
});
