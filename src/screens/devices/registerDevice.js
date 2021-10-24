import React, { useState } from 'react';
import {
  Text, SafeAreaView, StyleSheet, View, Dimensions, Alert,
} from 'react-native';
import Toast from 'react-native-tiny-toast';
import { useSelector } from 'react-redux';
import { OnboardingInput } from '../../components/onboardingInput';
import OnboardingButton from '../../components/onboardingButton';
import axios from '../../service/axios';

export default function RegisterDevice({ navigation }) {
  const [description, setDescription] = useState('');
  const [key, setKey] = useState('');
  const userToken = useSelector((state) => state.authState.userToken);
  const { height } = Dimensions.get('window');

  async function registerDevice() {
    const toast = Toast.show('Carregando...', { loading: true, position: height / 2 });
    try {
      const requestParameters = { body: { key, descricao: description }, header: { headers: { Authorization: userToken, 'Content-Type': 'application/json' } } };

      const response = await axios.post('/users/dispositivos', requestParameters.body, requestParameters.header);
      Toast.showSuccess('Dispositivo cadastrado com sucesso!');
      console.log(response);
      navigation.navigate('devicesList');
      setKey('');
      setDescription('');
      Toast.hide(toast);
    } catch (e) {
      let errorsString = '';
      e.response.data.errors.forEach((error) => { errorsString += `• ${error} \n`; });
      Toast.hide(toast);
      Toast.show(errorsString, { position: 150 });
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
        text="Descrição"
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
