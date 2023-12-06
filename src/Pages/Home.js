import React from 'react';
import DisplayProduct from '../components/DisplayProduct';   
import {useState} from 'react';      

export default function DisplayProducts({products, setCartProducts, productsInCart}) {

  const [cart, setCart] = useState(productsInCart);

  function addToCart(newProduct) {
    const newCart = updateCart(newProduct); // or you can use hook to deal with the setCartProducts
    setCart(newCart);
    setCartProducts(newCart)
  }

  function updateCart (newItem) {
    const newCart = [...cart];
    const index = findIndexForNewItem(newItem, newCart); //it means to insert newItem into newCart at the position specified by index.
    newCart.splice(index, 0, newItem);
    return newCart;
  }

  function findIndexForNewItem(newProduct, cart)  //ascending order
  {
    let i;
    if (cart.length === 0)
      return 0;
    for(i = 0; i < cart.length; i++)
    {
      const item = cart[i];
      if(newProduct.id < item.id)
        break;
    }
    return i;
  }

  return (
    <div className='container'>
      <h1>Pedro Tech Shop</h1>
      <div className = "grid-container">
        {products && products.map (product => {
              return <DisplayProduct  key = {product.id} product = {product} 
              addToCart={addToCart} productsInCart={cart} />})
        }
      </div>
    </div>
  )
}

