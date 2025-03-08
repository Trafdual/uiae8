import React from "react";
import "./DepositInfo.scss";

const DepositInfo = ({ username, balance }) => {
  return (
    <div className="deposit-info">
      <div className="deposit-info-row">
        <div className="deposit-account">
          <img src="/assets/images/naptien/deposit-acc.png" alt="Account" />
          <div className="deposit-account-name">{username}</div>
        </div>
        <div className="deposit-balance-label">
          <img src="/assets/images/naptien/ic-balance.png" alt="Balance" />
          <div className="deposit-balance-text">Số dư tài khoản</div>
        </div>
      </div>
      <div className="deposit-info-row flex-end">
        <div className="balance-value">{balance}</div>
      </div>
    </div>
  );
};

export default DepositInfo;
