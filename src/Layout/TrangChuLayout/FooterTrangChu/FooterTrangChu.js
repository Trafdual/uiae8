import React from "react";
import "./FooterTrangChu.scss";




const socialLinks = [
  {
    href: "https://www.facebook.com/pb1jun88",
    img: "/assets/images/facebook.webp",
  },
  { href: "https://553389.com/Youtube", img: "/assets/images/youtube.png" },
  {
    href: "https://553389.com/giaitritonghop",
    img: "/assets/images/telegram.png",
  },
  { href: "/", img: "/assets/images/messenger.png" },
  { href: "/", img: "/assets/images/email.png" },
  { href: "/", img: "/assets/images/tiktok.png" },
  { href: "/", img: "/assets/images/phone.png" },
];

const FooterTrangChu = () => {
  return (
    <div className="footer-trangchu">
      <img
        src="/assets/images/imgfooter.webp"
        alt="Footer"
        className="imgfooter"
      />

      <div className="divthuonghieu">
        <p></p>
        <div className="footer-sns">
          <div className="footer-title">Theo dõi chúng tôi</div>
          <div className="sns-list">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noreferrer">
                <img src={link.img} alt="social" loading="lazy" />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-des">
        AE8 là sản phẩm độc quyền được sở hữu và điều hành bởi Betradar, một thương hiệu nổi bật thuộc Sportradar AG, công ty hàng đầu toàn cầu trong lĩnh vực dữ liệu thể thao và giám sát cá cược. Sportradar AG được đăng ký tại Thụy Sĩ với mã số công ty CHE-113.863.926 MWST, và có trụ sở chính tại Turbinenstrasse 35, CH-8005 Zurich, Switzerland. Khám phá thêm về các dịch vụ và giải pháp của Betradar tại {" "}
        <a href="https://www.betradar.com" target="blank">https://www.betradar.com</a>
        </div>
      </div>

      <div className="box-height"></div>
    </div>
  );
};

export default FooterTrangChu;
