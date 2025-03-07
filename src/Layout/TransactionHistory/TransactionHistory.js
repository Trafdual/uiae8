import React, { useState, useEffect } from "react";
import "./TransactionHistory.scss";

const sampleData = [
  { date: "25-12-2024", type: "Deposit", code: "74ED7190", amount: "300.000đ", status: "success" },
  { date: "25-12-2024", type: "Deposit", code: "74ED7188", amount: "100.000đ", status: "pending" },
  { date: "25-12-2024", type: "Deposit", code: "74ED7189", amount: "200.000đ", status: "failed" },
  { date: "25-12-2024", type: "Deposit", code: "74ED7190", amount: "300.000đ", status: "success" },
];

const getStatusText = (status) => {
  switch (status) {
    case "pending":
      return "Chờ xử lý";
    case "failed":
      return "Thất bại";
    case "success":
      return "Thành công";
    default:
      return "Không xác định";
  }
};

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(sampleData); 
  }, []);

  return (
    <div className="transaction-container">
      <div className="transaction-header">
        <a href="/account/account.html">
          <div className="ic-back">
            <img src="/assets/images/ic_back_white.png" alt="Back" />
          </div>
        </a>
        <div className="transaction-text">Lịch Sử Giao Dịch</div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Ngày</th>
              <th>Type</th>
              <th>Code</th>
              <th>Số tiền</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.type}</td>
                <td>{transaction.code}</td>
                <td>{transaction.amount}</td>
                <td className={`status ${transaction.status}`}>
                  {getStatusText(transaction.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
