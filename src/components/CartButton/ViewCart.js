import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../features/cart/cartSlice";
import "./ViewCart.css";

const ViewCart = () => {
  const [allCartItemsPrice, setAllCartItemsPrice] = useState([]);
  const [allCartProductsCount, setAllCartProductsCount] = useState(0);
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    const subTotal = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setAllCartItemsPrice(subTotal);

    const totalCount = cartItems.reduce((count, item) => {
      return count + item.quantity;
    }, 0);
    setAllCartProductsCount(totalCount);
  }, [cartItems]);
  const handleCheckout = () => {
    window.location.href = "/checkout";
  };

  return (
    <>
      {" "}
      {allCartProductsCount > 0 && (
        <button className="view-cart-button" onClick={handleCheckout}>
          <div>
            {allCartProductsCount} Item | ₹ {allCartItemsPrice}
          </div>
          <div>Checkout</div>
        </button>
      )}
    </>
  );
};

export default ViewCart;
