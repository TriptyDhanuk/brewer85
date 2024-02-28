import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCart } from "../../features/cart/cartSlice";
import {
  selectCartItems,
  clearCart,
  removeFromCart,
} from "../../features/cart/cartSlice";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const VAT_RATE = 0.05;
  const [invalidCoupon, setInvalidCoupon] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const subTotal = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setSubtotal(subTotal);
  }, [cartItems]);

  useEffect(() => {
    const VAT = subtotal * VAT_RATE;
    const total = subtotal + VAT - discount;
  }, [subtotal, discount]);

  const handlePlusClick = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    dispatch(updateCart(updatedCartItems));
  };

  const handleMinusClick = (itemId) => {
    const updatedCartItems = cartItems
      .map((item) => {
        if (item.id === itemId) {
          if (item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null);

    dispatch(updateCart(updatedCartItems));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
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

  const handlePlaceOrder = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <nav className="navbar headNav">
        <div className="logo" onClick={handleGoBack}>
          <box-icon name="arrow-back"></box-icon>
          <h4 className="">Checkout</h4>
        </div>
        <box-icon type="solid" name="filter-alt"></box-icon>
      </nav>

      <div className="items-container">
        {cartItems.map((item) => (
          <div key={item.id} className="item">
            <div className="item-details">
              <div className="product-details">
                <h3>{item.name}</h3>
                <p style={{ color: "grey", font: "bold" }}>
                  yahoo comidia
                </p>{" "}
                <div className="price-tag">
                  <p style={{ fontSize: "0.8rem", margin: "0" }}>
                    <strong>
                      AED{" "}
                      <span style={{ fontSize: "1.2rem" }}>{item.price}</span>
                    </strong>
                  </p>

                  <p
                    style={{
                      color: "red",
                      margin: "0 8px",
                      padding: "0 4px",
                      fontWeight: "bold",
                      fontSize: "1em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.discount}
                  </p>
                </div>
                <div className="icons" style={{ display: "flex" }}>
                  <span onClick={() => handleSaveForLater(item.id)}>
                    <box-icon type="solid" name="bookmark-star"></box-icon>
                  </span>
                  <span onClick={() => handleRemoveItem(item.id)}>
                    <FontAwesomeIcon icon={faTrash} style={{ Color: "gray" }} />
                  </span>
                </div>
              </div>
            </div>
            <div className="item-actions">
              <div>
                <label htmlFor={`qty-${item.id}`}>
                  <b> Qty:</b>
                </label>
                <div className="" style={{ display: "flex" }}>
                  <button
                    style={{
                      border: "1px solid green",
                      color: "black",
                      backgroundColor: "white",
                      width: "50px",
                      height: "40px",
                    }}
                    onClick={() => handleMinusClick(item.id)}
                  >
                    -
                  </button>

                  <input
                    type="number"
                    style={{ width: "50px", height: "40px" }}
                    id={`qty-${item.id}`}
                    value={item.quantity}
                    readOnly
                    min="1"
                    max="10"
                  />
                  <button
                    style={{
                      border: "1px solid green",
                      color: "black",
                      backgroundColor: "white",
                      width: "50px",
                      height: "40px",
                    }}
                    onClick={() => handlePlusClick(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ height: "134px", width: "141px" }}
                />
              </div>
            </div>
          </div>
        ))}

        {/* Coupon Section */}
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

        {/* Subtotal */}
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

        {/* VAT */}
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

        {/* Total Price */}
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
            onClick={handlePlaceOrder}
          >
            PLACE ORDER
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckOut;
