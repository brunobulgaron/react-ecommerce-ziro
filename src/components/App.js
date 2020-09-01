import React, { useState, useEffect } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from '../components/Nav/Nav';
import AllProducts from '../pages/AllProducts/AllProducts';
import NewProduct from '../pages/NewProduct/NewProduct';
import Cart from '../pages/Cart/Cart';
import SignUp from '../pages/SignUp/SignUp';
import Login from '../pages/Login/Login';

import { AppWrapper } from './style';
import './App.css';

function App() {
  let initialState = () => JSON.parse(window.localStorage.getItem('cart')) || [];
  const [cartProducts, setCartProducts] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cartProducts));
  }, [cartProducts]);

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
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </AppWrapper>
    </Router>
  )
};

export default App;