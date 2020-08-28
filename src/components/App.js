import React, { useState } from 'react'

import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

import AllProducts from '../pages/AllProducts/AllProducts';
import NewProduct from '../pages/NewProduct/NewProduct';

import { AppWrapper, HeaderWrapper, Logo, HeaderUl, HeaderLi } from './style';
import './App.css';

function App() {
  return (
    <Router>
      <AppWrapper>
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
              <a href="/cart">Carrinho</a>
            </HeaderLi>
          </HeaderUl>
        </HeaderWrapper>
        <div>
          <Switch>
            <Route exact path="/" component={AllProducts} />
            <Route exact path="/products/new" component={NewProduct} />
          </Switch>
        </div>
      </AppWrapper>
    </Router>
  )
};

export default App;