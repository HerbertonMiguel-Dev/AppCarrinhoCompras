import React from "react";
import { View, StyleSheet, Text, StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes'
import CartProvider from './src/contexts/CartContext'

// Este é o ponto de entrada do aplicativo.
// Ele configura a navegação e o contexto do carrinho.
export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        {/* Configurações da barra de status */}
        <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
        {/* Configura as rotas de navegação */}
        <Routes />
      </CartProvider>
    </NavigationContainer>
  );
}
