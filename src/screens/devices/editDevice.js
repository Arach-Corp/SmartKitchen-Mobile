import React, { useState, useEffect } from 'react';
import {
  Text, SafeAreaView, StyleSheet, View, Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { OnboardingInput } from '../../components/onboardingInput';
import OnboardingButton from '../../components/onboardingButton';

export default function EditDevice({ route, navigation }) {
  const [description, setDescription] = useState('');
  const [key, setKey] = useState('');
  const { item } = route.params;

  async function editDevice() {
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
      deviceStorage[deviceIndex].descricao = description;
      deviceStorage[deviceIndex].key = key;

      storeData(deviceStorage);

      setDescription('');
      setKey('');
      navigation.navigate('devicesList');
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
        placeholder={item.key}
        labelStyle={{ color: 'black' }}
      />
      <OnboardingInput
        labelStyle={{ color: 'black' }}
        value={description}
        placeholder={item.descricao}
        onChangeText={setDescription}
        text="Description"
        style={styles.description}
        numberOfLines={10}
      />
      <View style={styles.buttonContainer}>
        <OnboardingButton
          text="Editar"
          onPress={async (e) => { await editDevice(e); }}
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
