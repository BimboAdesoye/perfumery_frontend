import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./layouts/Navbar";
// import Footer from "./layouts/Footer";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import PasswordReset from "./components/PasswordReset";
import PasswordRecovery from "./components/PasswordRecovery";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar></Navbar> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/PasswordReset" element={<PasswordReset />} />
          <Route path="/PasswordRecovery" element={<PasswordRecovery />} />
        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </>
  );
}

export default App;
