import React, { useState, useEffect } from "react";
import "../Checkout/Checkout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCart } from "../../features/cart/cartSlice";

import { saveForLater } from "../../features/cart/cartSlice";

// import {
//   selectCartItems,
//   clearCart,
//   removeFromCart,
// } from "../../features/cart/cartSlice";
import {
  selectSavedForLaterItems,
  removeFromWishlist,
} from "../../features/cart/wishlistSlice";

const SaveForLater = ({ id, image, name, price, discount, quantity }) => {
  const cartItems = useSelector(selectSavedForLaterItems);
  const [couponCode, setCouponCode] = useState("");

  const [discount, setDiscount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const VAT_RATE = 0.05;

  const dispatch = useDispatch();

  useEffect(() => {
    if (savedForLaterItems) {
      const subTotal = savedForLaterItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
      setSubtotal(subTotal);
    }
  }, [savedForLaterItems]);

  useEffect(() => {
    const VAT = subtotal * VAT_RATE;
    const total = subtotal + VAT - discount;
  }, [subtotal, discount]);

  const handlePlusClick = (itemId) => {
    const updatedCartItems = savedForLaterItems.map((item) => {
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

  const handleMinusClick = (itemId) => {
    const updatedCartItems = savedForLaterItems
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

    dispatch(updateCart(updatedCartItems));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromWishlist(itemId));
  };

  const handleSaveForLater = (itemId) => {
    const itemToSave = savedForLaterItems.find((item) => item.id === itemId);
    dispatch(saveForLater(itemToSave));
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handlePlaceOrder = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <nav className="navbar headNav">
        <div className="logo" onClick={handleGoBack}>
          <box-icon name="arrow-back"></box-icon>
          <h4 className="">WishList</h4>
        </div>
        <box-icon type="solid" name="filter-alt"></box-icon>
      </nav>

      <div className="items-container">
        {savedForLaterItems.map((item) => (
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
                  <span onClick={() => handleSaveForLater(item.id)}>
                    <box-icon type="solid" name="bookmark-star"></box-icon>
                  </span>
                  <span onClick={() => handleRemoveItem(item.id)}>
                    <FontAwesomeIcon icon={faTrash} style={{ Color: "gray" }} />
                  </span>
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

// import React, { useState, useEffect } from "react";
// import "../Checkout/Checkout.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { updateCart, saveForLater } from "../../features/cart/cartSlice";
// import {
//   selectSavedForLaterItems,
//   clearCart,
//   removeFromCart,
// } from "../../features/cart/cartSlice";

// const SaveForLater = () => {
//   const savedForLaterItems = useSelector(selectSavedForLaterItems);
//   console.log("itemsSaved", savedForLaterItems);
//   const [couponCode, setCouponCode] = useState("");
//   const [savedItems, setSavedItems] = useState([]);
//   const [discount, setDiscount] = useState(0);
//   const [subtotal, setSubtotal] = useState(0);
//   const VAT_RATE = 0.05;
//   const [invalidCoupon, setInvalidCoupon] = useState(false);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (savedItems) {
//       const subTotal = savedItems.reduce((total, item) => {
//         return total + item.price * item.quantity;
//       }, 0);
//       setSubtotal(subTotal);
//     }
//   }, [savedItems]);

//   useEffect(() => {
//     // Retrieve items from local storage
//     const savedItems = JSON.parse(localStorage.getItem("saveLater")) || [];
//     setSavedItems(savedItems);
//   }, []);

//   useEffect(() => {
//     const VAT = subtotal * VAT_RATE;
//     const total = subtotal + VAT - discount;
//   }, [subtotal, discount]);

//   const handlePlusClick = (itemId) => {
//     const updatedCartItems = savedItems.map((item) => {
//       if (item.id === itemId) {
//         return {
//           ...item,
//           quantity: item.quantity + 1,
//         };
//       }
//       return item;
//     });
//     dispatch(updateCart(updatedCartItems));
//   };

//   const handleMinusClick = (itemId) => {
//     const updatedCartItems = savedItems
//       .map((item) => {
//         if (item.id === itemId) {
//           if (item.quantity > 1) {
//             return {
//               ...item,
//               quantity: item.quantity - 1,
//             };
//           } else {
//             return null;
//           }
//         }
//         return item;
//       })
//       .filter((item) => item !== null);

//     dispatch(updateCart(updatedCartItems));
//   };

//   const handleRemoveItem = (itemId) => {
//     dispatch(removeFromCart(itemId));
//   };

//   const handleSaveForLater = (itemId) => {
//     const itemToSave = savedItems.find((item) => item.id === itemId);
//     dispatch(saveForLater(itemToSave));
//   };

//   const handleGoBack = () => {
//     window.history.back();
//   };

//   const handlePlaceOrder = () => {
//     dispatch(clearCart());
//   };

//   return (
//     <div>
//       <nav className="navbar headNav">
//         <div className="logo" onClick={handleGoBack}>
//           <box-icon name="arrow-back"></box-icon>
//           <h4 className="">WishList</h4>
//         </div>
//         <box-icon type="solid" name="filter-alt"></box-icon>
//       </nav>

//       <div className="items-container">
//         {savedItems &&
//           savedItems.map((item) => (
//             <div key={item.id} className="item">
//               <div className="item-details">
//                 <div className="product-details">
//                   <h3>{item.name}</h3>
//                   <p style={{ color: "grey", font: "bold" }}>
//                     yahoo comidia
//                   </p>{" "}
//                   <div className="price-tag">
//                     <p style={{ fontSize: "0.8rem", margin: "0" }}>
//                       <strong>
//                         AED{" "}
//                         <span style={{ fontSize: "1.2rem" }}>{item.price}</span>
//                       </strong>
//                     </p>

//                     <p
//                       style={{
//                         color: "red",
//                         margin: "0 8px",
//                         padding: "0 4px",
//                         fontWeight: "bold",
//                         fontSize: "1em",
//                         whiteSpace: "nowrap",
//                       }}
//                     >
//                       {item.discount}
//                     </p>
//                   </div>
//                   <div className="icons" style={{ display: "flex" }}>
//                     <span onClick={() => handleSaveForLater(item.id)}>
//                       <box-icon type="solid" name="bookmark-star"></box-icon>
//                     </span>
//                     <span onClick={() => handleRemoveItem(item.id)}>
//                       <FontAwesomeIcon
//                         icon={faTrash}
//                         style={{ Color: "gray" }}
//                       />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="item-actions">
//                 <div>
//                   <label htmlFor={`qty-${item.id}`}>
//                     <b> Qty:</b>
//                   </label>
//                   <div className="" style={{ display: "flex" }}>
//                     <button
//                       style={{
//                         border: "1px solid green",
//                         color: "black",
//                         backgroundColor: "white",
//                         width: "50px",
//                         height: "40px",
//                       }}
//                       onClick={() => handleMinusClick(item.id)}
//                     >
//                       -
//                     </button>

//                     <input
//                       type="number"
//                       style={{ width: "50px", height: "40px" }}
//                       id={`qty-${item.id}`}
//                       value={item.quantity}
//                       readOnly
//                       min="1"
//                       max="10"
//                     />
//                     <button
//                       style={{
//                         border: "1px solid green",
//                         color: "black",
//                         backgroundColor: "white",
//                         width: "50px",
//                         height: "40px",
//                       }}
//                       onClick={() => handlePlusClick(item.id)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>

//                 <div>
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     style={{ height: "134px", width: "141px" }}
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default SaveForLater;
