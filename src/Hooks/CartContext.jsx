import { createContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

const cartItemsFromLocalStorage =
  JSON.parse(localStorage.getItem("cartItems")) || [];

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage);
  const [loggedIn, setLoggedIn] = useState(undefined);

  // Logged In function
  async function getLoggedIn() {
    const loggedInRes = await axios.get("http://localhost:2020/auth/loggedIn");
    setLoggedIn(loggedInRes.data);
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    getLoggedIn();
  }, [cartItems]);

  // Add to Cart function
  const handleAddToCart = (product) => {
    const selectedItem = cartItems.find((item) => item._id === product._id);
    if (selectedItem) {
      setCartItems(
        cartItems.map((singleItem) => {
          return singleItem._id === product._id
            ? { ...selectedItem, quantity: selectedItem.quantity + 1 }
            : singleItem;
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    console.log(cartItems);
  };

  // Increase item function
  const handleIncrease = (product) => {
    const selectedItem = cartItems.find((item) => item._id === product._id);
    if (selectedItem) {
      setCartItems(
        cartItems.map((singleItem) =>
          singleItem._id === product._id
            ? { ...selectedItem, quantity: selectedItem.quantity + 1 }
            : singleItem
        )
      );
    }
  };

  // Decrease item function
  const handleDecrease = (product) => {
    const selectedItem = cartItems.find((item) => item._id === product._id);
    if (selectedItem.quantity === 1) {
      setCartItems(
        cartItems.filter((oneItem) => oneItem._id !== selectedItem._id)
      );
    } else {
      setCartItems(
        cartItems.map((singleItem) =>
          singleItem._id === product._id
            ? { ...selectedItem, quantity: selectedItem.quantity - 1 }
            : singleItem
        )
      );
    }
  };


  // Remove Item function
  const handleRemoveItem = (product) => {
    setCartItems(cartItems.filter((oneItem) => oneItem._id !== product._id));
  };


  // Total price function 
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        handleAddToCart,
        handleIncrease,
        handleDecrease,
        handleRemoveItem,
        totalPrice,
        loggedIn,
        getLoggedIn,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
