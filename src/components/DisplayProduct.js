/**
 * display all products in products.js (8 for the total)
 */
import React, {useState, useEffect} from 'react';

export default function DisplayProduct({product, addToCart, productsInCart}) {

  //find the total number of products in productsInCart
  function findCount() {
    let count = 0;
    for(let i = 0; i < productsInCart.length; i++)
    {
      const item = productsInCart[i];
      if(item.id === product.id)
        count++;
    }
    return count;
  }
  var result = findCount();

  const [count, setCount] = useState(result);
  const [value, setValue] = useState(`Add to Cart (${result})`);  // for button
  
  function handleClick (newProduct) {
    setCount((count) => count + 1);
    addToCart(newProduct);
  }

  useEffect(()=> {
    setValue(`Add to Cart (${count})`);
  }, [count])

  return (
    <>
      <figure>
          <img src = {product.productImage}  title = {product.productName} alt = {product.productName} 
                                                      style={{ width: '400px', height: '400px'}} />
          <figcaption>{product.productName}</figcaption>
          <p>${product.price}</p>
          <input type = "button" value = {value} name = "addButton" className = "btn" 
              onClick = {(e) => {handleClick(product)}} />
      </figure>
    
    </>
  )
}

