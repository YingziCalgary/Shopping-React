import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductComponent({productsInCart}) {

  const {id} = useParams();
  
  const[product, setProduct] = useState();
  const[count, setCount] = useState(0);

  
useEffect(() => {
  if(productsInCart)
  {
    var countValue = 0;
    var pos = 0;
    productsInCart.forEach((element, index) => {
      if(parseInt(element.id) === parseInt(id))
      {
        countValue++;
        pos = index;
      }
    });
    setCount(countValue);
    setProduct(productsInCart[pos]);
  }
}, [count, productsInCart, id])
    

return (
  <>
    {product &&
        (<figure>
        <img src = {product.productImage}  title = {product.productName} 
                          alt = {product.productName} 
                          style={{ width: '400px', height: '400px'}} />
        <figcaption>{product.productName}</figcaption>
        <p>total : ${product.price * count}</p>
        <p>count: {count}</p>
      </figure>)
    }
  </>
)
}


