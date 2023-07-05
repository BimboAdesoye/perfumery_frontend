import Logo from "../assets/PerfumeryLogo.svg";
import "../styles/Navbar.css";
import cartIcon from "../assets/PerfumeryCartIcon.svg";
import profileIcon from "../assets/PerfumeryProfileIcon.svg";
import notifIcon from "../assets/PerfumeryNotificationIcon.svg";
import dropdownIcon from "../assets/expand_less_FILL0_wght400_GRAD0_opsz48.svg";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../Hooks/CartContext";
import SearchBar from "../components/SearchBar";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [dropped, setDropped] = useState(false);
  const navigate = useNavigate();

  const handleDrop = () => {
    setDropped(!dropped);
  };

  function signin() {
    navigate("./SignIn");
  }

  const genericClass = "dropdown";

  return (
    <div className="bg-white sticky-top">
      <nav className="nav container d-flex justify-content-between align-items-center">
        <Link to="/">
          <img className="navbar-logo" src={Logo} alt="" />
        </Link>
        <SearchBar />
        <div className="sign-btns d-flex gap-4">
          <Link to="/Cart" className="text-decoration-none cart-link">
            <img src={cartIcon} alt="" />
            {cartItems.length >= 1 && (
              <span className="cart-length"> {cartItems.length}</span>
            )}
          </Link>
          <img src={notifIcon} alt="" />
          <div className={`${genericClass} ${dropped ? "rotated" : null}`}>
            <div onClick={handleDrop} className="drop">
              <img src={profileIcon} alt="" />
              <img className="dropdownIcon" src={dropdownIcon} alt="" />
            </div>
            <div className="sign-btns dropwdown-content">
              <button className="sign-in" onClick={signin}>
                <Link to="/SignIn" className="text-decoration-none text-black">
                  Sign In
                </Link>
              </button>
              <button className="sign-up mt-3">
                <Link to="/SignUp" className="text-decoration-none text-black sign-up-btn">
                  Sign Up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
