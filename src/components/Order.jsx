import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../Hooks/CartContext";
import NavbarAccent from "../layouts/NavbarAccent";

const Order = () => {
  const { loggedIn } = useContext(CartContext);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const PaymentOptions = ["cash", "transfer"];
  const getToken = () => {
    const token = localStorage.getItem("token");
    return token;
  };

  useEffect(() => {
    getToken();
  }, []);
  const navigate = useNavigate();
  // console.log(getToken());
  async function handleOrderSubmit(e) {
    e.preventDefault();
    const orderData = {
      firstname,
      lastname,
      mobile,
      address,
      paymentMode: payment,
    };
    // console.log(1234);
    try {
      let { data } = await axios.post(
        "http://localhost:7878/order/create",
        orderData,
        {
          headers: {
            Authorization: getToken(),
          },
        }
      );
      //  console.log(res);
      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("logged in");
        // navigate away
        navigate("/SignIn");
      }
    } catch (error) {
      if (error) {
        alert(error.response.data.errMessage);
        return;
      }
      console.log(error);
    }
  }

  return (
    <div className="container">
      {loggedIn ? (
        <div>
          <NavbarAccent />
          <div className="d-flex justify-content-center align-items-center parent">
            <div className="sign-In my-4">
              <div className="text-center pb-1 sign-in-heading">
                <h1 className="mb-4 sign-in-header">Place Your Order</h1>
                <p className="sign-in-sub-heading">
                  Add address and fulfill payments to complete your purchase
                </p>
              </div>
              <form
                action=""
                className="d-flex flex-column gap-4"
                onSubmit={handleOrderSubmit}
              >
                <div className="d-flex flex-column gap-1">
                  <label htmlFor="firstname">Firstname</label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="Placeholder"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-column gap-1">
                  <label htmlFor="lastname">Lastname</label>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Placeholder"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-column gap-1">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    type="number"
                    id="mobile"
                    placeholder="Placeholder"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-column gap-1">
                  <label htmlFor="address">Address</label>
                  <input
                    type="number"
                    id="address"
                    placeholder="Placeholder"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-column gap-1">
                  <label htmlFor="">Payment mode</label>
                  <select
                    name=""
                    id=""
                    onChange={(e) => setPayment(e.target.value)}
                  >
                    {PaymentOptions.map((singleOption) => {
                      return (
                        <option
                          key={singleOption}
                          value={singleOption}
                          className="form-select py-3"
                        >
                          {singleOption}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <button type="submit" className="sign-in-btn mt-5">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        alert("unauthorized")
      )}
    </div>
  );
};

export default Order;
