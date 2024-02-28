import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectWishlistTotalItems } from "../features/cart/wishlistSlice";

const Wishlist = () => {
  const totalItems = useSelector(selectWishlistTotalItems);
  console.log("totalItems for wishlist", totalItems);

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
