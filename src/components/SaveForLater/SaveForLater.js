import React, { useState, useEffect } from "react";
import "../Checkout/Checkout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, updateCart } from "../../features/cart/cartSlice";
import CartIconBadge from "../CartIconBadge";
import Notification from "../Notificaiton/Notification";
import RemoveNotification from "../Notificaiton/RemoveNotification";
import Lottie from "react-lottie";
import emptyWishlistAnimation from "./emptyWishListLottie.json";
import "./SaveForLater.css";

import {
  selectSavedForLaterItems,
  removeFromWishlist,
  updateWishlist,
} from "../../features/cart/wishlistSlice";

const SaveForLater = ({ id, image, name, price, discount, quantity }) => {
  const cartItems = useSelector(selectSavedForLaterItems);
  const [subtotal, setSubtotal] = useState(0);
  const [notification, setNotification] = useState(null);
  const [isRemoved, setIsRemoved] = useState(false);
  const VAT_RATE = 0.05;

  const dispatch = useDispatch();

  const cartItemsJSON = JSON.stringify(
    cartItems.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      discount: item.discount,
      quantity: item.quantity,
      image: item.image,
    }))
  );

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
    dispatch(updateWishlist(updatedCartItems));
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

    dispatch(updateWishlist(updatedCartItems));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromWishlist(itemId));
    setIsRemoved(true);
    setTimeout(() => {
      setIsRemoved(false);
    }, 3000);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleAddToCart = (clickedItem) => {
    const existingItemIndex = cartItems.findIndex(
      (existingItem) => existingItem.id === clickedItem.id
    );

    if (existingItemIndex !== -1) {
      dispatch(
        addToCart({
          ...clickedItem,
          quantity: clickedItem.quantity,
        })
      );
      setNotification({
        name: clickedItem.name,
        quantity: clickedItem.quantity,
      });
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    } else {
      dispatch(addToCart(clickedItem));
    }

    const itemIndexInSavedForLater = cartItems.findIndex(
      (item) => item.id === clickedItem.id
    );
    if (itemIndexInSavedForLater !== -1) {
      dispatch(removeFromWishlist(clickedItem.id));
    }
  };

  const handleImgClick = (itemId) => {
    window.location.href = `/details/${itemId}`;
  };

  return (
    <div className="body px-4">
      <div className="header py-3">
        <nav className="flex flex-wrap">
          <div className="logo" onClick={handleGoBack}>
            <box-icon name="arrow-back"></box-icon>
            <h4 className="">WishList</h4>
          </div>
          <div className="ml-auto">
            <CartIconBadge />
          </div>
        </nav>
      </div>

      <div className="items-container">
      {cartItems.length > 0 ?(
        cartItems.map((item) => (
          <div key={item.id} className="item mb-3 p-3 flex items-center border border-solid border-slate-200 rounded-md">
            <div>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ height: "134px", width: "141px" }}
                  onClick={()=>handleImgClick(item.id)}
                />
              </div>
            <div className="item-details">
              <div className="product-details">
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
                <label htmlFor={`qty-${item.id}`} className="mr-2"> Qty:</label>
                <div className="py-2 px-2 inline-block bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700">
                <div className="flex items-center gap-x-1.5">
                  <button
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={() => handleMinusClick(item.id)}
                  >
                     <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
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
                    <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                  </button>
                  </div>
                </div>
              </div>
              {/* <div>
                <label htmlFor={`qty-${item.id}`}>
                  <b> Qty:</b>
                </label>
                <div className="" style={{ display: "flex" }}>
                  <button
                    style={{
                      border: "1px solid green",
                      color: "black",
                      backgroundColor: "white",
                      width: "50px",
                      height: "40px",
                    }}
                    onClick={() => handleMinusClick(item.id)}
                  >
                    -
                  </button>

                  <input
                    type="number"
                    style={{ width: "50px", height: "40px" }}
                    id={`qty-${item.id}`}
                    value={item.quantity}
                    readOnly
                    min="1"
                    max="10"
                  />
                  <button
                    style={{
                      border: "1px solid green",
                      color: "black",
                      backgroundColor: "white",
                      width: "50px",
                      height: "40px",
                    }}
                    onClick={() => handlePlusClick(item.id)}
                  >
                    +
                  </button>
                </div>
              </div> */}

              
            </div>
            
            <div className="ml-4 flex items-center gap-2">
                  <button className="py-2.5 px-4 flex items-center font-medium text-white rounded-lg bg-lime-600 hover:bg-slate-800 duration-150"
                    onClick={() => handleAddToCart(item)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white mr-1"><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle><path d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"></path><path d="M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z"></path></svg>
                    {/* Add to Cart */}
                  </button>
                  <button type="button" onClick={() => handleRemoveItem(item.id)} className="py-2.5 px-4 text-white rounded-lg bg-red-600 hover:bg-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>
                  </button>
                </div>
          </div>
        ))
      ):(
        <div className="empty-cart-message">
           <Lottie options={{ loop: false,
                      autoplay: true, animationData: emptyWishlistAnimation }} height={300}
                    width={300}/>
            <h1>Add items to your WishList</h1>
          </div>
      )}
      </div>
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

export default SaveForLater;
