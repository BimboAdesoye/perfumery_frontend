import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const cartItemsFromLocalStorage =
  JSON.parse(localStorage.getItem("cartItems")) || [];

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    const selectedItem = cartItems.find((item) => item.id === product.id);
    if (selectedItem) {
      setCartItems(
        cartItems.map((singleItem) => {
          return singleItem.id === product.id
            ? { ...selectedItem, quantity: selectedItem.quantity + 1 }
            : singleItem;
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleIncrease = (product) => {
    const selectedItem = cartItems.find((item) => item.id === product.id);
    if (selectedItem) {
      setCartItems(
        cartItems.map((singleItem) =>
          singleItem.id === product.id
            ? { ...selectedItem, quantity: selectedItem.quantity + 1 }
            : singleItem
        )
      );
    }
  };

  const handleDecrease = (product) => {
    const selectedItem = cartItems.find((item) => item.id === product.id);
    if (selectedItem.quantity === 1) {
      setCartItems(
        cartItems.filter((oneItem) => oneItem.id !== selectedItem.id)
      );
    } else {
      setCartItems(
        cartItems.map((singleItem) =>
          singleItem.id === product.id
            ? { ...selectedItem, quantity: selectedItem.quantity - 1 }
            : singleItem
        )
      );
    }
  };

  const handleRemoveItem = (product) => {
    setCartItems(cartItems.filter((oneItem) => oneItem.id !== product.id));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  // let total = 0;
  // const totalPrice = cartItems.forEach((item) => {
  //   return total += item.price * item.quantity;
  // });

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
