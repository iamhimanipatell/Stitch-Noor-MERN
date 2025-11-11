import React, { createContext, useEffect, useState } from "react";
import all_product from "../Components/Assets/all_product.js";

export const ShopContext = createContext(null);

// Build default cart from local product list (imported)
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[all_product[index].id] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [productList, setProductList] = useState(all_product); // starts with local
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        // Combine local products + backend products
        if (data.length > 0) {
          const combined = [...all_product, ...data];
          setProductList(combined);
        } else {
          setProductList(all_product); // fallback
        }
      })
      .catch(() => setProductList(all_product)); // fallback if fetch fails

    // Fetch cart data if user is logged in
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/getcart', {
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body:"",
      })
      .then((response)=>response.json())
      .then((data)=>setCartItems(data));
    }
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/addtocart', {
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'auth-token':`${localStorage.getItem('auth-token')}`,
        'Content-Type':'application/json',
      },
      body:JSON.stringify({"itemId":itemId}),
    })
    .then((response)=>response.json())
    .then((data)=>console.log(data));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/removefromcart', {
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'auth-token':`${localStorage.getItem('auth-token')}`,
        'Content-Type':'application/json',
      },
      body:JSON.stringify({"itemId":itemId}),
    })
    .then((response)=>response.json())
    .then((data)=>console.log(data));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = productList.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product: productList,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
