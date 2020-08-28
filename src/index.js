import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
let firebaseConfig = {
  apiKey: "AIzaSyAxuB-SvrN0kJjWejPvD5jH4V99c7GzMik",
  authDomain: "ecommerce-ziro.firebaseapp.com",
  databaseURL: "https://ecommerce-ziro.firebaseio.com",
  projectId: "ecommerce-ziro",
  storageBucket: "ecommerce-ziro.appspot.com",
  messagingSenderId: "695232423614",
  appId: "1:695232423614:web:f22ca772365f532da5a0ef"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);