import React from 'react'
import { Product, ProductPicture, ProductName, ProductInfo, BuyBtn } from './style';

function ProductCard(props) {
  return (
    <Product>
      <ProductPicture src={props.photo} alt="Foto do produto" srcset=""/>
      <ProductInfo>
        <ProductName>
          <p>{props.name}</p>
        </ProductName>
        <div>
          <h4>R$ {props.price}</h4>
          <span>{props.quantity} unidade(s) disponível(is)</span>
        </div>
        <div>
          <BuyBtn
            onClick={() => props.onAddProductToCart(props.id)}
          >
            Adicionar
            <i className="fas fa-cart-plus"></i>
          </BuyBtn>
        </div>
      </ProductInfo>
    </Product>
  );
};

export default ProductCard;