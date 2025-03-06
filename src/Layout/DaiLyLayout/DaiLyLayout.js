import { React, useState, useEffect, useRef } from "react";
import "./DaiLyLayout.scss";
import Notification from "../../component/Notification/Notifition";

const DaiLyLayout = () => {
  const [showNoti, setShowNoti] = useState(false);
  const [notiMessage, setNotiMessage] = useState("");
  const qrRef = useRef(null); // Dùng useRef để lấy ảnh QR

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setNotiMessage("Đã sao chép vào clipboard!");
      setShowNoti(true);
    });
  };
  useEffect(() => {
    if (showNoti) {
      const timer = setTimeout(() => setShowNoti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showNoti]);

  const handleDownloadQR = () => {
    if (!qrRef.current) return;

    const link = document.createElement("a");
    link.href = qrRef.current.src;

    link.download = "QR_Code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (

    <div className="container-daily">
      <Notification
        message={notiMessage}
        isVisible={showNoti}
        onClose={() => setShowNoti(false)}
      />


      <header className="header-daily">
        <div className="name-daily">Quản lý đại lý</div>
      </header>

      <div className="container-daily2">
        <div className="profile">
          <img
            src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQX2zrwqVMm5lcD277n5WWcPMw7rM9eMj8UIDGHVT-ZbsmRHejE1i6cqPzPi3Hu6w1j3T9u4ZrwgFe3rMU"
            alt="Avatar"
            className="avatar"
          />
          <div className="info">
            <div className="container-name">
              <img src="../assets/images/daily/vip.gif" alt="Gift" className="gift" />
              <span className="username">abcabc123</span>
            </div>
            <div className="role">
              <img src="../assets/images/daily/kimcuong.png" alt="Kim cương" className="kimcuong" />
              <span>Đại lý</span>
            </div>
          </div>
        </div>

        {/* Link giới thiệu */}
        <div className="link-section">
          <h4>Link giới thiệu</h4>
          <div className="link-box">
            <span className="link-text">https://okebet.vn/auth/register?code=59085A</span>
            <img
              src="../assets/images/daily/copy.png"
              alt="Copy Icon"
              className="icon-copy"
              onClick={() => handleCopy("https://okebet.vn/auth/register?code=59085A")}
            />
          </div>
          <div className="qr-section">
            <img src="../assets/images/daily/qr.png" ref={qrRef} alt="QR Code" className="qr-code" />
            <div className="qr-info">
              <div className="qr-text-copy">
                <p>Mã giới thiệu: <strong className="link-text">59085A</strong></p>
                <img
                  src="../assets/images/daily/copy.png"
                  alt="Copy Icon"
                  className="icon-copy"
                  onClick={() => handleCopy("59085A")}
                />
              </div>
              <button className="save-qr" onClick={handleDownloadQR}>
                Lưu mã QR
              </button>
            </div>
          </div>
        </div>

        {/* Thống kê */}
        <div className="stats">
          {["Trực thuộc", "Đội nhóm"].map((title, index) => (
            <div className="card" key={index}>
              <span>{title}</span>
              <div className="table-container">
                <div className="row header">
                  <span></span>
                  <span>Hôm nay</span>
                  <span>Hôm qua</span>
                </div>
                {["Hoa hồng", "Đăng ký", "Hiệu quả"].map((label, idx) => (
                  <div className="row" key={idx}>
                    <span>{label}</span>
                    <span>0</span>
                    <span>0</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Menu */}
        <div className="menu">
          {[
            { name: "Trực thuộc", link: "./tructhuoc/tructhuoc.html", img: "../assets/images/daily/group.png" },
            { name: "Đội nhóm", link: "./tructhuoc/doinhom.html", img: "../assets/images/daily/group.png" },
            { name: "Hoa hồng", link: "./tructhuoc/hoahong.html", img: "../assets/images/daily/hoahong.png" }
          ].map((item, index) => (
            <a href={item.link} key={index}>
              <div className="nhom">
                <img src={item.img} alt={item.name} className="icon-gr" />
                <span>{item.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>


    </div>
  );
};

export default DaiLyLayout;
