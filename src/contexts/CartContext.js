import React, { useState, createContext } from 'react'

// Criando um contexto para o carrinho de compras.
export const CartContext = createContext({});

// Este componente provedor gerencia o estado global do carrinho de compras.
// Ele fornece funções para adicionar, remover itens e calcular o total.
function CartProvider({ children }) {
  // Estado para armazenar os itens do carrinho.
  const [cart, setCart] = useState([]);
  // Estado para armazenar o total do carrinho.
  const [total, setTotal] = useState(0);

  // Função para adicionar um item ao carrinho.
  function addItemCart(newItem) {
    // Verifica se o item já existe no carrinho.
    const indexItem = cart.findIndex(item => item.id === newItem.id);

    if (indexItem !== -1) {
      // Se o item já existe, incrementa a quantidade.
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;

      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      totalResultCart(cartList);

      return;
    }

    // Se o item não existe, adiciona-o ao carrinho.
    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setCart(products => [...products, data]);
    totalResultCart([...cart, data]);
  }

  // Função para remover um item do carrinho.
  function removeItemCart(product) {
    // Encontra o índice do item a ser removido.
    const indexItem = cart.findIndex(item => item.id === product.id);

    if (cart[indexItem]?.amount > 1) {
      // Se a quantidade do item for maior que 1, decrementa a quantidade.
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount - 1;

      cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;

      setCart(cartList);
      totalResultCart(cartList);

      return;
    }

    // Se a quantidade for 1, remove o item completamente do carrinho.
    const removeItem = cart.filter(item => item.id !== product.id);
    setCart(removeItem);
    totalResultCart(removeItem);
  }

  // Função para calcular o total do carrinho.
  function totalResultCart(items) {
    let myCart = items;
    let result = myCart.reduce((acc, obj) => acc + obj.total, 0);

    setTotal(result.toFixed(2));
  }

  return (
    <CartContext.Provider
      value={{
        cart, // Lista de itens no carrinho.
        addItemCart, // Função para adicionar itens ao carrinho.
        removeItemCart, // Função para remover itens do carrinho.
        total, // Total do carrinho.
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
