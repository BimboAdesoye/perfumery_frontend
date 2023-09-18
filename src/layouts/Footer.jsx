import "../styles/Footer.css";
import InstaIcon from "../assets/PerfumeryInstagramIcon.svg";
import FacebookIcon from "../assets/PerfumeryFacebookIcon.svg";
import MailIcon from "../assets/perfumeryMailIcon.svg";
import logo from "../assets/perfumeryfooterlogo.svg";
import promo from "../assets/PerfumeryFooterPromoImg.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer pt-5">
      <div className="accent-container d-flex footer-content text-white">
        <div className="div1 d-flex flex-column gap-4">
          <img
            className="img-fluid w-75 d-none d-md-block d-lg-block"
            src={logo}
            alt=""
          />
          <p className="w-75 d-none d-md-block d-lg-block">
            Lörem ipsum mas min. Dol teled fast påskapet bes dologi gidev.
            Plaling povis för att övavis om yhyde, anas. Du kan vara drabbad.
          </p>
          <div className="socials d-flex gap-3">
            <img src={MailIcon} alt="" />
            <img src={FacebookIcon} alt="" />
            <img src={InstaIcon} alt="" />
          </div>
        </div>
        <div className="div2 d-flex flex-column justify-content-between d-none d-md-block d-lg-block">
          <h3 className="mb-4">Categories</h3>
          <ul className="d-flex flex-column gap-2">
            <li>
              <Link to={"/Male"} className="text-decoration-none text-white">
                Male Fragrances
              </Link>
            </li>
            <li>
              <Link to={"/Female"} className="text-decoration-none text-white">
                Female Fragrances
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-white">
                Designer Perfumes
              </Link>
            </li>
            <li>
              <Link to={"/Combo"} className="text-decoration-none text-white">
                Combo Packages
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-white">
                Reeds/Diffusers
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-white">
                Scented Candles
              </Link>
            </li>
          </ul>
        </div>
        <div className="div3 d-flex flex-column d-none d-md-block d-lg-block">
          <h3 className="mb-4">Quick Links</h3>
          <ul className="d-flex flex-column gap-2">
            <li>
              <span>About</span>
            </li>
            <li>
              <span>Shop</span>
            </li>
            <li>
              <span>Contacts</span>
            </li>
          </ul>
        </div>
        <div className="div4 d-none d-md-block d-lg-block">
          <h3 className="mb-4">Promotions</h3>
          <img className="img-fluid w-100" src={promo} alt="" />
        </div>
      </div>
      <div className="copyright text-center py-3">
        Copyright &copy;<span> Fame Perfumery</span>. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
