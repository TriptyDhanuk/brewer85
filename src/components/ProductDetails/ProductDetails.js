import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartTotalItems } from "../../features/cart/cartSlice";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CartIconBadge from "../CartIconBadge";
import Wishlist from "../Wishlist";
import Notification from "../Notificaiton/Notification";
import { useParams } from "react-router-dom";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import burger from "../../images/burger.png";
import shakes from "../../images/shakes.png";
import noodles from "../../images/noodles.png";
import drinks from "../../images/drinks.png";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Lottie from "react-lottie";
import feedbackSuccessAnimation from "./feedBackAnimation.json";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [notification, setNotification] = useState(null);
  const dispatch = useDispatch();
  let { productId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmitFeedback = () => {
    console.log("Feedback submitted:", rating);
    setFeedbackSubmitted(true);
    localStorage.setItem("feedbackSubmitted", true);
    localStorage.setItem("feedbackSubmittedCount", rating);
  };

  const products = {
    Biryani: [
      {
        id: 111,
        image: image1,
        name: "Hydrabadi Biryani",
        price: "100",
        discount: "60% off",
      },
    ],
    IceCream: [
      {
        id: 222,
        image: image2,
        name: "IceCream",
        price: "125",
        discount: "60% off",
      },
    ],
    Pizza: [
      {
        id: 333,
        image: image4,
        name: "Pizza",
        price: "150",
        discount: "60% off",
      },
    ],
    Burger: [
      {
        id: 444,
        image: burger,
        name: "Burger",
        price: "90",
        discount: "60% off",
      },
    ],
    Shakes: [
      {
        id: 555,
        image: shakes,
        name: "Shakes",
        price: "70",
        discount: "60% off",
      },
    ],
    Chinese: [
      {
        id: 666,
        image: noodles,
        name: "Chinese",
        price: "120",
        discount: "60% off",
      },
      // Add more products as needed
    ],
    Drinks: [
      {
        id: 777,
        image: drinks,
        name: "Drinks",
        price: "55",
        discount: "60% off",
      },
    ],
  };
  const productsMenu = {
    Biryani: [
      {
        id: 1,
        image: image1,
        name: "Kashmiri Biryani",
        price: "125",
        discount: "60% off",
      },
      {
        id: 2,
        image: image1,
        name: "Hydrabadi Biryani",
        price: "170",
        discount: "60% off",
      },
      {
        id: 3,
        image: image1,
        name: "Kolkata Special Biryani",
        price: "100",
        discount: "60% off",
      },
      {
        id: 4,
        image: image1,
        name: "Hydrabadi Biryani 2",
        price: "175",
        discount: "60% off",
      },
      {
        id: 5,
        image: image1,
        name: "Kashmiri Biryani ",
        price: "250",
        discount: "60% off",
      },
      // Add more items as needed
    ],
    IceCream: [
      {
        id: 6,
        image: image2,
        name: "IceCream",
        price: "70",
        discount: "60% off",
      },
      {
        id: 7,
        image: image2,
        name: "IceCream 1",
        price: "75",
        discount: "60% off",
      },
      {
        id: 8,
        image: image2,
        name: "IceCream 2",
        price: "80",
        discount: "60% off",
      },
      // Add more items as needed
    ],
    Pizza: [
      {
        id: 9,
        image: image4,
        name: "Pizza",
        price: "250",
        discount: "60% off",
      },
      {
        id: 10,
        image: image4,
        name: "Pizza 1",
        price: "200",
        discount: "60% off",
      },
      {
        id: 11,
        image: image4,
        name: "Pizza 2",
        price: "180",
        discount: "60% off",
      },
      // Add more items as needed
    ],
    Burger: [
      {
        id: 12,
        image: burger,
        name: "Burger",
        price: "90",
        discount: "60% off",
      },
      {
        id: 13,
        image: burger,
        name: "Burger 1",
        price: "110",
        discount: "60% off",
      },
      {
        id: 14,
        image: burger,
        name: "Burger 2",
        price: "130",
        discount: "60% off",
      },
      // Add more items as needed
    ],
    Shakes: [
      {
        id: 15,
        image: shakes,
        name: "Shakes",
        price: "75",
        discount: "60% off",
      },
      {
        id: 16,
        image: shakes,
        name: "Shakes 1",
        price: "100",
        discount: "60% off",
      },
      {
        id: 17,
        image: shakes,
        name: "Shakes 2",
        price: "110",
        discount: "60% off",
      },
      // Add more items as needed
    ],
    Chinese: [
      {
        id: 18,
        image: noodles,
        name: "Chinese",
        price: "125",
        discount: "60% off",
      },
      {
        id: 19,
        image: noodles,
        name: "Chinese 1",
        price: "165",
        discount: "60% off",
      },
      {
        id: 20,
        image: noodles,
        name: "Chinese 2",
        price: "155",
        discount: "60% off",
      },
      // Add more items as needed
    ],
    Drinks: [
      {
        id: 21,
        image: drinks,
        name: "Drinks",
        price: "30",
        discount: "60% off",
      },
      {
        id: 22,
        image: drinks,
        name: "Drinks 1",
        price: "45",
        discount: "60% off",
      },
      {
        id: 23,
        image: drinks,
        name: "Drinks 2",
        price: "50",
        discount: "60% off",
      },
    ],
  };

  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const totalItems = useSelector(selectCartTotalItems);

  useEffect(() => {
    const findProduct = () => {
      // Check productsMenu
      for (const category in productsMenu) {
        const foundProduct = productsMenu[category].find(
          (item) => item.id === parseInt(productId)
        );
        if (foundProduct) {
          setProduct(foundProduct);
          return; // Exit loop if found in productsMenu
        }
      }

      // Check products
      for (const category in products) {
        const foundProduct = products[category].find(
          (item) => item.id === parseInt(productId)
        );
        if (foundProduct) {
          setProduct(foundProduct);
          return; // Exit loop if found in products
        }
      }
    };

    if (productId && !product) {
      findProduct();
    }
  }, [productId, product, productsMenu, products]);

  const handleAddToCart = () => {
    setIsAdded(true);
    if (!product) {
      console.error("Product is null");
      return;
    }

    const item = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      discount: product.discount,
      quantity: quantity,
    };
    dispatch(addToCart(item));
    setNotification({ name: product.name, quantity: quantity });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
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
      {product && (
        <>
          <img
            src={product.image}
            alt="Product"
            className="product-details-image"
          />
          <div className="product-details-header">
            <nav className="product-details-navbar">
              <div className="product-details-logo" onClick={handleGoBack}>
                <box-icon name="arrow-back"></box-icon>
                <h4 className="product-details-title">Product Details</h4>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Wishlist style={{ marginRight: "10px" }} />
                <CartIconBadge />
              </div>
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
              <h3 className="product-details-name">{product.name}</h3>
              <p className="product-details-price">
                AED <span>{product.price}</span>
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
                <div
                  className="product-details-your-rating"
                  onClick={() => {
                    // openModal();
                    if (!localStorage.getItem("feedbackSubmitted")) {
                      openModal();
                    }
                    console.log("hello");
                  }}
                >
                  <p>Your rating</p>
                  {/* <div className="product-details-star-rating">
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className="star">
                        &#9733;
                      </span>
                    ))}
                  </div> */}
                  <div className="product-details-star-rating">
                    {[...Array(5)].map((_, index) => {
                      // Retrieve feedback count from local storage
                      const feedbackCount = localStorage.getItem(
                        "feedbackSubmittedCount"
                      );
                      // Parse feedback count as integer
                      const parsedFeedbackCount = parseInt(feedbackCount);
                      // Check if parsedFeedbackCount is a valid integer
                      const isValidCount = !isNaN(parsedFeedbackCount);
                      const shouldFillStar =
                        isValidCount && index < parsedFeedbackCount;

                      console.log(
                        `Index: ${index}, Feedback Count: ${parsedFeedbackCount}, Should Fill Star: ${shouldFillStar}`
                      );

                      return (
                        <span
                          key={index}
                          className={`star ${
                            shouldFillStar ? "pink-star" : "empty-star"
                          }`}
                        >
                          &#9733;
                        </span>
                      );
                    })}
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
                      style={{ color: "rgb(255, 58, 117)", cursor: "pointer" }}
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
                  <span className="product-details-quantity-input">
                    {quantity}
                  </span>
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
                    AED <span>{(quantity * product.price).toFixed(2)}</span>
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
          {notification && (
            <Notification
              quantity={notification.quantity}
              productName={notification.name}
            />
          )}
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Feedback Modal"
          >
            <div className="modal-content">
              <button className="close-modal-button" onClick={closeModal}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <div className="feedback-container">
                {feedbackSubmitted ? (
                  <Lottie
                    options={{
                      loop: false,
                      autoplay: true,
                      animationData: feedbackSuccessAnimation,
                    }}
                    height={400}
                    width={400}
                  />
                ) : (
                  <>
                    <p>Please rate your experience:</p>
                    <div className="rating-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={
                            star <= rating ? "gold-star" : "empty-star"
                          }
                          onClick={() => handleRatingChange(star)}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <button
                      className="submit-feedback-button"
                      onClick={handleSubmitFeedback}
                    >
                      Submit Feedback
                    </button>
                  </>
                )}
              </div>
            </div>
          </Modal>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
