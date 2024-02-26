import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartTotalItems } from "../features/cart/cartSlice";

const CartIconBadge = () => {
  const totalItems = useSelector(selectCartTotalItems);

  return (
    <Link to="/checkout" className="cart-icon-container">
      <i className="fas fa-shopping-cart" style={{ marginRight: "1.8rem", position: "relative" }}>
        {totalItems > 0 && (
          <span className="cart-badge">{totalItems}</span>
        )}
      </i>
    </Link>
  );
};

export default CartIconBadge;
