import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../features/cart/cartSlice";

const Wishlist = () => {
  const savedForLaterItems = useSelector(selectCartItems);
  const totalItems = savedForLaterItems ? savedForLaterItems.length : 0;

  return (
    <Link to="/wishlist" className="wishlist-icon-container">
      <i
        className="fas fa-heart"
        style={{ marginRight: "1.8rem", position: "relative" }}
      >
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </i>
    </Link>
  );
};

export default Wishlist;
