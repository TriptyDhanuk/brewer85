import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectWishlistTotalItems } from "../features/cart/wishlistSlice";

const Wishlist = () => {
  const totalItems = useSelector(selectWishlistTotalItems);
  console.log("totalItems for wishlist", totalItems);

  return (
    <Link to="/wishlist" className="wishlist-icon-container relative mr-4">
      {/* <box-icon name='heart'></box-icon> */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="lg:h-10 lg:w-10" style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msFilter: "" }}><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
        {totalItems > 0 && <span className="cart-badge w-5 h-5 text-sm font-semibold text-white flex justify-center items-center rounded-full bg-red-600 absolute -top-1 -right-3">{totalItems}</span>}
    </Link>
  );
};

export default Wishlist;
