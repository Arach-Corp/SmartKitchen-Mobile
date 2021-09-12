import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnboardingButton from '../../components/onboardingButton';

export default function DeviceDetails({ route, navigation }) {
  const { item } = route.params;

  async function deleteDevice() {
    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem('devices', JSON.stringify(value));
      } catch (e) {
        console.info(e);
      }
    };

    try {
      let devices = await AsyncStorage.getItem('devices') || '[]';
      devices = JSON.parse(devices);
      // const indexDevice = devices.findIndex((device) => device.id === item.id);

      // delete devices[indexDevice];
      // storeData(devices);
    } catch (e) {
      console.info(e);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Key:
        {' '}
        {item.key}
      </Text>

      <View style={styles.buttonContainer}>

        <OnboardingButton
          text="Excluir Dispositivo"
          onPress={() => deleteDevice()}
          style={styles.button}
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  buttonContainer: {
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'column',
  },
});
