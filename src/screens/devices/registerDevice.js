import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import { OnboardingInput } from '../../components/onboardingInput';

export default function RegisterDevice() {
  const [description, setDescription] = useState('');
  const [key, setKey] = useState('');

  async function registerDevice() {
    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem('@storage_Key', value);
      } catch (e) {
        // saving error
      }
    };
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.header}>Adicionar Dispositivo</Text>
      <OnboardingInput
        labelStyle={{ color: 'black' }}
        value={description}
        onChangeText={setDescription}
        text="Description"
        style={styles.input}
      />

      <OnboardingInput
        text="Key"
        style={styles.input}
        value={key}
        onChangeText={setKey}
        labelStyle={{ color: 'black' }}
      />

      {!process.env.DEBUG ? (
        <>
          <OnboardingInput
            labelStyle={{ color: 'black' }}
            value={description}
            onChangeText={setDescription}
            text="Description"
            style={styles.input}
          />

          <OnboardingInput
            labelStyle={{ color: 'black' }}
            value={description}
            onChangeText={setDescription}
            text="Description"
            style={styles.input}
          />

        </>
      ) : (
        <>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
  },
  input: {
    backgroundColor: '#00A86B',
    borderColor: 'black',
  },
});
