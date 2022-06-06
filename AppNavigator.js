import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login/login';
import SignUp from './src/screens/Signup/signup';

import TodoScreen from './src/screens/TodoScreen';

const Stack = createStackNavigator();
const Stack2 = createStackNavigator();

function AuthStack(){
    return(    
      <Stack.Navigator screenOptions = {{headerTitleAlign:"center",headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    );
}

function MainStack(props){
  return(    
    <Stack2.Navigator screenOptions = {{headerTitleAlign:"center",headerShown:false}}>
      <Stack2.Screen name="Todo" component={TodoScreen} />
    </Stack2.Navigator>
    );
}


export {AuthStack,MainStack};