import React from 'react'
import { Product, ProductPicture, ProductInfo, BuyBtn } from './style';

function ProductCard() {
  return (
    <Product>
      <ProductPicture src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="product picture" srcset=""/>
      <ProductInfo>
        <div>
          <h4>R$ 99,90</h4>
          <span>50 peças disponíveis</span>
        </div>
        <div>
          <BuyBtn>
            Adicionar
            <i className="fas fa-cart-plus"></i>
          </BuyBtn>
        </div>
      </ProductInfo>
    </Product>
  )
}

export default ProductCard
