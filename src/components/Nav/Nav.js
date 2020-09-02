import React from 'react'
import { Link } from 'react-router-dom';
import { HeaderWrapper, Logo, HeaderUl, HeaderLi } from './style';

import firebase from 'firebase';

function Nav(props) {
  return (
    <div>
      <HeaderWrapper>
        <Logo>Ziro</Logo>
        <HeaderUl>
          <HeaderLi>
            <i className="fas fa-tshirt"></i>
            <Link to="/">Produtos</Link>
          </HeaderLi>
          {props.currentUser ? (
            <HeaderLi>
            <i className="fas fa-plus"></i>
            <Link to="/products/new">Novo Produto</Link>
          </HeaderLi>
          ) : (null)}
          {props.currentUser ? (
            <HeaderLi>
            <i className="fas fa-shopping-cart"></i>
            <Link to="/cart">Carrinho</Link>
          </HeaderLi>
          ) : (null)}
          {props.currentUser ? (
            <HeaderLi>
              <i className="fas fa-door-open"></i>
              <button onClick={() => firebase.auth().signOut()}>Sair</button>
            </HeaderLi>
          ) : (
          <HeaderLi>
          <i className="fas fa-user-circle"></i>
            <Link to="/login">Entrar</Link>
          </HeaderLi>
          )}
        </HeaderUl>
      </HeaderWrapper>
    </div>
  )
};

export default Nav;