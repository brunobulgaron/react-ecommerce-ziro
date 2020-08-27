import React from 'react'
import { HeaderWrapper, Logo, HeaderUl, HeaderLi } from './style';

function Header() {
  return (
    <HeaderWrapper>
        <Logo>Ziro</Logo>
        <HeaderUl>
          <HeaderLi>
            <i className="fas fa-tshirt"></i>
            <a href="/">Produtos</a>
          </HeaderLi>
          <HeaderLi>
            <i className="fas fa-plus"></i>
            <a href="/products/new">Novo Produto</a>
          </HeaderLi>
          <HeaderLi>
            <i className="fas fa-shopping-cart"></i>
            <a href="/cart">Carrinho</a>
          </HeaderLi>
        </HeaderUl>
    </HeaderWrapper>
  )
};

export default Header;