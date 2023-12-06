import './App.css';
import { PRODUCTS } from './products';
import React, {useState, useEffect} from 'react';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import ProductComponent from './components/ProductComponent';
import Navbar from './Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './css/styles.css';

function App() {
  const [products, setProducts] = useState();
  const [productsInCart, setProductsInCart] = useState([]);
  
  useEffect(()=> {
    setProducts (PRODUCTS);
  }, [])

  // This function is passed down to Home as a prop
  // cart is like: 0: {id: 1, productName: 'IPhone', price: 999, productImage: '/static/media/1.87f6c2f48f7e15ed845b.png'}
  // 1: {id: 1, productName: 'IPhone', price: 999, productImage: '/static/media/1.87f6c2f48f7e15ed845b.png'}

  function setCartProducts(cart) {
    setProductsInCart(cart); // set the total number of products in an array form in cart. 
  }

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div className = "container">
      <Routes>
        <Route path="/" element={<Home products={products} setCartProducts={setCartProducts} productsInCart={productsInCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart/*" element={<Cart productsInCart={productsInCart} setCartProducts={setCartProducts} />} />
        <Route path="/products/:id" element={<ProductComponent productsInCart={productsInCart} />} />
      </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App;


  