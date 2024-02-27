import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSavedForLaterItems } from "../features/cart/cartSlice";

const Wishlist = () => {
  const savedForLaterItems = useSelector(selectSavedForLaterItems);
  const totalItems = savedForLaterItems ? savedForLaterItems.length : 0;

  return (
    <Link to="/wishlist" className="wishlist-icon-container">
      <box-icon type="solid" name="heart">
        {totalItems > 0 && <span className="wishlist-badge">{totalItems}</span>}
      </box-icon>
    </Link>
  );
};

export default Wishlist;
