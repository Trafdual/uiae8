import React, { useState } from 'react'
import './BangGame.scss'
import { LichThiDau } from './LichThiDau'
import { Casino } from './Casino'
import { NoHu } from './NoHu'
import { XoSo } from './XoSo'
import { TheThao } from './TheThao'
import { DaGa } from './DaGa'

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
      {activeCategory === 'tyso' && (
        <div className='content' id='core2'>
          <>
            <div class='tabscore'>
              <button id='btnlichthidau' class='active-tab'>
                Lịch Thi Đấu
              </button>
            </div>
            <LichThiDau />
          </>
        </div>
      )}
      {activeCategory === 'casino' && (
        <div className='content'>
          <Casino />
        </div>
      )}
      {activeCategory === 'nohu' && (
        <div className='content'>
          <NoHu />
        </div>
      )}
      {activeCategory === 'xoso' && (
        <div className='content'>
          <XoSo />
        </div>
      )}
      {activeCategory === 'thethao' && (
        <div className='content'>
          <TheThao />
        </div>
      )}
      {activeCategory === 'daga' && (
        <div className='content'>
          <DaGa />
        </div>
      )}
    </div>
  )
}

export default BangGame
