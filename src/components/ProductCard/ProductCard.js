import React from "react";
import "./ProductCard.css"; // Import CSS for styling

const ProductCard = ({ image, name, price, discount }) => {
  return (
    <div style={{ position: "relative" }}>
      <div className="product-card">
        <div className="best-seller-ribbon">Best Seller</div>
        <img src={image} alt={name} className="product-image" />
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
            <button
              style={{
                border: "1px solid green",
                color: "green",
                backgroundColor: "white",
                width: "100px",
                height: "40px",
              }}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
