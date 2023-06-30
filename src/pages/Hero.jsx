import "../styles/Hero.css";
import truck from "../assets/PerfumeryHeroTruck.svg";
import deliverySpeed from "../assets/PerfumeryHeroSpeed.svg";
import payment from "../assets/PerfumeryHeroPay.svg";
import priceIcon from "../assets/PerfumeryHeroPrice.svg";

const Hero = () => {
  return (
    <div className="container">
      <div className="d-none d-lg-block my-5 d-lg-flex justify-content-between">
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
