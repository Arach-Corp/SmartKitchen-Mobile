import React from 'react';
import {
  StyleSheet, SafeAreaView, Text, Alert, TouchableOpacity, View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingButton from '../../components/onboardingButton';

export default function DeviceDetails({ route, navigation }) {
  const { item } = route.params;

  async function deleteItem() {
    try {
      const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('devices', JSON.stringify(value));
        } catch (e) {
          console.info(e);
        }
      };

      let devicesStorage = await AsyncStorage.getItem('devices');
      devicesStorage = JSON.parse(devicesStorage);

      const newDevices = devicesStorage.filter((device) => device.id !== item.id);
      storeData(newDevices);
      navigation.goBack();
    } catch (e) {
      Alert.alert(e);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.description}>
        {item.descricao}
      </Text>
      <View style={styles.dataContainer}>
        <View style={styles.keyContainer}>
          <Text style={styles.key}>
            Key:
          </Text>
          <Text>
            {` ${item.key}`}
          </Text>
        </View>
        <View style={styles.keyContainer}>
          <Text style={styles.key}>
            Data de criação:
          </Text>
          <Text>
            {` ${item.timestamp.replace(/T/g, ' ').slice(0, 10)}`}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <OnboardingButton
          text="Excluir dispositivo"
          onPress={() => deleteItem()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  dataContainer: {
    textAlign: 'left',
  },
  description: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  key: {
    fontWeight: 'bold',
  },
  keyContainer: {
    flexDirection: 'row',
  },
});
