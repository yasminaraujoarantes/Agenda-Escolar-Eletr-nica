import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ChamadaList from './components/ChamadaList';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Login' }}/>
        <Stack.Screen name="Main" component={MainPage} options={{ title: 'Página Inicial' }}/>
        <Stack.Screen name="Chamada" component={ChamadaList} options={{ title: 'Chamada' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;