import React, { useState } from "react";
import './BankInfoUpdate.scss';
import { Link } from "react-router-dom";
import { ModalCapCha } from "../../LoginLayout/ModalCapCha";
import { Loading } from "../../../component/Loading";
import Notification from "../../../component/Notification/Notifition";

const BankInfoUpdate = () => {
    const [bank, setBank] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [accountOwner, setAccountOwner] = useState("");
    const [modalCapcha, setisModalCapcha] = useState(false);
    const [loading, setloading] = useState(false);
    const [thongbao, setthongbao] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!bank || !accountNumber) {
            setMessage("Vui lòng điền đầy đủ thông tin.");
            setthongbao(true);
            return;
        }
        setisModalCapcha(true);
    };

    return (
        <>
            <div className="security-bank-container">
                <div className="security-bank-header">
                    <Link to="/member">
                        <div className="security-bank-icback">
                            <img src="/assets/images/ic_back_white.png" alt="Quay lại" />
                        </div>
                    </Link>
                    <div className="security-bank-title">Cập nhật thông tin ngân hàng</div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="security-bank-input">
                        <div className="bank-form-group">
                            {/* <label htmlFor="select-bank">Chọn ngân hàng (<span>*</span>)</label> */}
                            <select id="select-bank" required value={bank} onChange={(e) => setBank(e.target.value)}>
                                <option value="" disabled>Chọn ngân hàng</option>
                                <option value="nhnn">Ngân hàng nhà nước (NHNN)</option>
                            </select>
                        </div>
                        <div className="bank-form-group">
                            {/* <label htmlFor="number-account">Số tài khoản (<span>*</span>)</label> */}
                            <input 
                                type="text" 
                                id="number-account" 
                                placeholder="Số tài khoản nhận tiền" 
                                required 
                                value={accountNumber} 
                                onChange={(e) => setAccountNumber(e.target.value)}
                            />
                        </div>
                        <div className="bank-form-group">
                           
                            <input 
                                type="text" 
                                id="owner-acc" 
                                placeholder="Tên trên tài khoản ngân hàng" 
                                required 
                                value={accountOwner} 
                                onChange={(e) => setAccountOwner(e.target.value)}
                                disabled
                            />
                            <small>
                                Bạn không thể chỉnh sửa được thông tin chủ tài khoản, vui lòng liên hệ quản trị viên nếu muốn thay đổi.
                            </small>
                        </div>
                        <button type="submit" className="bank-submit-button">Cập nhật</button>
                    </div>
                </form>
            </div>
            <Notification
                message={message}
                isVisible={thongbao}
                onClose={() => setthongbao(false)}
            />
            <ModalCapCha
                isOpen={modalCapcha}
                onClose={() => setisModalCapcha(false)}
                loading={loading}
                setloading={setloading}
                Event={() => console.log({ bank, accountNumber, accountOwner })}
            />
            <Loading isLoading={loading} />
        </>
    );
};

export default BankInfoUpdate;
