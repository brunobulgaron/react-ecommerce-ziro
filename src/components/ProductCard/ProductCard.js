import React from 'react'
import { Product, ProductPicture, ProductInfo, BuyBtn } from './style';

function ProductCard() {
  return (
    <Product>
      <ProductPicture src={this.props.picture} alt="product picture" srcset=""/>
      <ProductInfo>
        <div>
          <h4>{this.props.price}</h4>
          <span>{this.props.quantity}</span>
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