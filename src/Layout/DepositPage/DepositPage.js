import React, { useState } from "react";
import "./DepositPage.scss";
import Carousel from "../TrangChuLayout/Carousel/Carousel";

const DepositPage = () => {
  const [amount, setAmount] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const depositAmounts = [50, 100, 200, 500, 1000, 5000, 10000, 20000];
  const carouselImages = [
    "../assets/images/naptien/bannernaprut1.png",
    "../assets/images/naptien/bannernaprut2.png",

  ];

  const handleAmountClick = (value) => {
    setAmount(value);
    setReceivedAmount(value * 1000);
  };

  return (
    <div className="deposit-container">
      <div className="deposit-header">
        <a href="/trangchu/trangchu.html">
          <div className="deposit-left">
            <img src="/assets/images/back.png" alt="Back" />
          </div>
        </a>
        <div className="deposit-title">Nạp tiền</div>
        <div className="deposit-right">
          <div className="deposit-icon-history">
            <img src="/assets/images/account/dvkh.png" alt="History" />
          </div>
          <div className="deposit-link-name">Lịch sử</div>
        </div>
      </div>
      <div className="deposit-info">
        <div className="deposit-info-row">
          <div className="deposit-account">
            <img src="/assets/images/naptien/deposit-acc.png" alt="Account" />
            <div className="deposit-account-name">ae123321</div>
          </div>
          <div className="deposit-balance-label">
            <img src="/assets/images/naptien/ic-balance.png" alt="Balance" />
            <div className="deposit-balance-text">Số dư tài khoản</div>
          </div>
        </div>
        <div className="deposit-info-row flex-end">
          <div className="balance-value">0.00</div>
        </div>
      </div>
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
          <span>Hạn mức nạp 50 - 300000</span>
          <span>Không mất phí</span>
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
          <div className="deposit-received">
            Số tiền bạn nhận được: <span>{receivedAmount} coin</span>
          </div>
        </div>
        <div className="deposit-warning-text">        
            Lời nhắc nhở: Mỗi lần giao dịch không nên vượt quá 300 triệu để bảo đảm ngân hàng của bạn không bị ngân hàng nhà nước kiểm soát,giao dịch dưới 300 triệu bảo đảm mức an toàn , Hãy chú ý bảo mật thông tin của mình..
        </div>
      </div>
      <Carousel images={carouselImages}/>
    </div>
  );
};

export default DepositPage;
