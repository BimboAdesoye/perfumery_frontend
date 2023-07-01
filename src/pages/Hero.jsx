import "../styles/Hero.css";
import truck from "../assets/PerfumeryHeroTruck.svg";
import deliverySpeed from "../assets/PerfumeryHeroSpeed.svg";
import payment from "../assets/PerfumeryHeroPay.svg";
import priceIcon from "../assets/PerfumeryHeroPrice.svg";
import searchIcon from "../assets/material-symbols_search-rounded.svg";
import { Link } from "react-router-dom";
import image1 from "../assets/perfumeryBannerImg1.svg";
import image2 from "../assets/perfumeryBannerImg2.svg";
import image3 from "../assets/PerfumeryBannerImg3.svg";
import image4 from "../assets/PerfumeryBannerImg4.svg";

const Hero = () => {
  return (
    <div className="hero pt-2 pb-3">
      <div className="mycontainer hero-banner row h-50 m-auto ">
        <div className=" col-lg-2 bg-white content p-0 rounded d-none d-md-block d-lg-block">
          <h3 className="text-center banner-heading">Categories</h3>
          <ul className="text-center p-0 d-flex flex-column banner-list">
            <li className="list-unstyled">
              <Link className="fw-bold text-decoration-none">All</Link>
            </li>
            <li className="list-unstyled">
              <Link className="text-decoration-none ">Male</Link>
            </li>
            <li className="list-unstyled">
              <Link className="text-decoration-none ">Female</Link>
            </li>
            <li className="list-unstyled">
              <Link className="text-decoration-none ">Combo Packages</Link>
            </li>
            <li className="list-unstyled">
              <Link className="text-decoration-none ">Designers Perfume</Link>
            </li>
            <li className="list-unstyled">
              <Link className="text-decoration-none ">Scented Candles</Link>
            </li>
            <li className="list-unstyled">
              <Link className="text-decoration-none ">Reeds & Diffusers</Link>
            </li>
            <li className="list-unstyled">
              <Link className="text-decoration-none ">Sprays</Link>
            </li>
          </ul>
        </div>
        <div className="rounded col-lg-7 bg-white content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            autem doloremque similique cum minima ipsa itaque officia facere
            iusto at debitis, accusantium corporis blanditiis non vel impedit
            dicta molestias ipsum neque harum illo? Asperiores, officiis
            praesentium quis tenetur ratione officia! Doloribus soluta nesciunt
            nobis accusantium quisquam assumenda ducimus illo, nemo quia minima
            dolores totam non ut? Exercitationem in dolores quia ad explicabo
          </p>
        </div>
        <div className="border col-lg-3 content banner-images p-0 d-none d-md-block d-lg-grid">
          <div>
            <img className="img-fluid bg-white" src={image1} alt="" />
          </div>
          <div>
            <img className="img-fluid bg-white" src={image2} alt="" />
          </div>
          <div>
            <img className="img-fluid bg-white" src={image3} alt="" />
          </div>
          <div>
            <img className="img-fluid bg-white" src={image4} alt="" />
          </div>
        </div>
      </div>
      <div className="container w-100 d-flex d-md-none d-lg-none search-div bg-white">
        <img className="searchIcon" src={searchIcon} alt="" />
        <input
          type="text"
          className="w-100 px-5"
          placeholder="Search products, brands and categories"
        />
      </div>
      <div className="container d-none d-lg-block my-5 d-lg-flex justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <img src={truck} alt="" />
          <div className="">
            <p className="font-w-bold">Nationwide Delivery</p>
            <p>Anywhere Anytime</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <img src={deliverySpeed} alt="" />
          <div>
            <p className="font-w-bold">Same Day Delivery</p>
            <p>In Lagos Only</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <img src={payment} alt="" />
          <div>
            <p className="font-w-bold">Pay On Delivery</p>
            <p>In Lagos Only</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <img src={priceIcon} alt="" />
          <div>
            <p className="font-w-bold">Lowest Price</p>
            <p>Best Deals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
