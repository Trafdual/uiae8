import React, { useState } from "react";
import "./UpdatePassMoney.scss";
import { Link } from "react-router-dom";
import { ModalCapCha } from "../../../LoginLayout/ModalCapCha";
import { Loading } from "../../../../component/Loading";
import Notification from "../../../../component/Notification/Notifition";

const UpdatePassMoney = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [modalCapcha, setIsModalCapcha] = useState(false);
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState({ message: "", isVisible: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!oldPassword || !newPassword) {
            setNotification({ message: "Vui lòng điền đầy đủ thông tin.", isVisible: true });
            return;
        }
        setIsModalCapcha(true);
    };

    return (
        <>
            <div className="security-pass-container">
                <div className="security-phone-header">
                    <Link to="/member/security">
                        <div className="security-phone-icback">
                            <img src="/assets/images/ic_back_white.png" alt="Quay lại" />
                        </div>
                    </Link>
                    <div className="security-phone-text">Đổi mật khẩu rút tiền</div>
                </div>
                <div style={{ margin: "20px" }}>
                    <form onSubmit={handleSubmit}>
                        <div className="security-pass-form">
                            {/* Mật khẩu cũ */}
                            <div className="pass-form-group">
                                <div className="pass-form-input">
                                    <input
                                        type={showOldPassword ? "text" : "password"}
                                        id="old-password"
                                        placeholder=" "
                                        required
                                        value={oldPassword}
                                        onChange={(e) => setOldPassword(e.target.value)}
                                    />
                                    <label htmlFor="old-password">(<span>*</span>) Mật khẩu cũ</label>
                                    {/* Icon mắt */}
                                    <span
                                        className="hide-pass-img"
                                        onClick={() => setShowOldPassword(!showOldPassword)}
                                    >
                                        {showOldPassword ? "🙈" : "👁"}
                                    </span>
                                </div>
                            </div>

                            {/* Mật khẩu mới */}
                            <div className="pass-form-group">
                                <div className="pass-form-input">
                                    <input
                                        type={showNewPassword ? "text" : "password"}
                                        id="new-password"
                                        placeholder=" "
                                        required
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                    <label htmlFor="new-password">(<span>*</span>) Mật khẩu mới</label>
                                    {/* Icon mắt */}
                                    <span
                                        className="hide-pass-img"
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                    >
                                        {showNewPassword ? "🙈" : "👁"}
                                    </span>
                                </div>
                            </div>

                            <button type="submit" className="pass-submit-button">Xác nhận</button>
                        </div>
                    </form>
                </div>
            </div>

            <Notification
                message={notification.message}
                isVisible={notification.isVisible}
                onClose={() => setNotification({ ...notification, isVisible: false })}
            />

            <ModalCapCha
                isOpen={modalCapcha}
                onClose={() => setIsModalCapcha(false)}
                loading={loading}
                setLoading={setLoading}
                Event={() => console.log("Mật khẩu đã được đổi thành công!")}
            />

            <Loading isLoading={loading} />
        </>
    );
};

export default UpdatePassMoney;
