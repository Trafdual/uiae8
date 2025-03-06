import React, { useState } from "react";
import "./TaiKhoanLayout.scss";
const TaiKhoanLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const username = "ae12123"; // Giả lập tên người dùng

  const dangxuat = () => {
    setIsLoggedIn(false);
    alert("Bạn đã đăng xuất!");
  };

  return (
    <div className="account-container">
      {/* HEADER */}
      <div className="account-header">
        {isLoggedIn ? (
          <div className="account-info">
            <div className="namedx">
              <div className="player">Xin chào, {username}</div>
              <div className="dx">
                <span onClick={dangxuat}>Đăng Xuất</span>
              </div>
            </div>
            <div className="xu">
              <div className="currency">VNĐ(k)</div>
              <div className="balance">
                <div>0.00</div>
                <img src="/assets/images/reload2.png" alt="Reload" />
              </div>
            </div>
          </div>
        ) : (
          <div className="account-dkdn">
            <p className="header-text">
              Xin chào, vui lòng <a href="/login">Đăng nhập</a> /{" "}
              <a href="/register">Đăng ký</a>
            </p>
          </div>
        )}
      </div>

      {/* DANH SÁCH CHỨC NĂNG */}
      <div className="account-function">
        <div className="function-list">
          {[
            { link: "#", img: "/assets/images/naptien.png", text: "Nạp tiền" },
            { link: "#", img: "/assets/images/ruttien.png", text: "Rút tiền" },
            {
              link: "/transaction_history",
              img: "/assets/images/lichsugiaodich.png",
              text: "Lịch Sử Giao Dịch",
            },
            {
              link: "/account/bettinghistory",
              img: "/assets/images/lichsutrochoi.png",
              text: "Lịch sử trò chơi",
            },
          ].map((item, index) => (
            <a key={index} href={item.link} className="function-item">
              <div className="icon-function">
                <img src={item.img} alt={item.text} />
              </div>
              <div className="function-name">
                <p>{item.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* MENU BLOCK */}
      <div className="menu-block">
        {[
          { link: "#", img: "../assets/images/account/caidat.png", text: "Cài đặt" },
          { link: "/account/security", img: "../assets/images/account/baomat.png", text: "Bảo mật" },
          { link: "/account/setting", img: "../assets/images/account/thenganhang.png", text: "Quản lý thẻ ngân hàng" },
          { link: "/account/help", img: "../assets/images/account/gioithieubb.png", text: "Giới thiệu bạn bè" },

          { link: "/account/help", img: "../assets/images/account/khuyenmai2.png", text: "Khuyến mãi" },

          { link: "/account/help", img: "../assets/images/account/dvkh.png", text: "Trợ giúp" },
        ].map((item, index) => (
          <a key={index} href={item.link}>
            <div className="menu-block-item">
              <img src={item.img} alt={item.text} className="menu-item-icon" />
              <div className="menu-item-name">{item.text}</div>
            </div>
          </a>
        ))}
      </div>

      {/* NAVBAR */}
      <div className="navbar"></div>
    </div>
  );
};

export default TaiKhoanLayout;
