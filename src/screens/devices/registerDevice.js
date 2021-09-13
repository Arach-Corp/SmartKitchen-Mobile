import React, { useState } from 'react';
import {
  Text, SafeAreaView, StyleSheet, View, Dimensions, Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { OnboardingInput } from '../../components/onboardingInput';
import OnboardingButton from '../../components/onboardingButton';

export default function RegisterDevice({ navigation }) {
  const [description, setDescription] = useState('');
  const [key, setKey] = useState('');
  const [errors, setErrors] = useState([]);

  async function registerDevice() {
    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem('devices', JSON.stringify(value));
      } catch (e) {
        console.info(e);
      }
    };

    if (!key || !description) {
      const error = 'Preencha todos os campos';
      if (!errors.includes(error)) {
        setErrors([error, ...errors]);
      }
    }

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

      if (!errors) {
        storeData(devices);
        navigation.navigate('devicesList');
      } else {
        Alert.alert(errors.join('\n '));
      }

      setKey('');
      setDescription('');
    } catch (e) {
      console.log('erro');
      console.log(e);
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
        numberOfLines={10}
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
    textAlignVertical: 'top',
  },
  header: {
    fontSize: 30,
  },
  input: {
  },
});
