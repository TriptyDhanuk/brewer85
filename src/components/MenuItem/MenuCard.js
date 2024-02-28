import React, { useState } from "react";
import "../ProductCard/ProductCard.css";
import "boxicons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { addToWishlist } from "../../features/cart/wishlistSlice";
import { selectCartItems } from "../../features/cart/selectors";
import WishlistNotification from "../Notificaiton/WishlistNotification.js";
import Notification from "../Notificaiton/Notification.js";
import { Link } from "react-router-dom";

const MenuCard = ({ id, image, name, price, discount }) => {
  const cartItems = useSelector(selectCartItems);
  const [quantity, setQuantity] = useState(1);
  const [notification, setNotification] = useState(null);
  const [wishlistNoti, setWishlistNoti]=useState(null);

  const dispatch = useDispatch();

  const existingCartItem = cartItems.find((item) => item.id === id);

  const handlePlusClick = () => {
    setQuantity(quantity + 1);
  };

  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const item = {
      id,
      image,
      name,
      price,
      discount,
      quantity,
    };

    const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItemIndex = existingItems.findIndex(
      (existingItem) => existingItem.id === id
    );

    if (existingItemIndex !== -1) {
      // Item is already in the cart, update its quantity
      existingItems[existingItemIndex].quantity += quantity;
    } else {
      existingItems.push(item);
    }

    localStorage.setItem("cartItems", JSON.stringify(existingItems));
    dispatch(addToCart(item));
    setNotification({ name: item.name, quantity: quantity });
    setTimeout(() => {
      setNotification(null);
    }, 3000);

    console.log("Item added to cart:", item);
  };

  // const handleAddToCart = () => {
  //   if (existingCartItem) {
  //     // Item is already in the cart, navigate to the cart page
  //     window.location.href = "/checkout";
  //   } else {
  //     const item = {
  //       id,
  //       image,
  //       name,
  //       price,
  //       discount,
  //       quantity,
  //     };

  //     const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  //     const existingItemIndex = existingItems.findIndex(
  //       (existingItem) => existingItem.id === id
  //     );

  //     if (existingItemIndex !== -1) {
  //       // Item is already in the cart, update its quantity
  //       existingItems[existingItemIndex].quantity += quantity;
  //     } else {
  //       // Item is not in the cart, add it as a new item
  //       existingItems.push(item);
  //     }

  //     localStorage.setItem("cartItems", JSON.stringify(existingItems));
  //     dispatch(addToCart(item));

  //     console.log("Item added to cart:", item);
  //   }
  // };

  const handleImgClick = () => {
    window.location.href = `/details/${id}`;
  };

  const saveForLaterItem = () => {
    const item = {
      id,
      image,
      name,
      price,
      discount,
      quantity,
    };
    dispatch(addToWishlist(item));
    setWishlistNoti({ name: item.name });
    setTimeout(() => {
      setWishlistNoti(null);
    }, 3000);
    console.log("Item saved for later:", item);
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
          <box-icon name="heart" onClick={saveForLaterItem}></box-icon>
        </button>
        <img
          src={image}
          alt={name}
          className="product-image"
          onClick={handleImgClick}
        />
        <div className="product-details">
          <h3>
            {name}
            {id}
          </h3>
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

            <div style={{ display: "flex", marginTop: "1rem" }}>
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
              <button
                style={{
                  border: "1px solid green",
                  color: "green",
                  backgroundColor: "white",
                  width: "100px",
                  height: "40px",
                  marginLeft: "7rem",
                }}
                onClick={handleAddToCart}
              >
                ADD
              </button>
              {/* {existingCartItem ? (
                <Link to="/checkout">
                  <button
                    style={{
                      border: "1px solid green",
                      color: "green",
                      backgroundColor: "white",
                      width: "100px",
                      height: "40px",
                      marginLeft: "7rem",
                    }}
                  >
                    GO TO CART
                  </button>
                </Link>
              ) : (
                <button
                  style={{
                    border: "1px solid green",
                    color: "green",
                    backgroundColor: "white",
                    width: "100px",
                    height: "40px",
                    marginLeft: "7rem",
                  }}
                  onClick={handleAddToCart}
                >
                  ADD
                </button>
              )} */}
            </div>
          </div>
        </div>
      </div>
      {wishlistNoti && <WishlistNotification productName={wishlistNoti.name} />}
      {notification && (
        <Notification
          quantity={notification.quantity}
          productName={notification.name}
        />
      )}
    </div>
  );
};

export default MenuCard;
