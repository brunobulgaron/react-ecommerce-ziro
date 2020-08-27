import React, { useState, useEffect } from 'react'
import axios from 'axios';

import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductsListText, ProductsWrapper } from './style';

function AllProducts() {
  const [product, setProduct] = useState({ products: [] })

  useEffect(() => {
    const getAllProducts = async () => {
      const result = await axios('https://mystifying-chandrasekhar-4d2fb6.netlify.app/.netlify/functions/hello');

      setProduct(result.data);
    };

    getAllProducts();
  }, []);


  return (
    <div>
      <ProductsListText>Lista de Produtos</ProductsListText>
      <ProductsWrapper>
        {product.products.map(eachProduct => (
          <ProductCard
            key={eachProduct.id}
            price={eachProduct.price}
            quantity={eachProduct.quantity}
          />
        ))}
      </ProductsWrapper>
    </div>
  )
}

export default AllProducts;
