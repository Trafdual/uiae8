import React, { useState } from "react";
import "./TaiKhoanLayout.scss";
import { Link } from "react-router-dom";
const TaiKhoanLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const username = "ae12123"; 

  const dangxuat = () => {
    setIsLoggedIn(false);
    alert("Bạn đã đăng xuất!");
  };

  return (
    <div className="account-container">
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
              <div className="balance">
                <div>0.00</div>
                <img src="/assets/images/reload2.png" alt="Reload" />
              </div>
            </div>
          </div>
        ) : (
          <div className="account-dkdn">
            <p className="header-text">
              Xin chào, vui lòng <Link to="/login">Đăng nhập</Link> /{" "}
              <Link to="/register">Đăng ký</Link>
            </p>
          </div>
        )}
      </div>

      {/* DANH SÁCH CHỨC NĂNG */}
      <div className="account-function">
        <div className="function-list">
          {[
            { link: "/member/deposit", img: "/assets/images/naptien.png", text: "Nạp tiền" },
            { link: "/member/withdraw", img: "/assets/images/ruttien.png", text: "Rút tiền" },
            {
              link: "/member/transactionhistory",
              img: "/assets/images/lichsugiaodich.png",
              text: "Lịch Sử Giao Dịch",
            },
            {
              link: "/member/bettinghistory",
              img: "/assets/images/lichsutrochoi.png",
              text: "Lịch sử trò chơi",
            },
          ].map((item, index) => (
            <Link key={index} to={item.link} className="function-item">
              <div className="icon-function">
                <img src={item.img} alt={item.text} />
              </div>
              <div className="function-name">
                <p>{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* MENU BLOCK */}
      <div className="menu-block">
        {[
          { link: "/member/setting", img: "../assets/images/account/caidat.png", text: "Cài đặt" },
          { link: "/member/security", img: "../assets/images/account/baomat.png", text: "Bảo mật" },
          { link: "/member/setting", img: "../assets/images/account/thenganhang.png", text: "Quản lý thẻ ngân hàng" },
          { link: "/member/help", img: "../assets/images/account/gioithieubb.png", text: "Giới thiệu bạn bè" },

          { link: "/khuyenmai", img: "../assets/images/account/khuyenmai2.png", text: "Khuyến mãi" },

          { link: "/member/setting/help", img: "../assets/images/account/dvkh.png", text: "Trợ giúp" },
        ].map((item, index) => (
          <Link key={index} to={item.link}>
            <div className="menu-block-item">
              <img src={item.img} alt={item.text} className="menu-item-icon" />
              <div className="menu-item-name">{item.text}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="navbar"></div>
    </div>
  );
};

export default TaiKhoanLayout;
