import UseFetch from "../Hooks/UseFetch";
import star from "../assets/perfumery Star 1.svg";
import star2 from "../assets/perfumery Star 5.svg";
import cart from "../assets/PerfumeryCart.svg";
import "../styles/MalePerfumes.css";
import heartIcon from "../assets/PerfumeryHeartIcon.svg";
import nairaIcon from "../assets/perfumerynairaIcon.svg";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartContext from "../Hooks/CartContext";
import ClipLoader from "react-spinners/ClipLoader";
import { useContext } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import "../styles/AllPerfumes.css";

const Combo = () => {
  const { handleAddToCart } = useContext(CartContext);

  const { data, loading, error } = UseFetch(
    "https://perfumery.onrender.com/perfumes/category/Combo"
  );

  const notify = () => {
    toast.success("An item has been added !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <div>
      <Navbar />
      <div className="accent-container p-0">
        <div className="bg-white py-2 px-3">
          <div className="d-flex gap-2 mt-3">
            <h3 className="text-uppercase fw-bold">Combo Packages</h3>
            {loading && <ClipLoader color={"red"} size={50} />}
            {error && <h2>{error.message}</h2>}
          </div>
          <div className="my-4 py-3 all-products">
            {data.map((datum) => {
              const { image, title, label, price, _id } = datum;
              return (
                <div
                  key={_id}
                  className=" border rounded p-2 product m-auto shadow-sm"
                >
                  <div className="img">
                    <Link to={`/SingleProduct/${_id}`}>
                      <img
                        className="img-fluid product-img"
                        src={image}
                        alt=""
                      />
                    </Link>
                    <img className="heart-icon" src={heartIcon} alt="" />
                  </div>
                  <div className="body d-flex flex-column gap-3 px-2">
                    <div className="">
                      <p className="product-title mb-0">{title}</p>
                      <p className="product-label mb-0">{label}</p>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <img
                        className="product-price-icon"
                        src={nairaIcon}
                        alt=""
                      />
                      <p className="product-price mb-0">{price}</p>
                    </div>
                    <span className="d-flex justify-content-between align-items-center">
                      <div className="d-flex five-stars">
                        <img className="five-star" src={star} alt="" />
                        <img className="five-star" src={star} alt="" />
                        <img className="five-star" src={star} alt="" />
                        <img className="five-star" src={star} alt="" />
                        <img className="five-star" src={star2} alt="" />
                      </div>
                      <p className="mb-0 product-review">50 reviews</p>
                    </span>
                    <span className="d-none d-md-block d-lg-block d-md-flex d-lg-flex justify-content-between align-items-center mt-1">
                      <button className="buy-btn">Buy Now</button>
                      <div
                        onClick={() => {
                          handleAddToCart(datum);
                          notify();
                        }}
                      >
                        <img className="addToCartIcon" src={cart} alt="" />
                      </div>
                    </span>
                  </div>
                  <ToastContainer />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Combo;
