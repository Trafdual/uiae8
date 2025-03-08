import React, { useState } from "react";
import "./WithDraw.scss";
import Carousel from "../TrangChuLayout/Carousel/Carousel";
import DepositInfo from "../../component/BalanceNapRut/DepositInfo";
import { Link } from "react-router-dom";
const WithDraw = () => {
  const [amount, setAmount] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const depositAmounts = [50, 100, 200, 500, 1000, 5000, 10000, 20000];
  const carouselImages = [
    "../assets/images/naptien/bannernaprut1.png",
    "../assets/images/naptien/bannernaprut2.png",
  ];
  const [password, setPassword] = useState("");
  const handleAmountClick = (value) => {
    setAmount(value);
    setReceivedAmount(value * 1000);
  };
  const handleChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setPassword(numericValue);
  };

  return (
    <div className="deposit-container">
      <div className="deposit-header">
        <Link to="/member">
          <div className="deposit-left">
            <img src="/assets/images/back.png" alt="Back" />
          </div>
        </Link>
        <div className="deposit-title">Rút tiền</div>
        <Link to={"/member/transactionhistory"}>
        <div className="deposit-right">
          <div className="deposit-icon-history">
            <img src="/assets/images/account/dvkh.png" alt="History" />
          </div>
          <div className="deposit-link-name">Lịch sử</div>
        </div>
        </Link>
      </div>
      <DepositInfo username="ae12123" balance={"1,252,200"} />
      <div className="deposit-method">
        {["quét mã qr", "usdt"].map((method) => (
          <div key={method} className="deposit-method-item">
            <img src={`/assets/images/naptien/${method}.png`} alt={method} />
            <div className="deposit-method-name">{method.toUpperCase()}</div>
          </div>
        ))}
      </div>
      <div className="deposit-input">
        <div className="deposit-info-header">
          <span>Mức rút tối thiểu là 100 coin ~ 100,000 đ</span>
          <span>
            Tối đa bạn có thể rút tối đa 1269405.510 coin ~ 1,269,405,510 đ
          </span>
        </div>
        <div className="deposit-input-box">
          <input
            type="number"
            placeholder="50 - 300000"
            name="amount"
            required
            value={amount}
            onChange={(e) => handleAmountClick(Number(e.target.value))}
          />
          <span className="currency-label">coin</span>
        </div>
        <div className="deposit-choice">
          <div className="deposit-result">= {receivedAmount} VND</div>
          <div className="deposit-units-label">Đơn vị tính là 1000</div>
          <div className="deposit-buttons">
            {depositAmounts.map((value) => (
              <button key={value} onClick={() => handleAmountClick(value)}>
                {value}
              </button>
            ))}
          </div>
        </div>
        <div className="deposit-warning-text">
          Lời nhắc nhở: Mỗi lần giao dịch không nên vượt quá 300 triệu để bảo
          đảm ngân hàng của bạn không bị ngân hàng nhà nước kiểm soát,giao dịch
          dưới 300 triệu bảo đảm mức an toàn , Hãy chú ý bảo mật thông tin của
          mình..
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ddd",
            borderRadius: "4px 4px 0 0",
            padding: "15px",
          }}
        >
          <input
            style={{
              flex: 1,
              fontSize: "16px",
              border: "none",
              outline: "none",
            }}
            type="text"
            name="password_withdrawal"
            maxLength="6"
            value={password}
            onChange={handleChange}
            placeholder="Vui lòng nhập mật khẩu rút tiền"
            required
          />
        </div>
      </div>
      <Carousel images={carouselImages} />
      <div class="deposit-proceed">
        <button type="submit" class="btn-proceed">
          Rút tiền
        </button>
      </div>
    </div>
  );
};

export default WithDraw;
