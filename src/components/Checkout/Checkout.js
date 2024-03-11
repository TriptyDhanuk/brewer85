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

  return (
    <div className="body px-4">
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
        {cartItems.map((item) => (
          <div key={item.id} className="item mb-3 p-3 flex items-center border border-solid border-slate-200 rounded-md">
            <div>
              <img
                src={item.image}
                alt={item.name}
                style={{ height: "134px", width: "141px" }}
              />
            </div>
            <div className="item-details">
              <div className="product-details">
                <h3>{item.name}</h3>
                <p style={{ color: "grey", font: "bold" }}>
                  yahoo comidia
                </p>{" "}
                <div className="price-tag">
                  <p style={{ fontSize: "0.8rem", margin: "0" }}>
                    <strong>
                      AED{" "}
                      <span style={{ fontSize: "1.2rem" }}>{item.price}</span>
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
                    {item.discount}
                  </p>
                </div>
              </div>
            </div>
            <div className="item-actions">
              <div>
                <label htmlFor={`qty-${item.id}`} className="mr-2"> Qty:</label>
                <div class="py-2 px-2 inline-block bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700">
                <div class="flex items-center gap-x-1.5">
                  <button
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={() => handleMinusClick(item.id)}
                  >
                     <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                  </button>

                  <input
                    type="number"
                    id={`qty-${item.id}`}
                    value={item.quantity}
                    readOnly
                    min="1"
                    max="10"
                    className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
                  />
                  <button className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={() => handlePlusClick(item.id)}
                  >
                    <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                  </button>
                  </div>
                </div>
              </div>

              
            </div>
            
            <div className="icons ml-3 flex items-center">
              <button type="button" onClick={() => toggleSavedForLater(item.id)} className="p-1 hover:bg-transparent">
                <box-icon
                  type="solid"
                  name="bookmark-star"
                  style={{ fill: "#f7387f", stroke: "yellow" }}
                ></box-icon>
              </button>

              <button type="button" onClick={() => handleRemoveItem(item.id)} className="p-1 hover:bg-transparent">
                <box-icon name="trash" style={{ fill: "#ff0000" }}></box-icon>
                {/* <FontAwesomeIcon icon={faTrash} style={{ Color: "gray" }} /> */}
              </button>
            </div>
          </div>
        ))}

        {/* Coupon Section */}
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
            className="ml-2 py-3 px-5 text-white font-semibold bg-slate-700 rounded-lg whitespace-nowrap"
            onClick={handleApplyCoupon}
            disabled={couponApplied}
          >
            Apply Coupon
          </button>
          </div>
          {couponApplied && (
            <button
              style={{
                backgroundColor: "#ccc",
                height: "48px",
                marginLeft: "10px",
                marginBottom: "20px",
              }}
              onClick={handleRemoveCoupon}
            >
              Remove Coupon
            </button>
          )}
          {invalidCoupon && (
            <p className="font-semibold text-red-500">Invalid Coupon</p>
          )}
          {couponApplied && (
            <p style={{ marginLeft: "10px" }}>
              {discount
                ? `Discount Applied: AED ${discount.toFixed(2)}`
                : "Invalid Coupon Applied"}
            </p>
          )}
        </div>

        {/* Subtotal */}
        <div className="flex">
          <h5 className="font-semibold text-slate-800">
            SUBTOTAL{" "}
          </h5>
          <span
            className="price ml-auto font-semibold text-slate-800"
          >
            <small className="mr-2">AED</small>
            <span className="text-xl font-semibold text-green-700">{subtotal.toFixed(2)}</span>
          </span>
          </div>
        <hr style={{ margin: "20px 0", borderTop: "1px solid #ccc" }} />

        {/* VAT */}
        <div className="flex">
        <h5>Vat 
          <span className="ml-4 font-semibold text-lg text-slate-900">(5%)</span>
        </h5>
          <span
            className="product-details-price ml-auto font-semibold text-slate-800"
            
          >
            <small className="mr-2">AED</small>
            <span className="text-xl font-semibold text-red-500">{(subtotal * VAT_RATE).toFixed(2)}</span>
          </span>
          </div>
        
        <hr style={{ margin: "20px 0", borderTop: "1px solid #ccc" }} />

        {/* Total Price */}

        <div className="flex mb-4">
          <span>Total Price:</span>
          <div className="ml-auto">
          <h3 className="">
            {couponApplied ? (
              <span className="me-3 text-sm line-through text-slate-500"
              >
                AED {(subtotal + subtotal * VAT_RATE).toFixed(2)}
              </span>
            ) : (
              <span className=" font-bold text-red-500">AED {(subtotal + subtotal * VAT_RATE).toFixed(2)}</span>
            )}
          </h3>
          {couponApplied && (
            <h3 className="text-slate-800">
              <small>AED</small> <span className="text-xl font-bold text-red-500">{(subtotal + subtotal * VAT_RATE - discount).toFixed(2)}</span>
            </h3>
          )}
          </div>
        </div>
        <hr style={{ margin: "20px 0", borderTop: "1px solid #ccc" }} />
            <div className="text-right">
        <Link to="/thankyou">
          <button
            className="py-3 px-5 text-white font-semibold bg-green-700 rounded-lg whitespace-nowrap"
            onClick={handlePlaceOrder}
          >
            PLACE ORDER
          </button>
        </Link>
        </div>
      </div>
      {wishlistNoti && <WishlistNotification productName={wishlistNoti.name} />}
      {isRemoved && <RemoveNotification />}
    </div>
  );
};

export default CheckOut;
