// import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { useState } from "react";
import "../styles/Cart.css";
import EmptyCartIcon from "../assets/PerfumeryEmptyCartIcon.svg";
import truck from "../assets/perfumerycarttruckIcon.svg";
import gift from "../assets/PerfumerycartgiftIcon.svg";
import arrowdown from "../assets/PerfumeryCartArrowdownIcon.svg";
import nairaIcon from "../assets/perfumerynairaIcon.svg";

const Cart = ({ cartItems }) => {
  return (
    <div className="basket">
      <Navbar />
      <main className="container">
        <div className="welcome my-4">
          <h1 className="welcome-heading">My Cart</h1>
          <p className="welcome-sub-heading">Welcome back!</p>
        </div>
        <div>
          {cartItems.length === 0 && (
            <div className="empty-cart d-flex flex-column align-items-center justify-content-between my-5 gap-3 border">
              <img src={EmptyCartIcon} alt="" />
              <p className="fw-bold">Your cart is empty!</p>
              <p className="text-center">
                Browse our categories and discover our best deals
              </p>
              <button className="emptycartbtn shadow-sm">start shopping</button>
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="d-flex justify-content-between">
            <div className="cart">
              <div className="cart-items w-100">
                <div className="d-flex justify-content-between align-items-center cart-items-heading p-3">
                  <p className="mb-0">Product</p>
                  <p className="mb-0">Quantity</p>
                  <p className="mb-0">Total</p>
                </div>
                <div>
                  {cartItems.map((cartItem) => {
                    const { image, title, price, _id } = cartItem;
                    return (
                      <div
                        key={_id}
                        className="cart-item d-flex align-items-center justify-content-between p-3"
                      >
                        <div className="d-flex align-items-center">
                          <img className="cart-img" src={image} alt="" />
                          <p className="cart-img-title">{title}</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between cart-math">
                          <p className="mb-0">-</p>
                          <p className="mb-0 cart-math-number">1</p>
                          <p className="mb-0">+</p>
                        </div>
                        <p className="cart-item-price">{price}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="my-3 cart-gift w-100 d-flex justify-content-between align-items-center p-4">
                <div className="d-flex gap-3 align-items-center">
                  <img src={gift} alt="" />
                  <p className="mb-0">
                    <span className="span">Do you want a gift wrap? </span>
                    <span>
                      Only <img src={nairaIcon} alt="" />
                      1,000
                    </span>
                  </p>
                </div>
                <button>Add a gift wrap</button>
              </div>
              <div className="my-3 d-flex w-100 justify-content-between align-items-center p-4 cart-shipping">
                <div className="d-flex gap-3 align-items-center">
                  <img src={truck} alt="" />
                  <span>Estimate Shipping</span>
                </div>
                <img src={arrowdown} alt="" />
              </div>
            </div>
            <div className="checkout d-flex flex-column gap-4">
              <div className="one d-flex justify-content-between align-items-center">
                <h6 className="mb-0 total">Total</h6>
                <span className="d-flex align-items-center total-price">
                  <img className="naira-checkout" src={nairaIcon} alt="" />
                  <p className="mb-0">24,000</p>
                </span>
              </div>
              <div className="two d-flex justify-content-between align-items-center pb-3">
                <p className="mb-0 orders">Orders Instructions</p>
                <img src={arrowdown} alt="" />
              </div>
              <div className="text-center">
                <p className="vat">VAT and shipping calculated at checkout</p>
                <button>Check Out</button>
              </div>
            </div>
          </div>
        )}

        <div className="our-guarantees my-5">
          <h3 className="our-guarantees-heading">Our guarantees</h3>
          <div className="guarantees d-flex">
            <div className="one py-5 px-4  text-center">
              <h6>Premium Quality</h6>
              <p>
                Lörem ipsum misadeiliga. Laning homoheten i kontralanat
                tempotos.
              </p>
            </div>
            <div className="two py-5 px-4 text-center">
              <h6>Excellent Customer Support</h6>
              <p>
                Lörem ipsum misadeiliga. Laning homoheten i kontralanat
                tempotos.
              </p>
            </div>
            <div className="three py-5 px-4 text-center">
              <h6>Excellent Customer Support</h6>
              <p>
                Lörem ipsum misadeiliga. Laning homoheten i kontralanat
                tempotos.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
