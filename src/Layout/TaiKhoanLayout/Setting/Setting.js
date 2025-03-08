import React from "react";
import { Link } from "react-router-dom";
import "./Setting.scss";

const menuItems = [
  { title: "Về chúng tôi", path: "/member/setting/aboutme" },
  { title: "Chính sách mật khẩu", path: "/member/setting/policy" },
  { title: "Trợ giúp", path: "/member/setting/help" },
];

const Setting = () => {
  return (
    <div className="setting-container">
      <div className="setting-header">
        <Link to="/member">
          <div className="setting-ic-back">
            <img src="/assets/images/ic_back_white.png" alt="Back" />
          </div>
        </Link>
        <div className="setting-text">Cài đặt</div>
      </div>

      <div className="setting-menu">
        {menuItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <div className="setting-menu-item">
              <div className="setting-item-title">{item.title}</div>
              <div className="setting-ic">
                <img src="/assets/images/account/ic_next.png" alt="Next" />
              </div>
            </div>
          </Link>
        ))}

        <div className="setting-menu-item">
          <div className="setting-item-title">Phiên bản số</div>
          <div className="setting-item-version">1.0.142</div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
