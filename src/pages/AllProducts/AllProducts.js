import React from 'react'

import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductsListText, ProductsWrapper } from './style';


function AllProducts() {
  return (
    <div>
      <ProductsListText>Lista de Produtos</ProductsListText>
      <ProductsWrapper>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsWrapper>
    </div>
  )
}

export default AllProducts;
