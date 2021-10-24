import React, { useState } from 'react';
import {
  Text, SafeAreaView, StyleSheet, View, Dimensions,
} from 'react-native';
import Toast from 'react-native-tiny-toast';
import { useSelector } from 'react-redux';
import { OnboardingInput } from '../../components/onboardingInput';
import axios from '../../service/axios';
import OnboardingButton from '../../components/onboardingButton';

export default function EditDevice({ route, navigation }) {
  const [description, setDescription] = useState('');
  const [key, setKey] = useState('');
  const { item } = route.params;
  const userToken = useSelector((state) => state.authState.userToken);
  const { height } = Dimensions.get('window');

  async function editDevice() {
    const toast = Toast.show('Carregando...', { loading: true, position: height / 2 });
    try {
      const requestParameters = { body: { key, descricao: description }, header: { headers: { Authorization: userToken } } };

      if (description.length > 0 && key.length > 0) {
        const response = await axios.put(`/users/dispositivo/${item.id}`, requestParameters.body, requestParameters.header);
        console.log('User Token:', userToken);
        Toast.showSuccess('Dispositivo editado com sucesso!');
        navigation.navigate('devicesList');
        setKey('');
        setDescription('');
        Toast.hide(toast);
      } else {
        Toast.hide(toast);
        Toast.show('Preencha todos os campos', { position: height / 3 });
      }
    } catch (e) {
      console.log('User Token:', userToken);
      console.log(e.response);

      const errorsString = `• Erro status ${e.response.status} \n`;
      Toast.hide(toast);
      Toast.show(errorsString, { position: 150 });
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.header}>Editar Dispositivo</Text>

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
