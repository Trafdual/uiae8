import React, { useState } from 'react'
import './BangGame.scss'
import { LichThiDau } from './LichThiDau'

const categoryList = [
  { id: 'tyso', name: 'Phản Tỷ Số', img: '/assets/images/bong.png' },
  { id: 'casino', name: 'Casino', img: '/assets/images/casino.png' },
  { id: 'nohu', name: 'Nổ Hũ', img: '/assets/images/nohu.png' },
  { id: 'xoso', name: 'Xổ số', img: '/assets/images/xoso.png' },
  { id: 'thethao', name: 'Thể thao', img: '/assets/images/bong.png' },
  { id: 'daga', name: 'Đá gà', img: '/assets/images/icondaga.webp' }
]

const BangGame = ({ onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState('tyso')

  const handleClick = id => {
    setActiveCategory(id)
    if (onSelectCategory) onSelectCategory(id)
  }

  return (
    <div className='home-globby'>
      <div className='categories'>
        {categoryList.map(category => (
          <div
            key={category.id}
            className={`category ${
              activeCategory === category.id ? 'active' : ''
            }`}
            onClick={() => handleClick(category.id)}
          >
            <img src={category.img} alt={category.name} />
            <span>{category.name}</span>
          </div>
        ))}
      </div>
      <div className='content' id='core2'>
        <div class='tabscore'>
          <button id='btnlichthidau' class='active-tab'>
            Lịch Thi Đấu
          </button>
        </div>
        <LichThiDau />
      </div>
    </div>
  )
}

export default BangGame
