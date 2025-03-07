import React, { useState } from 'react'
import './LoginLayout.scss'
import { ModalCapCha } from './ModalCapCha'
const LoginLayout = () => {
  const [ispassword, setispassword] = useState(true)
  const [modalCapcha, setisModalCapcha] = useState(false)

  return (
    <div class='login-container'>
      <div class='login-header'>
        <a href='/'>
          <div class='btn-right'>
            <img src='/assets/images/btn-close.png' alt class='btn-close' />
          </div>
        </a>
        <div class='top-img'>
          <img src='/assets/images/top-img.png' alt />
        </div>
      </div>
      <form>
        <div class='login-input'>
          <div class='login-input-field'>
            <img src='/assets/images/account.png' alt />
            <input type='text' placeholder='Vui lòng nhập tài khoản' required />
          </div>
          <div class='login-input-field'>
            <img src='/assets/images/password.png' alt />
            <input
              type={ispassword ? 'password' : 'text'}
              placeholder='Vui lòng nhập mật mã'
              required
            />
            <img
              src={
                ispassword
                  ? '/assets/images/hidepass.png'
                  : '/assets/images/hidepass2.png'
              }
              alt
              style={{
                width: '30px',
                maxWidth: '100%',
                height: 'auto',
                margin: 0
              }}
              onClick={() => setispassword(!ispassword)}
            />
          </div>
        </div>
        <div class='login-warning'>
          <img src='/assets/images/warning-login-register.png' alt />
        </div>
        <button
          type='submit'
          class='login-btn'
          onClick={e => {
            e.preventDefault()
            setisModalCapcha(true)
          }}
        >
          Đăng nhập
        </button>
      </form>
      <div class='donthaveacc'>
        <p>
          Bạn chưa có tài khoản? <a href='/register'>Đăng ký ngay</a>
        </p>
      </div>
      <ModalCapCha
        isOpen={modalCapcha}
        onClose={() => setisModalCapcha(false)}
      />
    </div>
  )
}

export default LoginLayout
