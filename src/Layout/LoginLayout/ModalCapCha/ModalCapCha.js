import React, { useState, useEffect } from "react";
import "./ModalCapCha.scss";
import { getApiUrl } from "../../../api";
import Notification from "../../../component/Notification/Notifition";

const ModalCapCha = ({ isOpen, onClose, Event, loading, setloading }) => {
  const [images, setimages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [thongbao, setthongbao] = useState(false);
  const [message, setmessage] = useState("");

  const fetchImages = async () => {
    try {
      const response = await fetch(getApiUrl("getImageCaptcha"));
      const data = await response.json();
      if (response.ok) {
        setimages(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchImages();
    }
  }, [isOpen]);

  const handleImageClick = (image) => {
    setSelectedImages((prev) =>
      prev.includes(image) ? prev.filter((img) => img !== image) : [...prev, image]
    );
  };

  const handleConfirm = () => {
    if (selectedImages.length < 2) {
      setmessage("Vui lòng chọn ít nhất 2 hình ảnh");
      setthongbao(true);
      return;
    }

    const firstGroup = selectedImages[0].url;
    const isValid = selectedImages.every((img) => img.url === firstGroup);

    if (isValid) {
      onClose();
      setloading(true);

      setTimeout(() => {
        Event();
        setSelectedImages([]);
        setloading(false);
      }, 5000);
    } else {
      setmessage("Hình ảnh bạn chọn không đúng");
      setSelectedImages([]);
      setthongbao(true);
      fetchImages();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-container">
       
          <button className="close-btn" onClick={onClose}>✖</button>
          
          <div>Chọn hình ảnh giống nhau</div>
          <div className="captcha-grid">
            {images.map((src, index) => (
              <img
                key={index}
                src={src.url}
                alt={`captcha-${index}`}
                className={`captcha-image ${selectedImages.includes(src) ? "selected" : ""}`}
                onClick={() => handleImageClick(src)}
              />
            ))}
          </div>
          <button className="btn_ok" onClick={handleConfirm}>Xong</button>
        </div>
      </div>
      <Notification
        message={message}
        isVisible={thongbao}
        onClose={() => {
          setmessage("");
          setthongbao(false);
        }}
      />
    </>
  );
};

export default ModalCapCha;
