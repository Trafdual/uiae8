import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../VeChungToi/VeChungToi.scss";
const TroGiup = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/pages/ho-tro"
        );
        setContent(response.data.content);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="about-me-container">
      <div className="about-me-header">
        <Link to="/member/setting">
          <div className="about-me-icback">
            <img src="/assets/images/ic_back_white.png" alt="Back" />
          </div>
        </Link>
        <div className="about-me-text">Hỗ trợ</div>
      </div>
      <div className="about-me-content">
      <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default TroGiup;
