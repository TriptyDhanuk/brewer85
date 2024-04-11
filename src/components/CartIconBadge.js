import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartTotalItems } from "../features/cart/cartSlice";

const CartIconBadge = () => {
  const totalItems = useSelector(selectCartTotalItems);

  return (
    <Link to="/checkout" className="cart-icon-container relative">
      {/* <box-icon name='cart'></box-icon> */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="lg:h-10 lg:w-10" style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msFilter: "" }}><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg>
      {totalItems > 0 && <span className="cart-badge w-5 h-5 text-sm font-semibold text-white flex justify-center items-center rounded-full bg-red-600 absolute -top-1 -right-3">{totalItems}</span>}
    </Link>
  );
};

export default CartIconBadge;
