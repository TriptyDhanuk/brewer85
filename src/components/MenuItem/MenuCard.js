import React, { useState } from "react";
import "../ProductCard/ProductCard.css";
import "boxicons";

const MenuCard = ({ image, name, price, discount }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddClick = () => {
    setIsAdded(true);
  };

  const handlePlusClick = () => {
    setQuantity(quantity + 1);
  };

  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleImgClick = () => {
    window.location.href = "/details";
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="product-card">
        <button
          style={{
            color: "transparent",
            backgroundColor: "transparent",
            position: "absolute",
            right: "15px",
          }}
        >
          <box-icon name="heart"></box-icon>
        </button>
        {/* <div className="best-seller-ribbon">Best Seller</div> */}

        <img
          src={image}
          alt={name}
          className="product-image"
          onClick={handleImgClick}
        />
        <div className="product-details">
          <h3>{name}</h3>
          <p style={{ color: "grey", font: "bold" }}>yahoo comidia</p>
          <div className="price-tag">
            <p style={{ fontSize: "0.8rem", margin: "0" }}>
              <strong>
                AED <span style={{ fontSize: "1.2rem" }}>{price}</span>
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
              {discount}
            </p>
            {isAdded ? (
              <div className="quantity-button">
                <button
                  style={{
                    border: "1px solid green",
                    color: "white",
                    backgroundColor: "#f35353",
                    width: "100px",
                    height: "40px",
                  }}
                  onClick={handleMinusClick}
                >
                  -
                </button>
                <input
                  style={{ width: "30px" }}
                  type="text"
                  value={quantity}
                  readOnly
                />
                <button
                  style={{
                    border: "1px solid green",
                    color: "white",

                    backgroundColor: "#7ad17a",
                    width: "100px",
                    height: "40px",
                  }}
                  onClick={handlePlusClick}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                style={{
                  border: "1px solid green",
                  color: "green",
                  backgroundColor: "white",
                  width: "100px",
                  height: "40px",
                }}
                onClick={handleAddClick}
              >
                ADD
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
