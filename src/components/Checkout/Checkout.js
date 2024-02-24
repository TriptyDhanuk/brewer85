import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import burger from "../../images/burger.png";
import shakes from "../../images/shakes.png";
import searchIcon from "../../images/searchIcon.png";
import ProductCard from "../ProductCard/ProductCard";
import noodles from "../../images/noodles.png";
import drinks from "../../images/drinks.png";
import { selectCartItems } from "../../features/cart/cartSlice";

import { useSelector } from "react-redux";
const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);

  const [quantity, setQuantity] = useState(1);
  const price = 30;
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const VAT_RATE = 0.05;
  const [invalidCoupon, setInvalidCoupon] = useState(false);

  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  console.log("cartItems check", cartItems);

  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     image: image1,
  //     name: "Kashmiri Biryani",
  //     price: 25,
  //     discount: "60% off",
  //     quantity: 1,
  //   },
  //   {
  //     id: 2,
  //     image: image1,
  //     name: "Hydrabadi Biryani",
  //     price: 25,
  //     discount: "60% off",
  //     quantity: 1,
  //   },
  //   {
  //     id: 3,
  //     image: image1,
  //     name: "Kolkata Special Biryani",
  //     price: 25,
  //     discount: "60% off",
  //     quantity: 1,
  //   },
  // ]);

  useEffect(() => {
    const subTotal = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setSubtotal(subTotal);
  }, [cartItems]);

  console.log("All Cart Items:", cartItems);

  useEffect(() => {
    const VAT = subtotal * VAT_RATE;

    const total = subtotal + VAT - discount;
  }, [subtotal, discount]);

  const handlePlusClick = () => {
    setQuantity(quantity + 1);
  };

  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleRemoveItem = (itemId) => {
    // setItems(cartItems.filter((item) => item.id !== itemId));
  };
  const handleSaveForLater = (itemId) => {
    console.log("Item saved for later:", itemId);
  };
  const handleGoBack = () => {
    window.history.back();
  };

  const handleApplyCoupon = () => {
    if (!couponApplied && couponCode === "SAVE10") {
      setDiscount(10);
      setAppliedCoupon(couponCode);
      setCouponApplied(true);
      setInvalidCoupon(false);
    } else {
      setInvalidCoupon(true);
    }
  };

  const handleRemoveCoupon = () => {
    setDiscount(0);
    setAppliedCoupon("");
    setCouponApplied(false);
    setInvalidCoupon(false);
  };
  return (
    <div>
      <nav className="navbar headNav">
        <div className="logo" onClick={handleGoBack}>
          {" "}
          <box-icon name="arrow-back"></box-icon>
          <h4 className="">Checkout</h4>
        </div>
        <box-icon type="solid" name="filter-alt"></box-icon>
      </nav>

      <div className="items-container">
        {cartItems.map((item) => (
          <div key={item.id}>
            {/* Render individual cart item details */}
            <p>{item.name}</p>
            {/* Add more details as needed */}
          </div>
        ))}

        <div>
          <input
            type="text"
            id="textbox"
            name="textbox"
            placeholder="Type something..."
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              width: "20%",
              height: "48px",
              marginLeft: "4rem",
            }}
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            disabled={couponApplied}
          />
          <button
            style={{
              backgroundColor: "#f7387f",
              height: "48px",
              marginLeft: "10px",
              marginBottom: "20px",
            }}
            onClick={handleApplyCoupon}
            disabled={couponApplied}
          >
            Apply Coupon
          </button>
          {couponApplied && (
            <button
              style={{
                backgroundColor: "#ccc",
                height: "48px",
                marginLeft: "10px",
                marginBottom: "20px",
              }}
              onClick={handleRemoveCoupon}
            >
              Remove Coupon
            </button>
          )}
          {invalidCoupon && (
            <p style={{ color: "red", marginLeft: "10px" }}>Invalid Coupon</p>
          )}
          {couponApplied && (
            <p style={{ marginLeft: "10px" }}>
              {discount
                ? `Discount Applied: AED ${discount.toFixed(2)}`
                : "Invalid Coupon Applied"}
            </p>
          )}
        </div>

        <h5 style={{ marginLeft: "25px" }}>
          <span style={{ fontWeight: "bold", marginLeft: "3rem" }}>
            SUBTOTAL{" "}
          </span>
          <span
            className="product-details-price"
            style={{ marginLeft: "15rem" }}
          >
            AED{" "}
            <span style={{ fontSize: "1.2rem" }}>{subtotal.toFixed(2)}</span>
          </span>
        </h5>
        <hr style={{ margin: "20px 0", borderTop: "1px solid #ccc" }} />
        <h5 style={{ marginLeft: "25px" }}>
          <span style={{ fontWeight: "bold", marginLeft: "3rem" }}>
            VAT (5%){" "}
          </span>
          <span
            className="product-details-price"
            style={{ marginLeft: "16rem" }}
          >
            AED{" "}
            <span style={{ fontSize: "1.2rem" }}>
              {(subtotal * VAT_RATE).toFixed(2)}
            </span>
          </span>
        </h5>
        <hr style={{ margin: "20px 0", borderTop: "1px solid #ccc" }} />
        <h3 style={{ marginLeft: "25px" }}>
          <span style={{}}>
            Total Price:{" "}
            {couponApplied ? (
              <span
                style={{
                  textDecoration: "line-through",
                  color: "red",
                  marginRight: "1rem",
                  fontSize: "0.8rem",
                }}
              >
                AED {(subtotal + subtotal * VAT_RATE).toFixed(2)}
              </span>
            ) : (
              <span>AED {(subtotal + subtotal * VAT_RATE).toFixed(2)}</span>
            )}
          </span>
          {couponApplied && (
            <span style={{ fontWeight: "bold", color: "red" }}>
              AED {(subtotal + subtotal * VAT_RATE - discount).toFixed(2)}
            </span>
          )}
        </h3>

        <Link to="/thankyou">
          <button
            className="product-details-add-to-cart-btn"
            style={{ width: "53rem", marginLeft: "5rem" }}
          >
            PLACE ORDER
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckOut;
