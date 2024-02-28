// Notification.js
import React from 'react';
import './Notification.css';

const WishlistNotification = ({ productName }) => {
  return (
    <div className="notification-container">
      <div className="notification">
        {productName} added to Wishlist
      </div>
    </div>
  );
};

export default WishlistNotification;
