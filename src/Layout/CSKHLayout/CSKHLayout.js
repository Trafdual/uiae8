import React from "react";
import "./CSKHLayout.scss";


const CSKHLayout = () => {
  const services = [
    { img: "../assets/images/cskh/cskhtele2.png", title: "Kênh chat" },
    { img: "../assets/images/cskh/cskhtele.png", title: "Trò chuyện" },
    { img: "../assets/images/cskh/cskhlivechat.png", title: "Live chat" },
    { img: "../assets/images/cskh/cskh247.png", title: "Support" },
    { img: "../assets/images/cskh/cskhfb.png", title: "Facebook" },
    { img: "../assets/images/cskh/cskhtiktok.png", title: "Tiktok" },
  ];

  return (
    <div className="container-cskh">
      <header className="header-cskh">
        <img src="../assets/images/cskh/top-img.png" alt="Logo" className="logo" />
      </header>
      <section class="customer-service">
      <img src="../assets/images/cskh/TRUNG-TAM-DICH-2.png" alt="trungtam"/>
      
    </section>
      <section className="services">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <div className="service-trong">
              <div className="service-icon">
                <img src={service.img} alt={service.title} />
              </div>
              <p>{service.title}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="high-speed-links">
        <img src="../assets/images/cskh/TRUNG-TAM-DICH-2.png" alt="trungtam" />
        <div className="links">
          {[...Array(6)].map((_, i) => (
            <button key={i}>Link {i + 1}</button>
          ))}
        </div>
      </section>
      
      <div className="box-height"></div>
    </div>
  );
};

export default CSKHLayout;
