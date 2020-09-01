import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "../../components/ProductCard/ProductCard";

import { ProductsListText, ProductsWrapper, ProductsGrid, CartPreview } from "./style";

// import firebase from "firebase/app";

function AllProducts({cartProducts, setCartProducts}) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const result = await axios.get("https://mystifying-chandrasekhar-4d2fb6.netlify.app/.netlify/functions/getAllProducts");

      setProduct(result.data);
    };

    getAllProducts();
  }, []);

  const onDeleteProduct = async (productId) => {
    await axios.delete(`https://mystifying-chandrasekhar-4d2fb6.netlify.app/.netlify/functions/deleteProduct/${productId}`)

    return alert("Teste");
  };

  const onAddProductToCart = (productId) => {
    const productsInCart = cartProducts.find(product => productId === product.id);

    if(productsInCart){
      const newProductsInCart = cartProducts.map(product => {
        if(productId === product.id){
          return {
            ...product,
            quantity: product.quantity + 1
          };
        };

        return product;
      });

      setCartProducts(newProductsInCart);
    }else{
      const productToAdd = product.find(product => productId === product.id);

      const productsInCart = [...cartProducts, { ...productToAdd, quantity: 1 }];

      setCartProducts(productsInCart);
    };
  };

  const getTotalValue = () => {
    let totalValue = 0;

    for(let product of cartProducts){
      totalValue += product.price * product.quantity
    }

    return totalValue;
  };

  return (
    <div>
      {product < 1 ? (
        <ProductsListText>Carregando</ProductsListText>
      ) : (
        <>
          <ProductsListText>Lista de Produtos</ProductsListText>
            <ProductsWrapper>
              <CartPreview>
                <p>Carrinho: {cartProducts.length} item(s)</p>
                <p>Total: R$ {getTotalValue()} reais</p>
              </CartPreview>
              <ProductsGrid>
                {product.map((eachProduct) => (
                  <ProductCard
                    key={eachProduct.id}
                    name={eachProduct.name}
                    photo={eachProduct.photo}
                    price={eachProduct.price}
                    quantity={eachProduct.quantity}
                    onAddProductToCart={() => onAddProductToCart(eachProduct.id)}
                    onDeleteProduct={() => onDeleteProduct(eachProduct.id)}
                  />
                ))}
              </ProductsGrid>
            </ProductsWrapper>
        </>
      )}
    </div>
  );
};

export default AllProducts;
