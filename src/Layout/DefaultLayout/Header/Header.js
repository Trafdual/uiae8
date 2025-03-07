import React, { useState } from 'react'
import './Header.scss'
import { getFromsessionstorage } from '../../../component/MaHoaDuLieu'

const Header = () => {
  const data = JSON.parse(getFromsessionstorage('data_u'))

  return (
    <header className='header1'>
      <div className='logo'>
        <img
          src='../assets/images/logo.webp'
          alt='Jun88'
          className='logo-img'
        />
      </div>
      <div className='actions' id='actions'>
        {!data ? (
          <div className='btndkdn' id='btndkdn'>
            <a href='/register'>
              <button className='btn btn-register'>Đăng Ký</button>
            </a>
            <a href='/login'>
              <button className='btn btn-login'>Đăng Nhập</button>
            </a>
          </div>
        ) : (
          <div className='headerdn' id='headerdn'>
            <div className='rankname'>
              <img src='../assets/images/rankheader.png' alt='' />
              <div>{data.username}</div>
            </div>
            <div className='chatxu'>
              <span>
                {data.coins === 0 ? '0.00' : data.coins.toLocaleString()}
              </span>
              <img src='../assets/images/chatheader.png' alt='' />
            </div>
          </div>
        )}
        <img
          src='../assets/images/vn.webp'
          alt='VN Flag'
          className='flag-icon'
        />
      </div>
    </header>
  )
}

export default Header
