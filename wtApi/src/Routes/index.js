import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeIndex from '../screens/Home';
import Details from '../screens/Details';
import NationList from '../screens/listaNacoes'; // Tela de nações
import VehicleList from '../screens/veiculos'; // Tela de veículos

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="NationList"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1e1e1e', // Cor de fundo do cabeçalho
            elevation: 0, // Remover a sombra no Android
            shadowOpacity: 0, // Remover a sombra no iOS
            borderBottomWidth: 0, // Remover a linha branca
          },
          headerTintColor: '#fff', // Cor do texto no cabeçalho
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name='NationList' component={NationList} options={{ title: 'Nações' }} />
        <Stack.Screen name='VehicleList' component={VehicleList} options={{ title: 'Veículos' }} />
        <Stack.Screen name='Details' component={Details} options={{ title: 'Detalhes' }} />
        <Stack.Screen name='Home' component={HomeIndex} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
