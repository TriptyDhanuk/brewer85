// Notification.js
import React from 'react';
import './Notification.css';

const RemoveNotification = () => {
  return (
    <div className="py-2 px-4 text-sm font-semibold text-white text-center rounded-lg bg-red-500 inline-block">
      <div className="notification">
        Successfully removed this item
      </div>
    </div>
  );
};

export default RemoveNotification;
