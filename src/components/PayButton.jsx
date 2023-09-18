import axios from "axios";
import { useSelector } from "react-redux";
import CartContext from "../Hooks/CartContext";
import { useContext } from "react";

const PayButton = () => {
  const { cartItems } = useContext(CartContext);

  const user = useSelector((state) => state.auth);
  let url = "http://localhost:2020";

  const handleCheckOut = () => {
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        cartItems,
        userId: user._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <button onClick={() => handleCheckOut()}>CheckOut</button>
    </>
  );
};

export default PayButton;
