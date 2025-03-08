import React from "react";
import { Link } from "react-router-dom";
import "./Wallet.scss";

const Wallet = () => {
  return (
    <div className="wallet">
      <div className="nav-item">
        <img src="../assets/images/chucnang.png" alt="Trang Chủ" className="icon" />
        <span> Chức Năng </span>
      </div>

      <Link to="/daily">
        <div className="nav-item">
          <img src="../assets/images/daily.png" alt="Khuyến Mãi" className="icon" />
          <span> Đại Lý </span>
        </div>
      </Link>

      <Link to="/member/setting/help">
        <div className="nav-item">
          <img src="../assets/images/huongdan.png" alt="VIP" className="icon" />
          <span> Hướng Dẫn </span>
        </div>
      </Link>

      <Link to="/member/deposit">
        <div className="nav-item">
          <img src="../assets/images/naptien.png" alt="Tải APP" className="icon" />
          <span> Nạp Tiền </span>
        </div>
      </Link>

      <Link to="/member/withdraw">
        <div className="nav-item">
          <img src="../assets/images/ruttien.png" alt="Tài Khoản" className="icon" />
          <span> Rút Tiền </span>
        </div>
      </Link>
    </div>
  );
};

export default Wallet;
