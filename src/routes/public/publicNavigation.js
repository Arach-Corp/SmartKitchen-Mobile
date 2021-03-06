import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../../screens/user/login';
import Register from '../../screens/user/register';

const Stack = createNativeStackNavigator();

export function PublicNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        options={{
          headerShown: false,
        }}
        component={Register}
      />
    </Stack.Navigator>
  );
}
