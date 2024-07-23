import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { CartContext } from "../../contexts/CartContext";
import CartItem from '../../components/CartItem'

// Este componente representa a tela do carrinho de compras.
// Ele exibe todos os itens no carrinho e o total.
export default function Cart() {
  // Obtendo o contexto do carrinho.
  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={() => <Text>Nenhum item no carrinho...</Text>}
        renderItem={({ item }) => (
          // Renderiza cada item do carrinho usando o componente CartItem.
          <CartItem
            data={item}
            addAmount={() => addItemCart(item)}
            removeAmount={() => removeItemCart(item)}
          />
        )}
        ListFooterComponent={() => <Text style={styles.total}>Total R$ {total}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#000',
  }
})
