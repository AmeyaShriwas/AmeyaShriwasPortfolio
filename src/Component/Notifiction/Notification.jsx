// Notification.js
import React, { useState } from 'react';
import './Notification.css'; // Import CSS for styling

const NotificationContext = React.createContext();

export const useNotification = () => {
  return React.useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const showSuccess = (message) => {
    setNotifications((prev) => [...prev, { message, type: 'success' }]);
    setTimeout(() => {
      removeNotification(message);
    }, 2000);
  };

  const showError = (message) => {
    setNotifications((prev) => [...prev, { message, type: 'error' }]);
    setTimeout(() => {
      removeNotification(message);
    }, 2000);
  };

  const removeNotification = (message) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.message !== message)
    );
  };

  return (
    <NotificationContext.Provider value={{ showSuccess, showError }}>
      {children}
      <div className="notification-container">
        {notifications.map((notif, index) => (
          <div key={index} className={`notification ${notif.type}`}>
            {notif.message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};
