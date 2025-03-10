import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./KhuyenMaiLayout.scss";

const KhuyenMaiLayout = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/promo")
      .then(response => {
        setPromotions(response.data);
      })
      .catch(error => {
        console.error("Lỗi khi lấy danh sách khuyến mãi:", error);
      });
  }, []);

  return (
    <div className="container-khuyenmai">
      <header className="headerKhuyenMai">
        <Link to="/">
          <img src="../assets/images/trangchu.png" alt="Avatar" className="home-icon" />
        </Link>
        Khuyến mãi
      </header>

      <div className="container-khuyenmai2">
        <div className="all-promotions">Tất cả khuyến mại</div>
        <div className="promotion-list">
          {promotions.map((promo) => (
            
            <div className="promotion-card" key={promo.id}>
              <Link to={`/khuyenmai/${promo.id}`}>
                <img src={`https://ae8.pro/${promo.banner}`} alt={promo.name} />
              </Link>
              <div className="promotion-name">{promo.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KhuyenMaiLayout;
