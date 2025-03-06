import { useState, useEffect } from "react";
import "./Notifition.scss"; 

const Notification = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div className="notification-container">
      <div className={`notification ${isVisible ? "" : "hidden"}`}>
        <img src="/assets/images/cskh/iconinfor.png" alt="Info Icon" />
        <div className="divndnotification">
          <h3>Thông báo</h3>
          <p className="ndnotification">{message}</p>
        </div>
        <div className="close-notifi" onClick={onClose}>
          x
        </div>
        <div className="thanhthoigian">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
