import React from "react";

const Casino = () => {
  return (
    <div className="section">
      <h2>Casino</h2>
      <div className="casino-container">
        <div className="item-casino">
          <div className="game-content">
            <div
              className="game-logo"
              style={{
                backgroundImage: "url('https://img.alltocon.com/img/static/gplogo/h-primary/wm.png')",
              }}
            ></div>
            <div
              className="game-col-cover"
              style={{
                backgroundImage: "url('https://img.alltocon.com/img/static/col_cover/live_wm.png')",
              }}
            ></div>
            <img
              className="customized-content"
              src="/assets/images/anhwm.webp"
              alt="Live Casino WM Casino"
              loading="eager"
            />
          </div>
          <div className="game-info">
            <h3 style={{ backgroundImage: "url('/assets/images/logowm.webp')" }}>WM</h3>
            <div className="pd-name" data-type="LIVE">WM</div>
            <button>Bắt đầu</button>
          </div>
        </div>

        <div className="item-casino">
          <div className="game-content">
            <img className="customized-content" src="/assets/images/anhsexy.png" alt="Live Casino" loading="eager" />
          </div>
          <div className="game-info">
            <h3 style={{ backgroundImage: "url('/assets/images/logosexy.webp')" }}>Sexy</h3>
            <div className="pd-name" data-type="LIVE">Sexy</div>
            <button>Bắt đầu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casino;
