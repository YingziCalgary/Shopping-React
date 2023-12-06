import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function CartDisplay({productArr}) {
  
    const [count, setCount] = useState (productArr.length);
   
    const navigate = useNavigate();

    const showProduct = (e) => {
        // Prevent default link behavior
        e.preventDefault();
        navigate(`/products/${productArr[0].id}`);
    };

    function handleIncreaseClick() {
        setCount(count => count + 1)
    }

    function handleDecreaseClick() {
        setCount(count => count - 1)
    }

    return (
        <>
            {count>0 ?
                (<figure>
                <img src = {productArr[0].productImage}  title = {productArr[0].productName} 
                                  alt = {productArr[0].productName} 
                                  style={{ width: '400px', height: '400px'}} />
                <figcaption>{productArr[0].productName}</figcaption>
                <p>total: ${productArr[0].price * count}</p>
                <p>count: {count}
                    <input type = "button" value = "+" className = "btn-increase" onClick = {handleIncreaseClick}/>
                    <input type = "button" value = "-" className= "btn-decrease" onClick = {handleDecreaseClick}/>
                    <button type = "button" className='btn' onClick={showProduct}>Show Product</button>
                </p>
              </figure>):(<h1>No product</h1>)
            }
        </>
    )
}


