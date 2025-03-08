import React from "react";
import { Link } from "react-router-dom";
import "./VeChungToi.scss";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-header">
        <Link to="/member/setting">
          <div className="about-me-icback">
            <img src="/assets/images/ic_back_white.png" alt="Back" />
          </div>
        </Link>
        <div className="about-me-text">Về chúng tôi</div>
      </div>

      <div className="about-me-content">
        {[
          `AE8 - Thách thức mọi giới hạn`,
          `AE8 tự hào là một trong những nền tảng game uy tín, chất lượng cao và được yêu thích hàng đầu tại Việt Nam. Với hàng nghìn người chơi đã đăng ký, AE8 không ngừng khẳng định vị thế tiên phong bằng sự an toàn, tiện lợi và trải nghiệm tuyệt vời cho khách hàng.`,
          `Trò Chơi Hấp Dẫn, Tương Thích Mọi Thiết Bị`,
          `Tại AE8, mọi khách hàng đều được tận hưởng những trò chơi giải trí phong phú, tỷ lệ cược cao cùng trải nghiệm mượt mà trên tất cả các thiết bị. Chỉ cần vài thao tác đơn giản, bạn có thể tham gia mọi lúc, mọi nơi mà không bị giới hạn.`,
          `Hệ Thống Thanh Toán Nhanh Chóng và An Toàn`,
        ].map((paragraph, index) => (
          <div key={index} className="para-about-me">
            {paragraph}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
