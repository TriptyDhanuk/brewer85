import React, { useState, useEffect } from "react";
import "../Checkout/Checkout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, updateCart } from "../../features/cart/cartSlice";
import CartIconBadge from "../CartIconBadge";

// import {
//   selectCartItems,
//   clearCart,
//   removeFromCart,
// } from "../../features/cart/cartSlice";
import {
  selectSavedForLaterItems,
  removeFromWishlist,
  updateWishlist,
} from "../../features/cart/wishlistSlice";

const SaveForLater = ({ id, image, name, price, discount, quantity }) => {
  const cartItems = useSelector(selectSavedForLaterItems);
  const [subtotal, setSubtotal] = useState(0);
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

  console.log("Cart items in JSON format:", cartItemsJSON);

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
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null);

    dispatch(updateWishlist(updatedCartItems));
  };

  // const handleMinusClick = (itemId) => {
  //   const updatedCartItems = cartItems.map((item) => {
  //     if (item.id === itemId && item.quantity > 1) {
  //       return {
  //         ...item,
  //         quantity: item.quantity - 1,
  //       };
  //     }
  //     return item;
  //   });
  //   dispatch(updateWishlist(updatedCartItems));
  // };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromWishlist(itemId));
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

  return (
    <div>
      <nav className="navbar headNav">
        <div className="logo" onClick={handleGoBack}>
          <box-icon name="arrow-back"></box-icon>
          <h4 className="">WishList</h4>
        </div>
        <CartIconBadge />
      </nav>

      <div className="items-container">
        {cartItems.map((item) => (
          <div key={item.id} className="item">
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
                <div className="icons" style={{ display: "flex" }}>
                  <span onClick={() => handleRemoveItem(item.id)}>
                    <FontAwesomeIcon icon={faTrash} style={{ Color: "gray" }} />
                  </span>
                  <button
                    style={{
                      border: "1px solid green",
                      color: "green",
                      backgroundColor: "white",
                      width: "100px",
                      height: "40px",
                      marginLeft: "7rem",
                    }}
                    onClick={() => handleAddToCart(item)}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="item-actions">
              <div>
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
              </div>

              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ height: "134px", width: "141px" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaveForLater;
