import React, { useState, useEffect } from "react";
import "../ProductCard/ProductCard.css";
import "boxicons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../features/cart/wishlistSlice";
import RemoveNotification from "../Notificaiton/RemoveNotification.js";
import { selectCartItems } from "../../features/cart/selectors";
import WishlistNotification from "../Notificaiton/WishlistNotification.js";
import Notification from "../Notificaiton/Notification.js";
import { selectSavedForLaterItems } from "../../features/cart/wishlistSlice";
import { useLocation } from "react-router-dom";

const ProductCard = ({ id, image, name, price, discount }) => {
  const location=useLocation();
  const saveItems = useSelector(selectSavedForLaterItems);
  const cartItems = useSelector(selectCartItems);
  const [isRemoved, setIsRemoved] = useState(false);
  const isMenuPage = location.pathname === "/menu";

  const [quantity, setQuantity] = useState(1);
  const [notification, setNotification] = useState(null);
  const [wishlistNoti, setWishlistNoti] = useState(null);
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
    <div className="relative mx-[0.625rem]">
      <div className="product-card border border-solid border-slate-200 rounded-lg" onClick={handleImgClick}>
        <div className="best-seller-ribbon absolute top-0 -left-[0.625rem] text-white py-2 pl-5 pr-2 font-bold bg-lime-600 after:content-[''] after:absolute after:top-0 after:right-[-19px] after:border-t-[18px] after:border-l-[10px] after:border-b-[18px] after:border-r-[10px] after:border-t-lime-600 after:border-r-transparent after:border-b-lime-600 after:!border-l-lime-600 before:content-[''] before:absolute before:top-[100%] before:left-0 before:border-t-[10px] before:border-l-[10px] before:border-b-[10px] before:border-t-lime-900 before:border-l-transparent  before:border-b-transparent text-sm">Best Seller</div>
        {/* <p className="absolute top-0">{id}</p> */}
        <img
          src={image}
          alt={name}
          className="product-image"
          onClick={handleImgClick}
        />
        <div className="product-details">
          <h3 className="text-lg font-semibold text-white">
            {name}
            {id}
          </h3>
          <p className="mb-1 text-sm font-normal text-white">
            yahoo comidia
          </p>
          <div>
            <div className="flex mb-3">
              <span>
                <strong className="text-nowrap font-normal text-white">
                  AED <span>{price}</span>
                </strong>
              </span>
              <span className="ml-2 text-base font-bold text-white">
                {discount}
              </span>
            </div>

            

              {isMenuPage && (<div className="flex items-center">
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
                  {/* <button
                    className="py-2 px-5 w-full font-semibold text-lime-600 border border-solid border-lime-600 rounded-md hover:text-white hover:bg-lime-600 duration-150"
                    onClick={handleAddToCart}
                  >
                    ADD
                  </button> */}
                  {existingCartItem ? (
                      <Link to="/checkout">
                        <button
                          className="py-2 px-5 w-full font-semibold uppercase text-white border border-solid border-white rounded-md hover:text-white hover:bg-lime-600 duration-150 hover:border-lime-600 ml-2"
                        >
                          CART
                        </button>
                      </Link>
                    ) : (
                      <button
                        className="py-2 px-5 w-full font-semibold uppercase text-white border border-solid border-white rounded-md hover:text-white hover:bg-lime-600 duration-150 hover:border-lime-600 ml-2"
                        onClick={handleAddToCart}
                      >
                        ADD
                      </button>
                    )}
                </div>
              </div>)}
          </div>
        </div>
      </div>
      <button
          // className={saveItems.some((item) => item.id === id) ? "selected" : ""}
          className="absolute top-2 right-4 z-10"
          style={{
            color: saveItems.some((item) => item.id === id) ? "pink" : "white",
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
      <div className="absolute top-2 right-8 z-20">
        {wishlistNoti && <WishlistNotification productName={wishlistNoti.name} className="absolute top-0" />}
        {notification && (
          <Notification
            quantity={notification.quantity}
            productName={notification.name}
            className="absolute top-0"
          />
        )}
        {isRemoved && <RemoveNotification />}
      </div>
    </div>
  );
};

export default ProductCard;
