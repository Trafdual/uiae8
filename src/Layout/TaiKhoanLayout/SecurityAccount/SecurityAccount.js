import React from "react";
import { Link } from "react-router-dom";
import "./SecurityAccount.scss";

const SecurityAccount = () => {
  return (
    <div className="security-container">
      <div className="security-header">
        <Link to="/member">
          <div className="security-ic-back">
            <img src="/assets/images/ic_back_white.png" alt="Back" />
          </div>
        </Link>
        <div className="security-text">Bảo mật tài khoản</div>
      </div>

      <div className="security-menu">
        <Link to="/member/security/security-phone">
          <div className="security-menu-item">
            <div className="menu-item-title">Số điện thoại</div>
            <div className="menu-item-subtitle">Cập nhật</div>
          </div>
        </Link>
        <Link to="/member/security-bank">
          <div className="security-menu-item">
            <div className="menu-item-title">Tài khoản ngân hàng</div>
            <div className="menu-item-subtitle">Cập nhật</div>
          </div>
        </Link>
        <Link to="/member/security/security-bep">
          <div className="security-menu-item">
            <div className="menu-item-title">Địa chỉ ví BEP20</div>
            <div className="menu-item-subtitle">Cập nhật</div>
          </div>
        </Link>
        <Link to="/member/security/security-pass">
          <div className="security-menu-item">
            <div className="menu-item-title">Mật khẩu đăng nhập</div>
            <div className="menu-item-subtitle">Thay đổi</div>
          </div>
        </Link>
        <Link to="/member/security/security-password-withdrawal">
          <div className="security-menu-item">
            <div className="menu-item-title">Mật khẩu rút tiền</div>
            <div className="menu-item-subtitle">Thay đổi</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SecurityAccount;
