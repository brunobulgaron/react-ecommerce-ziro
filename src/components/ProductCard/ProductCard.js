import React from 'react'
import { Product, ProductPicture, ProductInfo, BuyBtn } from './style';

function ProductCard(props) {
  return (
    <Product>
      <ProductPicture src={props.photo} alt="product picture" srcset=""/>
      <ProductInfo>
        <div>
          <h4>R$ {props.price}</h4>
          <span>{props.quantity} unidade(s) disponível</span>
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