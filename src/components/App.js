import React, { useState } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from '../components/Nav/Nav';
import AllProducts from '../pages/AllProducts/AllProducts';
import NewProduct from '../pages/NewProduct/NewProduct';
import Cart from '../pages/Cart/Cart';

import { AppWrapper } from './style';
import './App.css';

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <Router>
      <AppWrapper>
        <Nav />
        <div>
          <Switch>
            <Route exact path="/">
              <AllProducts 
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            </Route>
            <Route path="/products/new">
              <NewProduct />
            </Route>
            <Route path="/cart">
              <Cart
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            </Route>
          </Switch>
        </div>
      </AppWrapper>
    </Router>
  )
};

export default App;