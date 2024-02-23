import React, { useState } from "react";
import "./Checkout.css";

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

const CheckOut = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 30;

  const handlePlusClick = () => {
    setQuantity(quantity + 1);
  };

  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const [items, setItems] = useState([
    {
      image: image1,
      name: "Kashmiri Biryani",
      price: "25",
      discount: "60% off",
    },
    {
      image: image1,
      name: "Hydrabadi Biryani",
      price: "25",
      discount: "60% off",
    },
    {
      image: image1,
      name: "Kolkata Special Biryani",
      price: "25",
      discount: "60% off",
    },
  ]);
  const handleRemoveItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };
  const handleSaveForLater = (itemId) => {
    console.log("Item saved for later:", itemId);
  };
  const handleGoBack = () => {
    console.log("Going back...");
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
        {items.map((item) => (
          <div key={item.id} className="item">
            <div className="item-details">
              <div className="product-details">
                <h3>{item.name}</h3>
                <p style={{ color: "grey", font: "bold" }}>yahoo comidia</p>
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
                <div className="icons">
                  <span onClick={() => handleSaveForLater(item.id)}>
                    Save for Later
                  </span>
                  <span onClick={() => handleRemoveItem(item.id)}>
                    {" "}
                    <i class="bx bx-trash bx-sm"></i> Delete
                  </span>
                </div>
              </div>
            </div>
            <div className="item-actions">
              <div>
                <label htmlFor={`qty-${item.id}`}>Qty:</label>
                <input
                  type="number"
                  id={`qty-${item.id}`}
                  value={item.quantity}
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value);
                    setItems((prevItems) =>
                      prevItems.map((prevItem) => {
                        if (prevItem.id === item.id) {
                          return { ...prevItem, quantity: newQuantity };
                        }
                        return prevItem;
                      })
                    );
                  }}
                  min="1"
                  max="10"
                />
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
      </div>
      <div>
        {" "}
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
            height: "28px",
            marginLeft: "4rem",
          }}
        />
        <button
          style={{
            backgroundColor: "#f7387f",
            height: "48px",
            marginLeft: "10px",
          }}
        >
          Apply Coupon
        </button>
      </div>

      <h5 style={{ marginLeft: "25px" }}>
        <span style={{ fontWeight: "bold", marginLeft: "3rem" }}>
          SUBTOTAL{" "}
        </span>
        <span className="product-details-price" style={{ marginLeft: "15rem" }}>
          AED{" "}
          <span>
            {(quantity * price) % 1 === 0
              ? (quantity * price).toFixed(0)
              : (quantity * price).toFixed(2)}
          </span>
        </span>
      </h5>
      <hr style={{ margin: "20px 0", border: "1px solid #ccc" }} />
      <h5 style={{ marginLeft: "25px" }}>
        <span style={{ fontWeight: "bold", marginLeft: "3rem" }}>
          VAT (5%){" "}
        </span>
        <span className="product-details-price" style={{ marginLeft: "15rem" }}>
          AED{" "}
          <span>
            {(quantity * price) % 1 === 0
              ? (quantity * price).toFixed(0)
              : (quantity * price).toFixed(2)}
          </span>
        </span>
      </h5>
      <hr style={{ margin: "20px 0", border: "1px solid #ccc" }} />
      <h2 style={{ marginLeft: "25px" }}>
        <span style={{ fontWeight: "bold", marginLeft: "3rem" }}>
          Total Price{" "}
        </span>
        <span className="product-details-price" style={{ marginLeft: "15rem" }}>
          AED{" "}
          <span>
            {(quantity * price) % 1 === 0
              ? (quantity * price).toFixed(0)
              : (quantity * price).toFixed(2)}
          </span>
        </span>
      </h2>
      <button
        className="product-details-add-to-cart-btn"
        style={{ width: "53rem", marginLeft: "23rem" }}
      >
        PLACE ORDER
      </button>
    </div>
  );
};

export default CheckOut;
