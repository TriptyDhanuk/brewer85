// Notification.js
import React from 'react';
import './Notification.css';

const WishlistNotification = ({ productName }) => {
  return (
    <div className="py-2 px-4 text-sm font-semibold text-white text-center rounded-lg bg-green-500 inline-block">
      <div className="notification">
        {productName} added to Wishlist
      </div>
    </div>
  );
};

export default WishlistNotification;
