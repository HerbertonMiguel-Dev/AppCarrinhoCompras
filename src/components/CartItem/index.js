import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Este componente representa um item individual no carrinho de compras.
// Ele exibe o nome, preço e quantidade do item, e permite aumentar ou diminuir a quantidade.
export default function CartItem({ data, addAmount, removeAmount }) {
  // Definindo o estado local para armazenar a quantidade do item.
  const [amount, setAmount] = useState(data?.amount);

  // Função para aumentar a quantidade do item.
  function handleIncrease() {
    addAmount(); // Chama a função para adicionar a quantidade no contexto global do carrinho.
    setAmount((item) => item + 1); // Incrementa a quantidade local.
  }

  // Função para diminuir a quantidade do item.
  function handleDecrease() {
    removeAmount(); // Chama a função para remover a quantidade no contexto global do carrinho.

    if (amount === 0) {
      // Se a quantidade já é zero, não faz nada.
      setAmount(0);
      return;
    }

    setAmount((item) => item - 1); // Decrementa a quantidade local.
  }

  return (
  // Container principal do item do carrinho.
  <View style={styles.container}>
  
    {/* Exibe o nome e o preço do item. */}
    <View>
      {/* Nome do item, estilizado com `styles.title`. */}
      <Text style={styles.title}>{data.name}</Text>
      
      {/* Preço do item, exibido em reais (R$), estilizado com `styles.price`. */}
      <Text style={styles.price}>R$ {data.price}</Text>
    </View>

    {/* Container para os controles de quantidade. */}
    <View style={styles.amountContainer}>
    
      {/* Botão para diminuir a quantidade do item no carrinho. */}
      <TouchableOpacity style={styles.buttonAdd} onPress={handleDecrease}>
        {/* Texto do botão, indicando a ação de diminuir a quantidade. */}
        <Text>-</Text>
      </TouchableOpacity>

      {/* Exibe a quantidade atual do item no carrinho. */}
      <Text style={styles.amount}>{amount}</Text>

      {/* Botão para aumentar a quantidade do item no carrinho. */}
      <TouchableOpacity style={styles.buttonAdd} onPress={handleIncrease}>
        {/* Texto do botão, indicando a ação de aumentar a quantidade. */}
        <Text>+</Text>
      </TouchableOpacity>
      
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#dfdfdf',
    borderRadius: 2,
    marginBottom: 14,
    padding: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  price: {
    fontSize: 16,
  },
  amountContainer: {
    marginTop: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonAdd: {
    backgroundColor: '#168fff',
    padding: 6,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 2,
  },
  amount: {
    marginLeft: 14,
    marginRight: 14,
  },
});