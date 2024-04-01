import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCart } from "../../features/cart/cartSlice";
import {
  selectCartItems,
  clearCart,
  removeFromCart,
} from "../../features/cart/cartSlice";
import RemoveNotification from "../Notificaiton/RemoveNotification";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../features/cart/wishlistSlice";
import WishlistNotification from "../Notificaiton/WishlistNotification.js";
import Lottie from "react-lottie";
import emptyCartAnimation from "./emptyCartLottie.json";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [wishlistNoti, setWishlistNoti] = useState(null);
  const VAT_RATE = 0.05;
  const [invalidCoupon, setInvalidCoupon] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const subTotal = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setSubtotal(subTotal);
  }, [cartItems]);

  useEffect(() => {
    const VAT = subtotal * VAT_RATE;
    const total = subtotal + VAT - discount;
  }, [subtotal, discount]);

  const handlePlusClick = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    dispatch(updateCart(updatedCartItems));
  };

  const toggleSavedForLater = (itemId) => {
    const selectedItem = cartItems.find((item) => item.id === itemId);
    if (selectedItem) {
      dispatch(addToWishlist(selectedItem));
      setWishlistNoti({ name: selectedItem.name });
      dispatch(removeFromCart(itemId));
      setTimeout(() => {
        setWishlistNoti(null);
      }, 3000);
    }
  };

  const handleMinusClick = (itemId) => {
    const updatedCartItems = cartItems
      .map((item) => {
        if (item.id === itemId) {
          if (item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            setIsRemoved(true);
            setTimeout(() => {
              setIsRemoved(false);
            }, 3000);
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null);

    dispatch(updateCart(updatedCartItems));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
    setIsRemoved(true);
    setTimeout(() => {
      setIsRemoved(false);
    }, 3000);
  };

  const handleSaveForLater = (itemId) => {
    console.log("Item saved for later:", itemId);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleApplyCoupon = () => {
    if (!couponApplied && couponCode === "SAVE10") {
      setDiscount(10);
      setAppliedCoupon(couponCode);
      setCouponApplied(true);
      setInvalidCoupon(false);
    } else {
      setInvalidCoupon(true);
    }
  };

  const handleRemoveCoupon = () => {
    setDiscount(0);
    setAppliedCoupon("");
    setCouponApplied(false);
    setInvalidCoupon(false);
  };

  const handlePlaceOrder = () => {
    dispatch(clearCart());
  };

  const handleImgClick = (itemId) => {
    window.location.href = `/details/${itemId}`;
  };

  return (
    <div className="body px-4">
      <div className="fixed max-w-[450px] top-2 left-1/2 -translate-x-1/2">
        {wishlistNoti && (
          <WishlistNotification productName={wishlistNoti.name} />
        )}
        {isRemoved && <RemoveNotification />}
      </div>
      <div className="header py-3">
        <nav className="flex flex-wrap">
          <div className="logo" onClick={handleGoBack}>
            <box-icon name="arrow-back"></box-icon>
            <h4 className="">Checkout</h4>
          </div>
          <div className="ml-auto">
            <box-icon type="solid" name="filter-alt"></box-icon>
          </div>
        </nav>
      </div>

      <div className="items-container">
        <div className="cart-message">
          <h1>My Orders</h1>
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="item mb-3 p-3 flex items-center border border-solid border-slate-200 rounded-md"
            >
              <div className="mr-4">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ height: "134px", width: "141px" }}
                  onClick={() => handleImgClick(item.id)}
                />
              </div>
              <div className="item-details">
                <div className="product-details checkout">
                  <h3 className="mb-1 text-lg font-semibold">{item.name}</h3>
                  <p className="font-semibold text-slate-500">
                    yahoo comidia
                  </p>{" "}
                  <div className="price-tag">
                    <span>
                      <strong>
                        AED{" "}
                        <span style={{ fontSize: "1.2rem" }}>{item.price}</span>
                      </strong>
                    </span>

                    <sup className="text-sm font-bold text-red-600 ml-2">
                      {item.discount}
                    </sup>
                  </div>
                </div>
              </div>
              <div className="item-actions">
                <div>
                  <label htmlFor={`qty-${item.id}`} className="mr-2">
                    {" "}
                    Qty:
                  </label>
                  <div className="py-2 px-2 inline-block bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700">
                    <div className="flex items-center gap-x-1.5">
                      <button
                        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        onClick={() => handleMinusClick(item.id)}
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
                        id={`qty-${item.id}`}
                        value={item.quantity}
                        readOnly
                        min="1"
                        max="10"
                        className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
                      />
                      <button
                        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        onClick={() => handlePlusClick(item.id)}
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
              </div>
              <div className="ml-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => toggleSavedForLater(item.id)}
                  className="py-2.5 px-4 flex items-center font-medium text-white rounded-lg bg-lime-600 hover:bg-slate-800 duration-150"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-white"
                  >
                    <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => handleRemoveItem(item.id)}
                  className="py-2.5 px-4 text-white rounded-lg bg-red-600 hover:bg-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-white"
                  >
                    <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
                    <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-cart-message">
            <Lottie
              options={{
                loop: false,
                autoplay: true,
                animationData: emptyCartAnimation,
              }}
              height={300}
              width={300}
            />
            <h1>Add items to your Cart</h1>
          </div>
        )}

        {/* Coupon Section */}
        {cartItems.length > 0 && (
          <>
            <div className="mb-3">
              <div className="flex mb-1">
                <input
                  type="text"
                  id="textbox"
                  name="textbox"
                  placeholder="Type something..."
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  disabled={couponApplied}
                  className="block w-full py-3 px-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button
                  className="ml-2 py-3 px-5 text-white font-semibold whitespace-nowrap rounded-lg bg-pink-600 hover:bg-slate-700 duration-300"
                  onClick={handleApplyCoupon}
                  disabled={couponApplied}
                >
                  Apply Coupon
                </button>

                {couponApplied && (
                  <button
                    className="ml-2 py-3 px-5 text-white font-semibold bg-red-700 hover:bg-red-600 rounded-lg whitespace-nowrap"
                    onClick={handleRemoveCoupon}
                  >
                    Remove Coupon
                  </button>
                )}
              </div>
              {invalidCoupon && (
                <p className="font-semibold text-red-500">Invalid Coupon</p>
              )}
              {couponApplied && (
                <p className="font-semibold text-green-500">
                  {discount
                    ? `Discount Applied: AED ${discount.toFixed(2)}`
                    : "Invalid Coupon Applied"}
                </p>
              )}
            </div>

            {/* Subtotal */}
            <div className="flex items-center">
              <h5 className="font-semibold text-slate-800">SUBTOTAL </h5>
              <span className="price ml-auto font-semibold text-slate-800">
                <small className="mr-2">AED</small>
                <span className="text-xl font-semibold text-lime-600">
                  {subtotal.toFixed(2)}
                </span>
              </span>
            </div>
            <hr style={{ margin: "20px 0", borderTop: "1px solid #ccc" }} />

            {/* VAT */}
            <div className="flex">
              <h5>
                Vat
                <span className="ml-4 font-semibold text-lg text-slate-900">
                  (5%)
                </span>
              </h5>
              <span className="product-details-price ml-auto font-semibold text-slate-800">
                <small className="mr-2">AED</small>
                <span className="text-xl font-semibold text-red-500">
                  {(subtotal * VAT_RATE).toFixed(2)}
                </span>
              </span>
            </div>

            <hr style={{ margin: "20px 0", borderTop: "1px solid #ccc" }} />

            {/* Total Price */}

            <div className="flex mb-4">
              <span>Total Price:</span>
              <div className="ml-auto">
                <h3 className="">
                  {couponApplied ? (
                    <span className="me-3 text-sm line-through text-slate-500">
                      AED {(subtotal + subtotal * VAT_RATE).toFixed(2)}
                    </span>
                  ) : (
                    <span className=" font-bold text-red-500">
                      AED {(subtotal + subtotal * VAT_RATE).toFixed(2)}
                    </span>
                  )}
                </h3>
                {couponApplied && (
                  <h3 className="text-slate-800">
                    <small>AED</small>{" "}
                    <span className="text-xl font-bold text-red-500">
                      {(subtotal + subtotal * VAT_RATE - discount).toFixed(2)}
                    </span>
                  </h3>
                )}
              </div>
            </div>
            <hr style={{ margin: "20px 0", borderTop: "1px solid #ccc" }} />
            <div className="mb-5 text-right">
              <Link to="/thankyou">
                <button
                  className="py-3 px-5 text-white font-semibold bg-lime-600 rounded-lg whitespace-nowrap hover:bg-slate-800 duration-150"
                  onClick={handlePlaceOrder}
                >
                  PLACE ORDER
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
      {/* {wishlistNoti && <WishlistNotification productName={wishlistNoti.name} />}
      {isRemoved && <RemoveNotification />} */}
    </div>
  );
};

export default CheckOut;
