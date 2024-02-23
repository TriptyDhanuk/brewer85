import React, { useState } from "react";
import "./ProductDetails.css"; // Import your CSS file for styling
import image1 from "../../images/image1.png"; // Import your image
const ProductDetails = ({ discount }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const price = 30; // Static price declaration
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
  const handleGoBack = () => {
    window.history.back(); // Go back to the previous page
  };
  const name = "Chicken Biryani"; // Static product name
  return (
    <div className="product-details-container">
      {/* Product Image as Header */}
      <img src={image1} alt="Product" className="product-details-image" />
      {/* Back Button and Title Overflowing on Image */}
      <div className="product-details-header">
        <nav className="product-details-navbar">
          <div className="product-details-logo" onClick={handleGoBack}>
            <box-icon name="arrow-back"></box-icon>
            <h4 className="product-details-title">Product Details</h4>
          </div>
          <box-icon name="cart" style={{ marginRight: "1.8rem" }}></box-icon>
        </nav>
      </div>
      <div className="product-details-content">
        <div className="product-details-image-container">
          <div className="product-details-kcal-circle">
            <div className="product-details-cal-value">25</div>
            <div className="product-details-cal-unit">Cal</div>
          </div>
        </div>
        <div className="product-details-info">
          {/* Static Product Name */}
          <h3 className="product-details-name">Chicken Biryani</h3>
          {/* Price */}
          <p className="product-details-price">
            AED <span>30</span>
          </p>
          <div className="product-details-price-rating-container">
            <div className="product-details-price-tag">
              <p className="product-details-discount">{discount}</p>
            </div>
            <div className="product-details-your-rating">
              <p>4.5 rating</p>
              <div className="product-details-star-rating">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="star">
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
            <div className="product-details-your-rating">
              <p>Your rating</p>
              <div className="product-details-star-rating">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="star">
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="product-details-additional-details">
            <p className="bold-text">Details</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua....
              <span>
                <a href="#" className="show-more-link">
                  Show More
                </a>
              </span>
            </p>
          </div>
          {/* Quantity and Add to Cart */}
          <div className="product-details-quantity-container">
            <div className="product-details-quantity-button">
              <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                Quantity
              </p>
              <button
                className="product-details-quantity-btn minus-btn"
                onClick={handleMinusClick}
              >
                -
              </button>
              <span className="product-details-quantity-input">{quantity}</span>
              <button
                className="product-details-quantity-btn plus-btn"
                onClick={handlePlusClick}
              >
                +
              </button>
            </div>
            <p>
              <span style={{ fontWeight: "bold" }}>Total Price </span>
              <span className="product-details-price">
                AED{" "}
                <span>
                  {(quantity * price) % 1 === 0
                    ? (quantity * price).toFixed(0)
                    : (quantity * price).toFixed(2)}
                </span>
              </span>
            </p>
            <button
              className="product-details-add-to-cart-btn"
              onClick={handleAddClick}
            >
              ADD TO MY ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
