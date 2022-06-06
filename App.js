import 'react-native-gesture-handler';

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import { Provider } from 'react-redux';
import store from './src/redux/store/store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <View>
        <Text>Hello</Text>
      </View>
    </NavigationContainer>
    </Provider>
    
  );
}
