import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./layouts/Navbar";
// import Footer from "./layouts/Footer";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import PasswordReset from "./components/PasswordReset";
import PasswordRecovery from "./components/PasswordRecovery";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const selectedItem = cartItems.find((item) => item.id === product.id);
    if (selectedItem) {
      setCartItems(
        cartItems.map((singleItem) =>
          singleItem.id === product.id
            ? { ...selectedItem, quantity: selectedItem + 1 }
            : singleItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  return (
    <>
      <BrowserRouter>
        {/* <Navbar></Navbar> */}
        <Routes>
          <Route
            index
            element={
              <Home cartItems={cartItems} handleAddToCart={handleAddToCart} />
            }
          />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/PasswordReset" element={<PasswordReset />} />
          <Route path="/PasswordRecovery" element={<PasswordRecovery />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
          <Route path="/Cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </>
  );
}

export default App;
