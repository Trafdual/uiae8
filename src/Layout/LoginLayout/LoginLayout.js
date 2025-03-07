import React, { useState } from 'react'
import './LoginLayout.scss'
import { ModalCapCha } from './ModalCapCha'
import { Loading } from '../../component/Loading'
import { getApiUrl } from '../../api'
import Notification from '../../component/Notification/Notifition'
import { saveTosessionstorage } from '../../component/MaHoaDuLieu'
const LoginLayout = () => {
  const [ispassword, setispassword] = useState(true)
  const [modalCapcha, setisModalCapcha] = useState(false)
  const [loading, setloading] = useState(false)
  const [password, setpassword] = useState('')
  const [username, setusername] = useState('')
  const [thongbao, setthongbao] = useState(false)
  const [message, setmessage] = useState('')

  const validate = () => {
    if (username === '' || password === '') {
      setmessage('Vui lòng nhập đầy đủ thông tin')
      setthongbao(true)
      return false
    }
    return true
  }

  const handleLogin = async () => {
    if (!validate()) return
    const response = await fetch(getApiUrl('login'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    const data = await response.json()
    if (data.message) {
      setmessage(data.message)
      setthongbao(true)
    } else {
      window.location.href = '/'

      saveTosessionstorage('data_u', JSON.stringify(data))
    }
  }
  return (
    <>
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

        <div class='login-input'>
          <div class='login-input-field'>
            <img src='/assets/images/account.png' alt />
            <input
              type='text'
              placeholder='Vui lòng nhập tài khoản'
              value={username}
              onChange={e => setusername(e.target.value)}
              autoComplete='off'
            />
          </div>
          <div class='login-input-field'>
            <img src='/assets/images/password.png' alt />
            <input
              type={ispassword ? 'password' : 'text'}
              placeholder='Vui lòng nhập mật mã'
              value={password}
              onChange={e => setpassword(e.target.value)}
              autoComplete='new-password'
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
          onClick={() => {
            if (validate()) {
              setisModalCapcha(true)
            }
          }}
        >
          Đăng nhập
        </button>

        <div class='donthaveacc'>
          <p>
            Bạn chưa có tài khoản? <a href='/register'>Đăng ký ngay</a>
          </p>
        </div>
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
        Event={handleLogin}
      />
      <Loading isLoading={loading} />
    </>
  )
}

export default LoginLayout
