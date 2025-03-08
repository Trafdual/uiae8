import React, { useState } from "react";
import "./Bettinghistory.scss";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const gameStatuses = [
  { status: "Thắng", odds: "2.33%", state: "win", timedau: "01/11/2025 12:58:50 PM", time: "01/11/2025 12:58:50 PM", amount: 200 },
 
];

const GameStatusDropdown = () => (
  <div class="dropdown-container">
          <div class="dropdown-container-l">
            <label for="status-dropdown" class="status-label">
              Trạng thái
            </label>
            <select id="status-dropdown">
              <option value="member/bet-history">Đang xử lý</option>
              <option value="member/bet-history-done" selected="">Đã hoàn thành</option>
            </select>
          </div>
          <div class="dropdown-container-r">
          <FaCaretDown className="status-icon" />

          </div>
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
              <div className="amountorange">${game.amount}</div>
            </div>
            <div className="bet-amount">
              <p>Lợi nhuận</p>
              <div className="amountorange">4.66</div>
            </div>
            <div className="bet-amount">
              <p>Phí cược</p>
              <div className="amountorange">0.23</div>
            </div>
            <div className="bet-amount">
              <p>Lợi nhuận dòng</p>
              <div className="amountorange">5.38</div>
            </div>
            
          </div>
  </div>
);

const GameHistory = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <div className="container-bettinghistory">
      <div className="header-app">
        <Link to="/member">
          <img src="../../assets/images/backicon.png" alt="Back" className="back-icon" />
        </Link>
        Lịch Sử Trò Chơi
      </div>
      <div className="game-history-search-form-1">
        <GameStatusDropdown />
        <div className="time-picker">
            <div className="input-container">
            <DatePicker
              selected={startDate}
              onChange={(dates) => {
                const [start, end] = dates;
                setStartDate(start);
                setEndDate(end);
              }}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              dateFormat="yyyy-MM-dd"
              placeholderText="Chọn ngày"
              className="uni-input-input"
            />
            </div>
        </div>
       
        <div className="button-betting">
        <button className="nrc-button">Tìm kiếm</button>

        </div>
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
