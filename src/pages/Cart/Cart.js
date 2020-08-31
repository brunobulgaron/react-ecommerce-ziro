import React from "react";
import { CartText, EmptyCartText, BagIcon, CartWrapper, CustomUL, CustomLi, RemoveBtn, CheckoutWrapper, ClearCartBtn, CheckoutBtn } from "./style";

function Cart(props) {
  const getTotalValue = () => {
    let totalValue = 0;

    for(let product of props.cartProducts){
      totalValue += product.price * product.quantity
    }

    return totalValue;
  };
  
  const onRemoveProductFromCart = (productId) => {
    const newProductsInCart = props.cartProducts.map(product => {
      if(product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1
        };
      };
      return product;
    
    }).filter((product) => product.quantity > 0)

    props.setCartProducts(newProductsInCart);
  };

  const clearCartItems = () => {
    const removeAllItems = props.cartProducts.map(product => {
      return {
        ...product,
        quantity: product.quantity = 0
      }
    }).filter((product) => product.quantity > 0)
    
    props.setCartProducts(removeAllItems);
  };

  const checkout = () => {
    const removeAllItems = props.cartProducts.map(product => {
      return {
        ...product,
        quantity: product.quantity = 0
      }
    }).filter((product) => product.quantity > 0)
    
    props.setCartProducts(removeAllItems);
    alert("Obrigado!");
  };

  return (
    <>
      <CartText>Carrinho</CartText>
      {props.cartProducts < 1 ? (
        <>
          <EmptyCartText>Seu carrinho está vazio. :(</EmptyCartText>
          <BagIcon className="fas fa-shopping-bag"></BagIcon>
        </>
      ) : (
        <CartWrapper>
          <CustomUL>
            {props.cartProducts.map((eachCartProduct) => (
              <CustomLi
                key={eachCartProduct.id}
              >
                <span>Produto: {eachCartProduct.name}</span>
                <span>Quantidade: {eachCartProduct.quantity}</span>
                <RemoveBtn
                  onClick={() => onRemoveProductFromCart(eachCartProduct.id)}
                >
                  <i className="fas fa-trash-alt"></i>
                </RemoveBtn>
              </CustomLi>
            ))}
            <p>Total: R$ {getTotalValue()} reais</p>
            <CheckoutWrapper>
              <ClearCartBtn
                onClick={() => clearCartItems()}
              >
                Limpar Carrinho
              </ClearCartBtn>
              <CheckoutBtn
                onClick={() => checkout()}
              >
                Finalizar Pedido
              </CheckoutBtn>
            </CheckoutWrapper>
          </CustomUL>
        </CartWrapper>
      )}
    </>
  );
};

export default Cart;