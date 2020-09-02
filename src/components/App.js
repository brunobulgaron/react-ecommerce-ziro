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

import firebase from 'firebase';

function App() {
  let initialState = () => JSON.parse(window.localStorage.getItem('cart')) || [];
  
  const [cartProducts, setCartProducts] = useState(initialState);
  const [currentUser, setCurrentUser] = useState();
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
      }
      setAuthLoading(false)
    });
  }, []);
  
  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <Router>
      <AppWrapper>
        <Nav
          currentUser={currentUser}
        />
        <>
          {!authLoading && 
            <Switch>
              <Route exact path="/">
                <AllProducts 
                  cartProducts={cartProducts}
                  setCartProducts={setCartProducts}
                />
              </Route>
              <Route path="/products/new">
                <NewProduct
                  currentUser={currentUser}
                />
              </Route>
              <Route path="/cart">
                <Cart
                  cartProducts={cartProducts}
                  setCartProducts={setCartProducts}
                  currentUser={currentUser}
                />
              </Route>
              <Route path="/signup">
                <SignUp
                  currentUser={currentUser}
                />
              </Route>
              <Route path="/login">
                <Login
                  currentUser={currentUser}
                />
              </Route>
            </Switch>
          }
        </>
      </AppWrapper>
    </Router>
  )
};

export default App;