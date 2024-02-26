import React from "react";
import "./ProductCard.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, saveForLater } from "../../features/cart/cartSlice";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../features/cart/selectors";

const ProductCard = ({ id, image, name, price, discount }) => {
  const cartItems = useSelector(selectCartItems);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleAdd = () => {
    setIsAdded(true);
  };

  const handleAddToCart = () => {
    setIsAdded(true);
    setQuantity(quantity + 1);

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
      existingItems[existingItemIndex].quantity += 1;
    } else {
      existingItems.push(item);
    }

    localStorage.setItem("cartItems", JSON.stringify(existingItems));
    dispatch(addToCart(item));

    console.log("Item added to cart:", item);
  };

  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleImgClick = () => {
    window.location.href = "/details";
  };

  // Define saveForLaterItem function properly
  const saveForLaterItem = () => {
    const item = {
      // Define item here
      id,
      image,
      name,
      price,
      discount,
      quantity,
    };
    dispatch(saveForLater(item));
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
          {" "}
          <box-icon name="heart"></box-icon>
        </button>
        <div className="best-seller-ribbon">Best Seller</div>
        <p>{id}</p>
        <img src={image} alt={name} className="product-image" />
        <div className="product-details">
          <h3>{name}</h3>
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
            {isAdded ? (
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
                  onClick={handleAddToCart}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                style={{
                  border: "1px solid green",
                  color: "green",
                  backgroundColor: "white",
                  width: "100px",
                  height: "40px",
                }}
                onClick={handleAdd}
              >
                ADD
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
