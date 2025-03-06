import React, { useState } from "react";
import "./Header.scss";

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="header1">
      <div className="logo">
        <img src="../assets/images/logo.webp" alt="Jun88" className="logo-img" />
      </div>
      <div className="actions" id="actions">
        {!isLoggedIn ? (
          <div className="btndkdn" id="btndkdn">
            <a href="../register/register.html">
              <button className="btn btn-register">Đăng Ký</button>
            </a>
            <a href="../login/login.html">
              <button className="btn btn-login" onClick={handleLogin}>
                Đăng Nhập
              </button>
            </a>
          </div>
        ) : (
          <div className="headerdn" id="headerdn">
            <div className="rankname">
              <img src="../assets/images/rankheader.png" alt="" />
              <div>trafdual</div>
            </div>
            <div className="chatxu">
              <span>0.00</span>
              <img src="../assets/images/chatheader.png" alt="" />
            </div>
            <button className="btn btn-logout" onClick={handleLogout}>
              Đăng Xuất
            </button>
          </div>
        )}
        <img src="../assets/images/vn.webp" alt="VN Flag" className="flag-icon" />
      </div>
    </header>
  );
};

export default Header;
