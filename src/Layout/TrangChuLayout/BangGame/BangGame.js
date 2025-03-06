import React, { useState } from "react";
import "./BangGame.scss"; // Import file CSS nếu có

const categoryList = [
  { id: "tyso", name: "Phản Tỷ Số", img: "/assets/images/bong.png" },
  { id: "casino", name: "Casino", img: "/assets/images/casino.png" },
  { id: "nohu", name: "Nổ Hũ", img: "/assets/images/nohu.png" },
  { id: "xoso", name: "Xổ số", img: "/assets/images/xoso.png" },
  { id: "thethao", name: "Thể thao", img: "/assets/images/bong.png" },
  { id: "daga", name: "Đá gà", img: "/assets/images/icondaga.webp" },
];

const BangGame = ({ onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState("tyso");

  const handleClick = (id) => {
    setActiveCategory(id);
    if (onSelectCategory) onSelectCategory(id); // Gửi event về component cha
  };

  return (
    <div className="categories">
      {categoryList.map((category) => (
        <div
          key={category.id}
          className={`category ${activeCategory === category.id ? "active" : ""}`}
          onClick={() => handleClick(category.id)}
        >
          <img src={category.img} alt={category.name} />
          <span>{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default BangGame;
