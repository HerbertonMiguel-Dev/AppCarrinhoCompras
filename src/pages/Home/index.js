import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import Product from "../../components/Product";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../contexts/CartContext";
import Icon from "react-native-vector-icons/Feather";

// Este componente representa a tela inicial do aplicativo,
// onde todos os produtos disponíveis são listados.
export default function Home() {
  // Obtendo o contexto do carrinho.
  const { cart, addItemCart } = useContext(CartContext);

  // Navegação para outras telas.
  const navigation = useNavigation();

  // Estado local para armazenar a lista de produtos.
  const [products, setProducts] = useState([
    {
      id: '1',
      name: "Coca cola",
      price: 19.90
    },
    {
      id: '2',
      name: "Chocolate",
      price: 6.50
    },
    {
      id: '4',
      name: "Queijo 500g",
      price: 15
    },
    {
      id: '5',
      name: "Batata frita",
      price: 23.90
    },
    {
      id: '6',
      name: "Guarana lata",
      price: 6.00
    },
  ]);

  // Função para adicionar um produto ao carrinho.
  function handleAddCart(item) {
    addItemCart(item);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContent}>
        <Text style={styles.title}>Lista de produtos</Text>

        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate("Cart")}
        >
          {/* Exibe um ícone de carrinho e a quantidade de itens nele */}
          {cart.length >= 1 && (
            <View style={styles.dot}>
              <Text style={styles.dotText}>
                {cart?.length}
              </Text>
            </View>
          )}
          <Icon name="shopping-cart" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.list}
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          // Renderiza cada produto usando o componente Product.
          <Product data={item} addToCart={() => handleAddCart(item)} />
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingEnd: 14,
    paddingStart: 14,
  },
  cartContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  dot: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 12,
    position: "absolute",
    zIndex: 99,
    bottom: -2,
    left: -4,
    color: "#000",
  },
  dotText: {
    fontSize: 12,
    color: "#000",
  },
});
