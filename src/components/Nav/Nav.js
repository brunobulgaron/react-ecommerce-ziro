import React from 'react'
import { Link } from 'react-router-dom';
import { HeaderWrapper, Logo, HeaderUl, HeaderLi } from './style';

function Nav() {
  return (
    <div>
      <HeaderWrapper>
        <Logo>Ziro</Logo>
        <HeaderUl>
          <HeaderLi>
            <i className="fas fa-tshirt"></i>
            <Link to="/">Produtos</Link>
          </HeaderLi>
          <HeaderLi>
            <i className="fas fa-plus"></i>
            <Link to="/products/new">Novo Produto</Link>
          </HeaderLi>
          <HeaderLi>
            <i className="fas fa-shopping-cart"></i>
            <Link to="/cart">Carrinho</Link>
          </HeaderLi>
        </HeaderUl>
      </HeaderWrapper>
    </div>
  )
}

export default Nav;
