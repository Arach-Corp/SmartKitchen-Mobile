import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import axios from '../../service/axios';
import ListDevices from '../../components/listDevices';

export default function Devices({ navigation, style }) {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const product = (async () => {
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
  });

  return (
    <SafeAreaView style={style}>
      <ListDevices data={devices} navigation={navigation} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
