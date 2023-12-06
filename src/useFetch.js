import React, {useState, useEffect} from 'react';

export default function useFetch = (url) => {
 const [products, setProducts] = useState();
  const [productsInCart, setProductsInCart] = useState([]);
  
  useEffect(()=> {
    setProducts (PRODUCTS);
  }, [])

  // This function is passed down to Home as a prop
  function setCartProducts(cart) {
    setProductsInCart(cart); // set the total number of products in an array form in cart. 
  }

  useEffect(() => 
  {
      const loadData = async () => {
      try {
        const response = await fetch(url, {signal});
        console.log("response ok is: " + response.ok);
        console.log("response status is: " + response.status);
        if (response.ok == false) {
          throw new Error("Request failed with status " + response.status);
        }
        const fetchedData = await response.json();
        setData(fetchedData);
        setIsPending(false);
        setError(null);
       } 
       catch (error) {
        if(error.name === 'AbortError')
        {
          console.log ('fetch aborted');
        }
        else{
            console.error(error);
            setIsPending(false);
            setError(error.message);
            /**
             * If an error occurs in the inner block, it can be caught by the inner catch block. 
             * If not caught, it propagates to the outer catch block for handling.
             */
            //throw new Error("An additional error occurred."); // Throw a new error
            };
        }
        // To abort the request
        abortCont.abort();
    };
    loadData(url);
  }, [url]);

  return {data, error, isPending};
}





/**
 * The `AbortController` and its associated `signal` are used for canceling or aborting asynchronous 
 * operations such as network requests made with the `fetch` API. It provides a way to cancel ongoing 
 * requests or clean up resources when they are no longer needed.

Here are a few reasons why the `AbortController` and its `signal` are useful:

1. Request cancellation: In some scenarios, you may want to cancel a network request if it's taking too long 
or is no longer needed. By using an `AbortController`, you can abort the request and prevent unnecessary 
network traffic.

2. Cleanup of resources: When you abort a request, it allows you to clean up any associated resources, 
such as event listeners or ongoing processes. This can help improve efficiency and prevent memory leaks.

3. Better user experience: If you have an interface where users can initiate multiple asynchronous operations 
simultaneously, such as multiple file uploads, you can use `AbortController` to cancel specific requests if 
needed. This improves the user experience by giving them control over ongoing operations.

4. Performance optimization: Canceling unnecessary or redundant requests can help optimize network usage and 
reduce server load, especially in scenarios where multiple requests are made in rapid succession.

By utilizing the `AbortController` and its associated `signal`, you can have more control over asynchronous 
operations and ensure that resources are appropriately managed and requests can be canceled when necessary.
 */