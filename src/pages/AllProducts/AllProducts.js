import React, { useState, useEffect } from 'react'
import axios from 'axios';
import firebase from 'firebase/app';

import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductsListText, ProductsWrapper } from './style';

function AllProducts() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await firebase.firestore().collection('products').get();

      const products = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });

      setProduct(products);
    };

    getProducts();
  }, [])

  // useEffect(() => {
  //   const getAllProducts = async () => {
  //     const result = await axios('https://mystifying-chandrasekhar-4d2fb6.netlify.app/.netlify/functions/getAllProducts');

  //     setProduct(result.data);
  //   };

  //   getAllProducts();
  // }, []);

  return (
    <div>
      <ProductsListText>Lista de Produtos</ProductsListText>
      <ProductsWrapper>
        {product.map(eachProduct => (
          <ProductCard
            key={eachProduct.id}
            photo={eachProduct.photo}
            price={eachProduct.price}
            quantity={eachProduct.quantity}
          />
        ))}
      </ProductsWrapper>
    </div>
  )
}

export default AllProducts;