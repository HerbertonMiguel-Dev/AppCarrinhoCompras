import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../pages/Home'
import Cart from '../pages/Cart'

// Configurando o stack navigator para a navegação entre telas.
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      {/* Definindo as telas de navegação */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false, // Ocultando o cabeçalho na tela inicial.
        }}
      />

      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitle: 'Meu Carrinho', // Definindo o título do cabeçalho na tela do carrinho.
        }}
      />
    </Stack.Navigator>
  )
}
