import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from '../../service/axios';
import ListDevices from '../../components/listDevices';

export default function Devices({ navigation, style }) {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    if (process.env.DEBUG) {
      (async () => {
        const body = {
          perPage: 0,
        };

        try {
          const response = await axios.get('/users/dispositivos', body);
          setDevices(response.data.content);
        } catch (error) {
          console.info(error);
        }
      })();
    } else {
      (async () => {
        try {
          const devices = await AsyncStorage.getItem('devices');
          console.info(devices);
          setDevices(JSON.parse(devices));
        } catch (e) {
          console.info(e);
        }
      })();
    }
  });

  return (
    <SafeAreaView style={style}>
      <ListDevices data={devices} navigation={navigation} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
