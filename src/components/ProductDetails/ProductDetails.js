import React, { useState } from "react";
import "./ProductDetails.css";
import image1 from "../../images/image1.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartTotalItems } from "../../features/cart/cartSlice";

const ProductDetails = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const totalItems = useSelector(selectCartTotalItems);

  const handleAddToCart = () => {
    setIsAdded(true);
    dispatch(addToCart({ name: "Chicken Biryani", quantity }));
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
  console.log(totalItems);

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
          {/* Cart Icon */}
          <Link to="/checkout" className="cart-icon-container">
            <box-icon name="cart" style={{ marginRight: "1.8rem" }}>
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </box-icon>
          </Link>
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
          {/* Discount */}
          <div className="product-details-price-rating-container">
            <div className="product-details-price-tag">
              <p className="product-details-discount">10</p>
            </div>
          </div>
          {/* Quantity */}
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
            {/* Total Price */}
            <p>
              <span style={{ fontWeight: "bold" }}>Total Price </span>
              <span className="product-details-price">
                AED <span>{(quantity * 30).toFixed(2)}</span>
              </span>
            </p>
            {/* Add to Cart Button */}
            <button
              className="product-details-add-to-cart-btn"
              onClick={handleAddToCart}
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
