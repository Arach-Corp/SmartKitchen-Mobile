import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Devices from '../../screens/devices/devices';
import DeviceDetails from '../../screens/devices/deviceDetails';

const Stack = createNativeStackNavigator();

export default function DeviceNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="devicesList"
        component={Devices}
      />
      <Stack.Screen
        name="deviceDetails"
        component={DeviceDetails}
        options={{
          title: 'Detalhes',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
