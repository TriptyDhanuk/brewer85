import React, { useState } from "react";
import "../ProductCard/ProductCard.css";
import "boxicons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const MenuCard = ({ id, image, name, price, discount }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    setIsAdded(true);
    setQuantity(quantity + 1);

    const item = {
      id,
      image,
      name,
      price,
      discount,
      quantity: 1, // Assuming quantity is set to 1 when adding to cart initially
    };

    dispatch(addToCart(item));

    // Log the item details to the console
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
          <box-icon name="heart"></box-icon>
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
                onClick={handleAddToCart}
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

export default MenuCard;
