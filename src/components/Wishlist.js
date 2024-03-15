import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectWishlistTotalItems } from "../features/cart/wishlistSlice";

const Wishlist = () => {
  const totalItems = useSelector(selectWishlistTotalItems);
  console.log("totalItems for wishlist", totalItems);

  return (
    <Link to="/wishlist" className="wishlist-icon-container relative mr-4">
      <box-icon name='heart'></box-icon>
        {totalItems > 0 && <span className="cart-badge w-5 h-5 text-sm font-semibold text-white flex justify-center items-center rounded-full bg-red-600 absolute -top-1 -right-3">{totalItems}</span>}
    </Link>
  );
};

export default Wishlist;
