import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./KhuyenMaiDetail.scss";

const KhuyenMaiDetail = () => {
  const { id } = useParams();
  const [promotion, setPromotion] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/promo/${id}`)
      .then(response => {
        setPromotion(response.data);
      })
      .catch(error => {
        console.error("Lỗi khi lấy chi tiết khuyến mãi:", error);
      });
  }, [id]);

  if (!promotion) {
    return <div>Đang tải...</div>;
  }

  return (
    <div className="container-khuyenmai-detail">
      <header className="headerKhuyenMai">
        <Link to="/khuyenmai">
          <img src="../assets/images/back.png" alt="Back" className="back-icon" />
        </Link>
        Chi tiết khuyến mãi
      </header>

      <div className="detail-container">
        <img src={`https://ae8.pro/${promotion.displayed_photo}`} alt={promotion.name} className="detail-image" />
        <h2>{promotion.name}</h2>
        <p>{promotion.description}</p>
        <p>Thời gian: {promotion.start_date} - {promotion.end_date}</p>
      </div>
    </div>
  );
};

export default KhuyenMaiDetail;
