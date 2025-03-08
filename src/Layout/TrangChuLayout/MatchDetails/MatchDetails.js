import React, { useState } from "react";
import "./MatchDetails.scss";
import { Link } from "react-router-dom";

const MatchDetails = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container-detailsmatch">
      <header className="head">
        <div className="divimgback">
          <Link to="/">
            <img src="../assets/images/back.png" alt="Back" />
          </Link>
        </div>
        <div className="divtttd">
          <h4>Thông Tin Trận Đấu</h4>
        </div>
      </header>

     
        <div className="game-info1">
          <div className="league-name">
            <h4>Cambodian Premier League</h4>
          </div>
          <div className="team-box">
            <Team name="Angkor Tiger FC" logo="/assets/images/doi1.jpe" />
            <GameDate date="23:13 28/12" countdown="01:00:00" />
            <Team name="Angkor Tiger FC" logo="/assets/images/doi1.jpe" />
          </div>
        </div>

        <div className="divnghichtyso">
          <Tabs />
          <ScorePredictions openModal={() => setShowModal(true)} />
        </div>
      

      {showModal && <BetModal closeModal={() => setShowModal(false)} />}
    </div>
  );
};

const Team = ({ name, logo }) => (
  <div className="team-item">
    <img src={logo} alt={name} className="team-logo" />
    <div className="team-name">{name}</div>
  </div>
);

const GameDate = ({ date, countdown }) => (
  <div className="game-date">
    <div className="date">
      <b>{date}</b>
    </div>
    <div className="time">
      <span>{countdown}</span>
    </div>
  </div>
);

const Tabs = () => {
  const tabNames = [
    "FT Tỷ số",
    "FT Chẵn lẻ",
    "FT Thắng Hòa Thua",
    "HT Tỷ số",
    "H2T Tỷ số",
    "HT Thắng Hòa Thua",
  ];

  return (
    <div className="m-tab">
      {tabNames.map((tab, index) => (
        <button key={index} className={`m-tab-item ${index === 0 ? "active" : ""}`}>
          {tab}
        </button>
      ))}
    </div>
  );
};

const ScorePredictions = ({ openModal }) => {
  const predictions = [
    { score: "1 - 0", percentage: "20%" },
    { score: "1 - 1", locked: true },
  ];

  return (
    <div className="bodynghich">
      {predictions.map((item, index) => (
        <div key={index} className="item-nghich" onClick={!item.locked ? openModal : null}>
          <p>{item.score}</p>
          {item.locked ? (
            <img src="../assets/images/cskh/lock2.png" alt="Locked" />
          ) : (
            <p>{item.percentage}</p>
          )}
        </div>
      ))}
    </div>
  );
};

const BetModal = ({ closeModal }) => (
  <div id="modal" className="modal">
    <div className="modal-content">
      <div className="tieudemodal">
        <button className="close-modal" onClick={closeModal}>x</button>
        <h4>Đặt cược</h4>
      </div>
      <form>
        <div className="sotien">
          <p>Số tiền:</p>
          <input placeholder="Hạn mức một giao dịch tối thiểu 10 coin" disabled required />
        </div>
        <div className="btnmodal">
          <button className="btnhuy" type="button" onClick={closeModal}>Hủy bỏ</button>
          <button type="submit" className="place-bet">Đặt cược</button>
        </div>
      </form>
    </div>
  </div>
);

export default MatchDetails;
