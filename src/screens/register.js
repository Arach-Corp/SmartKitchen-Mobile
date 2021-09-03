/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyleSheet, View, StatusBar, Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { OnboardingInput } from '../components/onboardingInput';
import { Logo } from '../components/logo';
import OnboardingButton from '../components/onboardingButton';

// eslint-disable-next-line react/prop-types
const Background = ({ children }) => (
  <LinearGradient
    colors={['#00A86B', '#00995C']}
    style={styles.container}
  >
    {children}
  </LinearGradient>
);

export default function Register({ route, navigation }) {
  return (
    <Background>
      <View style={styles.fieldContainer}>
        <View>
          <Logo />
        </View>
        <OnboardingInput text="Nome" style={styles.inputStyle} />
        <OnboardingInput text="E-mail" style={styles.inputStyle} />
        <OnboardingInput text="Senha" secureTextEntry style={styles.inputStyle} />
        <OnboardingInput text="Confirme sua senha" secureTextEntry style={styles.inputStyle} />
        <View style={styles.buttonContainer}>
          <OnboardingButton style={styles.buttonLogin} text="Voltar" onPress={() => navigation.goBack()} />
          <OnboardingButton style={styles.buttonLogin} text="Cadastrar" onPress={() => navigation} />

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
  textLogin: {
    color: 'white',
  },
  textRegister: {
    color: 'white',
    fontSize: 8,
  },
});
