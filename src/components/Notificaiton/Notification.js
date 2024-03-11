// Notification.js
import React from 'react';
import './Notification.css';

const Notification = ({ quantity, productName }) => {
  return (
    <div className="notification-container">
      <div className="notification">
        {quantity} {productName} added to cart
      </div>
    </div>
  );
};

export default Notification;
