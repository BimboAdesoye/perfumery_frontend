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
import Carousel from "./components/Carousel2";
import Order from "./components/Order";
import AllPerfumes from "./categories/AllPerfumes";
import Male from "./categories/Male";
import Female from "./categories/Female";
import Combo from "./categories/Combo";
import CheckoutSuccess from "./components/CheckoutSuccess";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar></Navbar> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Carousel" element={<Carousel />}></Route>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/PasswordReset" element={<PasswordReset />} />
          <Route path="/PasswordRecovery" element={<PasswordRecovery />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/AllPerfumes" element={<AllPerfumes />} />
          <Route path="/Male" element={<Male />} />
          <Route path="/Female" element={<Female />} />
          <Route path="/Combo" element={<Combo />} />
          <Route path="/CheckoutSuccess" element={<CheckoutSuccess />} />
        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </>
  );
}

export default App;
