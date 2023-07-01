import UseFetch from "../Hooks/UseFetch";
import fiveStar from "../assets/Perfumery5starIcon.svg";
import cart from "../assets/PerfumeryCart.svg";
import "../styles/MalePerfumes.css";
import heartIcon from "../assets/PerfumeryHeartIcon.svg";
import arrowIcon from "../assets/PerfumeryArrowIcon.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../Hooks/CartContext";

const FemalePerfumes = () => {
  const { handleAddToCart } = useContext(CartContext);
  const { data } = UseFetch(
    "https://perfumery.onrender.com/perfumes/category/Female"
  );

  return (
    <div className="container my-5">
      <div className="bg-white">
        <div className="male-header p-3 d-flex justify-content-between">
          <h5 className="male-heading">Female</h5>
          <div className="d-flex gap-3 align-items-center view-more">
            <p className="mb-0">View more</p>
            <img className="arrow-icon" src={arrowIcon} alt="" />
          </div>
        </div>
        <div className="my-4 py-3 px-4 male-section">
          {data.map((datum) => {
            const { image, title, label, price, _id } = datum;
            return (
              <div
                key={_id}
                className=" border rounded p-2 product m-auto shadow-sm"
              >
                <div className="img">
                  <Link to={`/SingleProduct/${_id}`}>
                    <img className="img-fluid product-img" src={image} alt="" />
                  </Link>
                  <img className="heart-icon" src={heartIcon} alt="" />
                </div>
                <div className="body d-flex flex-column gap-3 p-2">
                  <div className="mt-3">
                    <p className="product-title mb-0">{title}</p>
                    <p className="product-label mb-0">{label}</p>
                  </div>
                  <p className="product-price mb-0">{price}</p>
                  <span className="d-flex gap-5 align-items-center">
                    <img src={fiveStar} alt="" />
                    <p className="mb-0 product-review">50 reviews</p>
                  </span>
                  <span className="d-none d-md-block d-lg-block d-md-flex d-lg-flex justify-content-between align-items-center mt-1">
                    <button
                      onClick={() => {
                        handleAddToCart(datum);
                      }}
                      className="buy-btn"
                    >
                      Buy Now
                    </button>
                    <img src={cart} alt="" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FemalePerfumes;
