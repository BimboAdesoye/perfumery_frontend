import Logo from "../assets/PerfumeryLogo.svg";
import "../styles/Navbar.css";
import searchIcon from "../assets/material-symbols_search-rounded.svg";
import cartIcon from "../assets/PerfumeryCartIcon.svg";
import profileIcon from "../assets/PerfumeryProfileIcon.svg";
import notifIcon from "../assets/PerfumeryNotificationIcon.svg";
import dropdownIcon from "../assets/expand_less_FILL0_wght400_GRAD0_opsz48.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
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
    <div className="bg-white">
      <nav className="nav container d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="search-panel d-lg-flex d-md-flex d-none d-md-block d-lg-block  gap-2">
          <div className="w-100 d-flex search-div">
            <img className="searchIcon" src={searchIcon} alt="" />
            <input
              type="text"
              className="w-100 px-5"
              placeholder="Search products, brands and categories"
            />
          </div>
          <button className="search-btn text-white">Search</button>
        </div>
        <div className="sign-btns d-flex gap-4">
          <img src={cartIcon} alt="" />
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
                <Link to="/SignUp" className="text-decoration-none text-black">
                  Sign Up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="container w-100 d-flex d-md-none d-lg-none search-div mt-3">
        <img className="searchIcon" src={searchIcon} alt="" />
        <input
          type="text"
          className="w-100 px-5"
          placeholder="Search products, brands and categories"
        />
      </div>
    </div>
  );
};

export default Navbar;
