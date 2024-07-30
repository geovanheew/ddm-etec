// Router.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/index'; // Importe o Home.js aqui
import Details from '../screens/Details/index'

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{ title: 'Detalhes' }, { headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
