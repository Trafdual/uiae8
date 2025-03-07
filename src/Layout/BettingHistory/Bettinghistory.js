import React, { useState } from "react";
import "./Bettinghistory.scss";
import { FaCaretDown, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const gameStatuses = [
  { status: "Thắng", odds: "2.33%", state: "win", timedau: "01/11/2025 12:58:50 PM", time: "01/11/2025 12:58:50 PM", amount: 200 },
  { status: "Thua", odds: "1.15%", state: "lose", timedau: "01/11/2025 12:58:50 PM", time: "02/11/2025 12:30:00 PM", amount: 300 },
  { status: "Hòa", odds: "3.00%", state: "draw", timedau: "01/11/2025 12:58:50 PM", time: "03/11/2025 02:15:00 PM", amount: 150 },
];

const GameStatusDropdown = () => (
  <div className="dropdown-container">
    <label className="status-label">Trạng thái</label>
    <div className="dropdown-container-l">
      <select>
        <option value="0">Toàn bộ</option>
        <option value="1">Đã xử lý</option>
        <option value="2">Đang tiến hành</option>
        <option value="3">Hệ thống hủy</option>
        <option value="4">Từ chối</option>
        <option value="5">Vô hiệu</option>
        <option value="6">Người chơi hủy</option>
      </select>
      <FaCaretDown className="status-icon" />
    </div>
  </div>
);

const TimePicker = ({ label, id, type, defaultValue }) => (
  <div className="time-container">
    <label htmlFor={id} className="status-label">{label}</label>
    <input type={type} id={id} defaultValue={defaultValue} className="date-input" />
  </div>
);

const GameCard = ({ game }) => (
  <div className="bet-card">
    <div className="bet-header">
      <div>Trạng thái: <strong className={game.state}>{game.status}</strong></div>
      <span className="bet-odds">{game.odds}</span>
    </div>
    <div className="bet-details">
      <p><strong>Bóng đá / Trực tiếp FT.1X2</strong></p>
      <p className="match-info">
        <span className="highlight">Modbury Jets vs Adelaide Blue Eagles [0-0]</span>
      </p>
      <p>Giờ đấu: {game.timedau}</p>
      <p>Thời gian cược: {game.time}</p>
      <div className="copy">
        <p>52360B1333338</p>
      </div>
    </div>
    <hr />
    <div className="bet-footer">
      <div className="bet-amount">
        <p>Tiền cược</p>
        <div className="amountorange">{game.amount}</div>
      </div>
    </div>
  </div>
);

const GameHistory = () => {
  return (
    <div className="container-bettinghistory">
      <div className="header-app">
        <Link to="/account">
          <img src="../../assets/images/backicon.png" alt="Back" className="back-icon" />
        </Link>
        Lịch Sử Trò Chơi
      </div>
      <div className="game-history-search-form-1">
        <GameStatusDropdown />
        <div className="time-picker">
          <TimePicker label="Thời gian từ" id="start-date" type="date" defaultValue="2025-01-05" />
          <TimePicker id="start-time" type="time" defaultValue="08:00" />
        </div>
        <div className="time-picker">
          <TimePicker label="Thời gian kết thúc" id="end-date" type="date" defaultValue="2025-01-05" />
          <TimePicker id="end-time" type="time" defaultValue="18:00" />
        </div>
        <div className="info"><FaInfoCircle /> <small>Kiểm tra lịch sử giao dịch 31 ngày gần đây</small></div>
        <button className="nrc-button">Tìm kiếm</button>
        <div className="game-history-search-form">
          {
          gameStatuses.map((game, index) => (
            <GameCard key={index} game={game} />
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default GameHistory;
