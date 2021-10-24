/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  StyleSheet, View, StatusBar, Dimensions, Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Toast from 'react-native-tiny-toast';
import { OnboardingInput } from '../../components/onboardingInput';
import { Logo } from '../../components/logo';
import OnboardingButton from '../../components/onboardingButton';
import axios from '../../service/axios';

// eslint-disable-next-line react/prop-types
const Background = ({ children }) => (
  <LinearGradient
    colors={['#00A86B', '#00995C']}
    style={styles.container}
  >
    {children}
  </LinearGradient>
);

// eslint-disable-next-line no-unused-vars
export default function Register({ route, navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const { height } = Dimensions.get('window');

  async function register(event) {
    const toast = Toast.show('Carregando...', { loading: true, position: height / 2 });
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (name.length > 0 && email.length > 0 && password.length > 0 && passwordConfirmation.length > 0 && re.test(email)) {
      try {
        const body = {
          nome: name,
          email: email.toLowerCase(),
          password,
        };
        const response = await axios.post('/auth/register', body);
        Toast.showSuccess('Conta criada com sucesso!');
        console.log(response);
        setName('');
        setEmail('');
        setPassword('');
        setPasswordConfirmation('');
        Toast.hide(toast);
        navigation.goBack();
      } catch (e) {
        let errorsString = '';
        e.response.data.errors.forEach((error) => { errorsString += `• ${error} \n`; });
        Toast.hide(toast);
        Toast.show(errorsString, { position: 150 });
      }
    } else {
      Toast.hide(toast);
      if (!re.test(email)) { Toast.show('E-mail inválido', { position: 150 }); } else {
        Toast.show('Preencha todos os campos', { position: 150 });
      }
    }
  }
  return (
    <Background>
      <View style={styles.fieldContainer}>
        <View>
          <Logo />
        </View>
        <OnboardingInput
          text="Nome"
          style={styles.inputStyle}
          value={name}
          onChangeText={setName}
        />
        <OnboardingInput
          text="E-mail"
          style={styles.inputStyle}
          value={email}
          onChangeText={setEmail}
        />

        <OnboardingInput
          text="Senha"
          secureTextEntry
          style={styles.inputStyle}
          value={password}
          onChangeText={setPassword}
        />
        <OnboardingInput
          text="Confirme sua senha"
          secureTextEntry
          style={styles.inputStyle}
          value={passwordConfirmation}
          onChangeText={setPasswordConfirmation}
        />

        <View style={styles.buttonContainer}>
          <OnboardingButton style={styles.buttonLogin} text="Voltar" onPress={() => navigation.goBack()} />
          <OnboardingButton style={styles.buttonLogin} text="Cadastrar" onPress={(e) => register(e)} />

        </View>
      </View>
      <View />
      <StatusBar style="auto" />
    </Background>
  );
}
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 0,
    marginTop: 20,
    padding: 0,
    width: width * 0.8,
  },
  buttonLogin: {
    backgroundColor: '#00bd71',
    borderRadius: 30,
    justifyContent: 'space-evenly',
    margin: 5,
    marginTop: 0,

  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  fieldContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.60,
    shadowRadius: 3.65,
  },
});
