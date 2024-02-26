import React, { useState } from "react";
import "./ProductDetails.css";
import image1 from "../../images/image1.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartTotalItems } from "../../features/cart/cartSlice";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CartIconBadge from "../CartIconBadge";

const ProductDetails = () => {
  const [showMore, setShowMore] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
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
    window.history.back();
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="product-details-container">
      <img src={image1} alt="Product" className="product-details-image" />
      <div className="product-details-header">
        <nav className="product-details-navbar">
          <div className="product-details-logo" onClick={handleGoBack}>
            <box-icon name="arrow-back"></box-icon>
            <h4 className="product-details-title">Product Details</h4>
          </div>
          <CartIconBadge />
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
          <h3 className="product-details-name">Chicken Biryani</h3>
          <p className="product-details-price">
            AED <span>30</span>
          </p>
          <div className="product-details-price-rating-container">
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
            <h6>
              {showMore ? <>{text}</> : `${text.substring(0, 250)}...`}
              <span>
                <a
                  className="show-more-link"
                  onClick={() => setShowMore(!showMore)}
                  style={{ color: "rgb(255, 58, 117)" }}
                >
                  {showMore ? "Show Less" : "Show More"}
                </a>
              </span>
            </h6>
          </div>

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
                AED <span>{(quantity * 30).toFixed(2)}</span>
              </span>
            </p>
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
