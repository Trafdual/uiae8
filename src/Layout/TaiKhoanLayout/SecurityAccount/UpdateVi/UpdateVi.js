import React, { useState } from "react";
// import "./UpdatePhone.scss";
import { Link } from "react-router-dom";
import { ModalCapCha } from "../../../LoginLayout/ModalCapCha";
import { Loading } from "../../../../component/Loading";
import Notification from "../../../../component/Notification/Notifition";

const UpdateVi = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [modalCapcha, setModalCapcha] = useState(false);
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState({ show: false, message: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!phoneNumber) {
            setNotification({ show: true, message: "Vui lòng nhập số điện thoại." });
            return;
        }
        setModalCapcha(true);
    };

    return (
        <>
            <div className="security-phone-container">
                <div className="security-phone-header">
                    <Link to="/member/security">
                        <div className="security-phone-icback">
                            <img src="/assets/images/ic_back_white.png" alt="Quay lại" />
                        </div>
                    </Link>
                    <div className="security-phone-text">Cập nhật ví Crypto của bạn
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="security-phone-form">
                        <div className="phone-form-group">
                            <label htmlFor="phone-number">Địa chỉ ví
                            (<span>*</span>)</label>
                            <input 
                                type="tel" 
                                id="phone-number" 
                                placeholder="Nhập số điện thoại của bạn" 
                                required 
                                value={phoneNumber} 
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <small>
                            Chúng tôi hiện hỗ trợ rút USDT về địa chỉ mạng BEP20
                        </small>
                        </div>
                        <button type="submit" className="phone-submit-button">Cập nhật</button>
                    </div>
                </form>
            </div>
            <Notification 
                message={notification.message} 
                isVisible={notification.show} 
                onClose={() => setNotification({ show: false, message: "" })} 
            />
            <ModalCapCha 
                isOpen={modalCapcha} 
                onClose={() => setModalCapcha(false)} 
                loading={loading} 
                setloading={setLoading} 
                Event={() => console.log({ phoneNumber })} 
            />
            <Loading isLoading={loading} />
        </>
    );
};

export default UpdateVi;
