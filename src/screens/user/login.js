import React, { useState } from 'react';
import {
  StyleSheet, View, Text, StatusBar, Dimensions, Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-tiny-toast';
import { OnboardingInput } from '../../components/onboardingInput';
import OnboardingButton from '../../components/onboardingButton';
import axios from '../../service/axios';
import * as actions from '../../redux/modules/auth/actions';

const Background = ({ children }) => (
  <LinearGradient
    colors={['#00A86B', '#00995C']}
    style={styles.container}
  >
    {children}
  </LinearGradient>
);

export default function Login({ route, navigation }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorsLogin, setErrorsLogin] = useState([]);
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const { height } = Dimensions.get('window');
  const validate = () => {
    const error = false;
    if (!re.test(String(email).toLowerCase()) && password === '') {
      Toast.show('Atenção \n Preencha seu e-mail corretamente. \nA senha é de preenchimento obrigatório');
      return error;
    }
    if (!re.test(String(email).toLowerCase())) {
      Toast.show('Atenção', 'Prencha seu e-mail corretamente.');
      return error;
    }
    if (password == '') {
      Toast.show('Atenção', 'A senha é de preenchimento obrigatório!');
      return error;
    }

    return !error;
  };

  async function login() {
    if (validate()) {
      try {
        const toast = Toast.show('Carregando...', { loading: true, position: height / 2 });
        setErrorsLogin([]);
        if (!re.test(String(email).toLowerCase()) && password == '') {
          const mailPwdErrorLogin = 'Invalid Mail and Null Password';
          setErrorsLogin([mailPwdErrorLogin]);
        } else {
          if (!re.test(String(email).toLowerCase())) {
            const mailErrorLogin = 'Invalid Mail';
            setErrorsLogin([mailErrorLogin]);
          }
          if (password == '') {
            const mailErrorLogin = 'NullPassword';
            setErrorsLogin([mailErrorLogin]);
          }
        }
        if (errorsLogin.length === 0) {
          const response = await axios.post('/auth/login', {
            email,
            password,
          });

          if (response.status === 200) {
            await dispatch(actions.loginSuccess({ ...response.data }));
            axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
            Toast.showSuccess('Login efetuado com sucesso');
            Toast.hide(toast);
          } else if (response.status === 400) {
            console.log('teste');
          }
        }
      } catch (e) {
        Toast.hide();
        switch (e.response.status) {
          case 400:
            if (e.response.data.errors.includes('Senha inválida')) { Toast.show('Senha ou e-mail inválido'); }
            break;
          default:
            Toast.show('Falha ao fazer login');
        }

        dispatch(actions.loginFailure());
      }
    }
  }
  return (
    <Background>
      <View style={styles.fieldContainer}>
        <View>
          <Text style={styles.logo}>
            SmartKitchen
          </Text>
        </View>

        <OnboardingInput
          text="E-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.inputStyle}
        />

        <OnboardingInput
          text="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.inputStyle}
        />

        <View style={styles.buttonContainer}>
          <Text style={styles.textRegister}>Não possui uma conta? </Text>
          <Text style={styles.textLinkRegister} onPress={() => navigation.navigate('Register')}> Cadastre-se! </Text>
          <OnboardingButton style={styles.buttonLogin} text="Entrar" onPress={() => login({ email, password })} />
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
    marginTop: 10,
    padding: 0,
    width: width * 0.8,
  },
  buttonLogin: {
    borderRadius: 30,
    justifyContent: 'flex-end',
    marginLeft: 8,
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
    backgroundColor: '#00995C',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.60,
    shadowRadius: 3.65,
    width: width * 0.8,
  },
  logo: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  textLinkRegister: {
    color: '#0ff5b0',
    fontSize: 9,
    textDecorationLine: 'underline',

  },
  textRegister: {
    color: 'white',
    fontSize: 9,
  },
});
