import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../features/cart/cartSlice";
import "./ViewCart.css";
import carticon from "./iconBag.png"

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
        <button className="view-cart-button py-3 px-5 rounded-2xl bg-orange-600 fixed bottom-5 right-5 flex items-center text-white shadow-lg shadow-orange-300" onClick={handleCheckout}>
          <div className="mr-3 pr-1 border-r border-solid border-orange-300">
            <img src={carticon} className="grayscale invert" />
          </div>
          <div className="text-left">
            <div className="text-lg font-bold">
              {allCartProductsCount} Item | ₹ {allCartItemsPrice}
            </div>
            <div className="text-xl font-bold uppercase tracking-wide">Checkout</div>
          </div>
        </button>
      )}
    </>
  );
};

export default ViewCart;
