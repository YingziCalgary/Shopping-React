import React from 'react'
import {useEffect, useState} from "react";
import CartDisplay from '../components/CartDisplay';

export default function Cart({productsInCart}) {

  const[transformedProductsInCart, setTransformedProductsInCart] = useState([]);

  useEffect (() => {
    setTransformedProductsInCart(transform());
  }, []);
  
  function transform() {  // transform the array productsInCart into an array of carts items
    let arr2D = [];

    if(!productsInCart)
      return arr2D;

    let i = 0;
    while(i < productsInCart.length)
    {
      let temp = [];
      var item = productsInCart[i];
      var id = item.id;
      if(i>=productsInCart.length-1)
      {
        temp.push(item);
        arr2D.push(temp);
        break;
      }
      var nextItem = productsInCart[i+1];
      var nextID = nextItem.id;
      if( id === nextID)
      {
        while (i< productsInCart.length && id === nextID)
        {
          temp.push(nextItem);
          i++;
          if(i>=productsInCart.length)
            break;
          nextID = productsInCart[i].id;
        }
      }
      else
      {
        temp.push(item);
        i++;
      } 
      arr2D.push(temp);
    }
    return arr2D;
  }

  function getTotalAmount() {
    var temp = 0;
    if(transformedProductsInCart.length>0)
    {
      transformedProductsInCart.map((productArr, index) => {
        return temp += Number(productArr.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0));
      });
      return temp;
    }
  }


  return (
    <>
       <div>
        {transformedProductsInCart && transformedProductsInCart.map((productArr, index) =>{
          return ( <CartDisplay key={index} productArr={productArr} />)
        })}
      </div>
     <p> Total ($): {getTotalAmount()}</p>
    </>
  )
}

