import React, { useState, useEffect } from "react";
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
  const saveItems = useSelector(selectSavedForLaterItems);
  const cartItems = useSelector(selectCartItems);
  const [quantity, setQuantity] = useState(1);
  const [notification, setNotification] = useState(null);
  const [wishlistNoti, setWishlistNoti] = useState(null);
  const [isRemoved, setIsRemoved] = useState(false);
  const [removeWishlistNoti, setRemoveWishlistNoti] = useState(null);
  const dispatch = useDispatch();
  const existingCartItem = cartItems.find((item) => item.id === id);
  const [savedForLater, setSavedForLater] = useState(false);

  useEffect(() => {
    localStorage.setItem("savedForLater", savedForLater);
  }, [savedForLater]);

  useEffect(() => {
    if (saveItems.some((item) => item.id === id)) {
      setSavedForLater(true);
    }
  }, [saveItems, id]);

  const toggleSavedForLater = () => {
    if (savedForLater) {
      dispatch(removeFromWishlist(id));
      setIsRemoved(true);
      setTimeout(() => {
        setIsRemoved(false);
      }, 3000);
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
    }
    setSavedForLater(!savedForLater);
  };

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
  };

  const handleImgClick = () => {
    window.location.href = `/details/${id}`;
  };

  return (
    <div className="lg:w-3/12 md:w-4/12 sm:w-6/12 w-full sm:px-[0.625rem] relative">
      <div className="product-card border border-solid border-slate-200 rounded-lg p-3">
        <button
          className={saveItems.some((item) => item.id === id) ? "selected" : ""}
          style={{
            color: saveItems.some((item) => item.id === id) ? "pink" : "white",
            backgroundColor: "transparent",
            position: "absolute",
            right: "15px",
          }}
          onClick={toggleSavedForLater}
        >
          <box-icon
            type="solid"
            name="heart"
            className="heart-icon"
            style={{
              fill: saveItems.some((item) => item.id === id) ? "pink" : "white",
              stroke: "red",
            }}
          ></box-icon>
        </button>

        <img
          src={image}
          alt={name}
          className="product-image"
          onClick={handleImgClick}
        />
        <div className="product-details">
          <h3 className="text-lg font-semibold text-slate-900">
            {name}
            {id}
          </h3>
          <p className="mb-2 text-sm font-semibold text-slate-500">yahoo comidia</p>
          
          <div className="price-tag mb-3">
            <div className="flex">
              <span>
                <strong>
                  AED <span>{price}</span>
                </strong>
              </span>
              <p className="ml-2 text-base font-bold text-red-600">
                {discount}
              </p>
            </div>
            </div>
            <div className="flex items-center">
            <div className="quantity-button w-1/2">
              <div
                className="py-2 px-2 inline-block bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
                data-hs-input-number
              >
                <div className="flex items-center gap-x-1.5">
                  <button
                    className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={handleMinusClick}
                  >
                    <svg
                      className="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
                  />
                  <button
                    className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={handlePlusClick}
                  >
                    <svg
                      className="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          
          <div className="w-1/2">
          <button
            className="py-2 px-5 w-full font-semibold uppercase text-lime-600 border border-solid border-lime-600 rounded-md hover:text-white hover:bg-lime-600 duration-150"
            onClick={handleAddToCart}
          >
            Add
          </button>
          </div>
        </div>
        </div>
      </div>
      <div className="absolute top-2 right-4">
      {wishlistNoti && <WishlistNotification productName={wishlistNoti.name} />}
      {notification && (
        <Notification
          quantity={notification.quantity}
          productName={notification.name}
        />
      )}
      {isRemoved && <RemoveNotification />}
      </div>
    </div>
  );
};

export default MenuCard;
