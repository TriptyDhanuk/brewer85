import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartTotalItems } from "../features/cart/cartSlice";

const Wishlist = () => {
  const totalItems = useSelector(selectCartTotalItems);

  return (
    <Link to="/wishlist" className="cart-icon-container">
      <box-icon type="solid" name="heart">
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </box-icon>
    </Link>
  );
};

export default Wishlist;
