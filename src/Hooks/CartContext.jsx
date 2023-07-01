import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const cartItemsFromLocalStorage =
  JSON.parse(localStorage.getItem("cartItems")) || [];

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    console.log('before adding:', cartItems)
    const selectedItem = cartItems.find((item) => item.id === product.id);
    if (selectedItem) {
      setCartItems(
        cartItems.map((singleItem) =>
          singleItem.id === product.id
            ? { ...selectedItem, quantity: selectedItem.quantity + 1 }
            : singleItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    console.log('after adding:', cartItems)
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

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

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
