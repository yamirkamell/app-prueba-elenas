import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator  } from '@react-navigation/native-stack'
import clients from '../components/clients';
import login from '../components/login';

const Stack = createNativeStackNavigator ();

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
          <Stack.Screen name='login' component={login} options={{ headerShown: false }}/>
          <Stack.Screen name='clients' component={clients} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}