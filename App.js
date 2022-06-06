import 'react-native-gesture-handler';
import React,{useEffect,useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';

import { Provider } from 'react-redux';
import store from './src/redux/store/store'

import { AuthStack,MainStack } from './AppNavigator';

export default function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <Provider store={store} >
        <NavigationContainer>
          <AuthStack/>
        </NavigationContainer>
      </Provider>
      
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </Provider>
    
  );
}
