import React from "react";
import "./KhuyenMaiLayout.scss";

const KhuyenMaiLayout = () => {
  return (
    <div className="container-khuyenmai">
      <header className="headerKhuyenMai">
        <a href="/trangchu/trangchu.html">
          <img src="../assets/images/trangchu.png" alt="Avatar" className="home-icon" />
        </a>
        Khuyến mãi
      </header>

      <div className="container-khuyenmai2">
        <div className="all-promotions">Tất cả khuyến mại</div>
        <div className="promotion-card">
          <a href="/promotion/DetailPromotion/detail_promotion.html">
            <img src="/assets/images/1.webp" alt="Promotion" />
           
          </a>
        </div>
      </div>
    </div>
  );
};

export default KhuyenMaiLayout;
