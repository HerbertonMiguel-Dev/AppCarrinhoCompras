import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Este componente representa um produto individual disponível para compra.
// Ele exibe o nome e preço do produto e um botão para adicioná-lo ao carrinho.
export default function Product({ data, addToCart }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>R$ {data.price}</Text>
      </View>

      <TouchableOpacity style={styles.buttonAdd} onPress={addToCart}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#DFDFDF',
    borderRadius: 2,
    marginBottom: 14,
    padding: 8,
    paddingBottom: 14,
    paddingTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: '#000',
  },
  buttonAdd: {
    paddingStart: 12,
    paddingEnd: 12,
    backgroundColor: '#168fff',
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 2,
  },
  price: {
    color: '#000',
  },
});