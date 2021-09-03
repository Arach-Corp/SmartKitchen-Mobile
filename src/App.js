import 'react-native-gesture-handler';
import React from 'react';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import { Navigation } from './routes/navigation';

export default function App() {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>

  );
}

registerRootComponent(App);
