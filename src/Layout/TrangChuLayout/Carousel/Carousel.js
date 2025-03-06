import React, { useState, useEffect } from "react";
import "./Carousel.scss"; // Đảm bảo có CSS phù hợp

const images = [
  "/assets/images/1.webp",
  "/assets/images/ae8-club.webp",
  "/assets/images/5.webp",
  "/assets/images/2.webp",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
