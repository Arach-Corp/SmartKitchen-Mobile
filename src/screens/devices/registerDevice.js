import React, { useState, useEffect } from 'react';
import {
  Text, SafeAreaView, StyleSheet, View, Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { OnboardingInput } from '../../components/onboardingInput';
import OnboardingButton from '../../components/onboardingButton';

export default function RegisterDevice() {
  const [description, setDescription] = useState('');
  const [key, setKey] = useState('');

  async function registerDevice() {
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

      const device = {
        key,
        descricao: description,
        id: devices.length,
        principal: false,
        timestamp: new Date(),
      };

      devices.push(device);
      storeData(devices);

      setKey('');
      setDescription('');
    } catch (e) {
      console.info(e);
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.header}>Adicionar Dispositivo</Text>

      <OnboardingInput
        text="Key"
        style={styles.input}
        value={key}
        onChangeText={setKey}
        labelStyle={{ color: 'black' }}
      />
      <OnboardingInput
        labelStyle={{ color: 'black' }}
        value={description}
        onChangeText={setDescription}
        text="Description"
        style={styles.description}
        // eslint-disable-next-line react/jsx-boolean-value
        multiline={true}

      />
      <View style={styles.buttonContainer}>
        <OnboardingButton
          text="Cadastrar"
          onPress={async (e) => { await registerDevice(e); }}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 15,
    maxWidth: width * 0.8,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    marginTop: 50,
  },
  description: {
    borderRadius: 6,
    height: 100,
    textAlignVertical: 'top',
  },
  header: {
    fontSize: 30,
  },
  input: {
  },
});
