import React, { useState } from "react";
import "../ProductCard/ProductCard.css";
import "boxicons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../features/cart/wishlistSlice";
import { selectCartItems } from "../../features/cart/selectors";
import WishlistNotification from "../Notificaiton/WishlistNotification.js";
import RemoveNotification from "../Notificaiton/RemoveNotification.js";
import Notification from "../Notificaiton/Notification.js";

import { selectSavedForLaterItems } from "../../features/cart/wishlistSlice";

const MenuCard = ({ id, image, name, price, discount }) => {
  const cartItems = useSelector(selectCartItems);
  const SaveItems = useSelector(selectSavedForLaterItems);
  const [quantity, setQuantity] = useState(1);
  const [notification, setNotification] = useState(null);
  const [wishlistNoti, setWishlistNoti] = useState(null);
  const [isRemoved, setIsRemoved] = useState(false);
  const [removeWishlistNoti, setRemoveWishlistNoti] = useState(null);
  const dispatch = useDispatch();
  const existingCartItem = cartItems.find((item) => item.id === id);
  const [savedForLater, setSavedForLater] = useState(false);

  const toggleSavedForLater = () => {
    const isItemSaved = SaveItems.some((item) => item.id === id);

    if (isItemSaved) {
      dispatch(removeFromWishlist(id));
      setSavedForLater(false);
      setIsRemoved(true);
      setTimeout(() => {
        setIsRemoved(null);
      }, 3000);
      localStorage.setItem("savedForLater", savedForLater);
    } else {
      const itemToAdd = {
        id: id,
        name: name,
        price: price,
        discount: discount,
        quantity: quantity,
        image: image,
      };
      dispatch(addToWishlist(itemToAdd));
      setSavedForLater(true);
      setWishlistNoti({ name: itemToAdd.name });
      setTimeout(() => {
        setWishlistNoti(null);
      }, 3000);
      localStorage.setItem("savedForLater", savedForLater);
    }
  };

  console.log("savedForLater", savedForLater);

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
          className={!savedForLater ? "selected" : ""}
          style={{
            color: savedForLater ? "pink" : "white",
            backgroundColor: savedForLater ? "pink" : "white",
            position: "absolute",
            right: "15px",
          }}
          onClick={toggleSavedForLater}
        >
          <box-icon name="heart"></box-icon>
        </button>

        {/* {savedForLater ? (
          <button
            style={{
              color: "pink",
              backgroundColor: "transparent",
              position: "absolute",
              right: "15px",
            }}
            onClick={toggleSavedForLater}
          >
            <box-icon name="heart"></box-icon>
          </button>
        ) : (
          <button
            style={{
              color: "pink",
              backgroundColor: "transparent",
              position: "absolute",
              right: "15px",
            }}
            onClick={toggleSavedForLater}
          >
            <box-icon name="heart"></box-icon>
          </button>
        )} */}
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
      {isRemoved && <RemoveNotification />}
    </div>
  );
};

export default MenuCard;
