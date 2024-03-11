import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartTotalItems } from "../features/cart/cartSlice";

const CartIconBadge = () => {
  const totalItems = useSelector(selectCartTotalItems);

  return (
    <Link to="/checkout" className="cart-icon-container relative">
      <box-icon name='cart'></box-icon>
      {totalItems > 0 && <span className="cart-badge w-5 h-5 text-sm font-semibold text-white flex justify-center items-center rounded-full bg-red-600 absolute -top-1 -right-3">{totalItems}</span>}
    </Link>
  );
};

export default CartIconBadge;
