import React, { useState } from 'react';
import {
  StyleSheet, SafeAreaView, Text, Alert, TouchableOpacity, View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingButton from '../../components/onboardingButton';

export default function DeviceDetails({ route, navigation }) {
  const { item } = route.params;
  const { itemState, setItemState } = useState();

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

  async function toggleMain() {
    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem('devices', JSON.stringify(value));
      } catch (e) {
        console.info(e);
      }
    };

    try {
      let deviceStorage = await AsyncStorage.getItem('devices');
      deviceStorage = JSON.parse(deviceStorage);
      const deviceIndex = deviceStorage.findIndex((device) => device.id === item.id);
      deviceStorage[deviceIndex].principal = !deviceStorage[deviceIndex].principal;

      storeData(deviceStorage);
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
      <View style={styles.buttons}>

        <View style={styles.buttonContainer}>
          <OnboardingButton
            text={itemState ? 'Tornar secundário' : 'Tornar principal'}
            onPress={() => toggleMain()}
            style={styles.button}
          />
        </View>

        <View style={styles.buttonContainer}>
          <OnboardingButton
            text="Editar dispositivo"
            onPress={() => navigation.navigate('editDevice', { item, edit: true })}
            style={[styles.button, { color: 'orange' }]}
          />
        </View>
        <View style={styles.buttonContainer}>
          <OnboardingButton
            text="Excluir dispositivo"
            onPress={() => deleteItem()}
            style={[styles.button, { color: 'red' }]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 60,
  },
  buttons: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 15,
  },
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
