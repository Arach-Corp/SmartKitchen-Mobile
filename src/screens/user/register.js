/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  StyleSheet, View, StatusBar, Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
  const [errors, setErrors] = useState([]);

  async function register(event) {
    try {
      if (password !== passwordConfirmation) {
        const notSamePassword = "The passwords doesn't match";
        setErrors([...errors, notSamePassword]);
      }

      if (errors.length === 0) {
        const body = {
          nome: name,
          email: email.toLowerCase(),
          password,
        };

        const response = await axios.post('/auth/register', body);

        console.info(`${response.status} - Register request`);
        console.info(response.data);
      } else {
        console.info(`Erros: ${errors}`);
      }
    } catch (error) {
      console.info(error);
      console.info(error);
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
