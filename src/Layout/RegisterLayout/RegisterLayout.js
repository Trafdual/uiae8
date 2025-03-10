import React, { useState } from 'react'
import './Register.scss'
import { ModalCapCha } from '../LoginLayout/ModalCapCha'
import { Loading } from '../../component/Loading'
import { getApiUrl } from '../../api'
import { Link } from 'react-router-dom'
import Notification from '../../component/Notification/Notifition'
const RegisterLayout = () => {
  const [ispassword, setispassword] = useState(true)
  const [isRepassword, setisRepassword] = useState(true)

  const [modalCapcha, setisModalCapcha] = useState(false)
  const [loading, setloading] = useState(false)
  const [password, setpassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [mamoi, setmamoi] = useState('')
  const [username, setusername] = useState('')
  const [thongbao, setthongbao] = useState(false)
  const [message, setmessage] = useState('')

  const validate = () => {
    if (username === '' || password === '' || confirmPassword === '') {
      setmessage('Vui lòng nhập đầy đủ thông tin')
      setthongbao(true)
      return false
    }

    if (username.length < 8) {
      setmessage('Tên đăng nhập phải có ít nhất 8 ký tự')
      setthongbao(true)
      return false
    }

    const usernamePattern = /^[a-zA-Z0-9]+$/
    if (!usernamePattern.test(username)) {
      setmessage(
        'Tên đăng nhập chỉ được chứa chữ cái và số, không dấu hoặc ký tự đặc biệt'
      )
      setthongbao(true)
      return false
    }

    if (confirmPassword !== password) {
      setmessage('Mật khẩu không khớp')
      setthongbao(true)
      return false
    }

    return true
  }

  const handleregister = async () => {
    if (!validate()) return
    const response = await fetch(getApiUrl('register'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        code: mamoi
      })
    })
    const data = await response.json()
    if (data.message) {
      setmessage(data.message)
      setthongbao(true)
    } else {
      window.location.href = '/login'
      console.log(data)
    }
  }

  return (
    <>
      <div className='register-container'>
        <div className='register-header'>
          <Link to='/'>
            <div className='btn-right'>
              <img src='/assets/images/btn-close.png' alt="" className='btn-close' />
            </div>
          </Link>
          <div className='top-img'>
            <img src='/assets/images/top-img.png' alt="" />
          </div>
        </div>

        <div className='register-form'>
          <div className='register-input-field'>
            <div className='labelreg'>
              <img src='/assets/images/account.png' alt="" />
              Tên đăng nhập
            </div>
            <input
              type='text'
              id='username'
              placeholder=''
              autoComplete='off'
              value={username}
              onChange={e => setusername(e.target.value)}
            />
            <small>Vui lòng nhập tên đăng nhập</small>
          </div>
          <div className='register-input-field'>
            <div className='labelreg'>
              <img src='/assets/images/register-pass.png' alt="a" />
              Mật khẩu
            </div>
            <input
              type={ispassword ? 'password' : 'text'}
              id='password'
              placeholder
              autoComplete='new-password'
              value={password}
              onChange={e => setpassword(e.target.value)}
            />
            <img
              src={
                ispassword
                  ? '/assets/images/hidepass.png'
                  : '/assets/images/hidepass2.png'
              }
              alt='Show/Hide'
              className='toggle-password'
              onClick={() => setispassword(!ispassword)}
            />
            <small>Vui lòng nhập mật khẩu</small>
          </div>
          <div className='register-input-field'>
            <div className='labelreg'>
              <img src={'/assets/images/register-pass.png'} alt='' />
              Xác nhận lại mật khẩu
            </div>
            <input
              type={isRepassword ? 'password' : 'text'}
              id='confirm-password'
              placeholder=''
              autoComplete='new-password'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
            <img
              src={
                isRepassword
                  ? '/assets/images/hidepass.png'
                  : '/assets/images/hidepass2.png'
              }
              alt='Show/Hide'
              className='toggle-password'
              onClick={() => setisRepassword(!isRepassword)}
            />
            <small>Vui lòng nhập lại mật khẩu.</small>
          </div>
          <div className='register-input-field'>
            <div className='labelreg'>
              <img src='/assets/images/account.png' alt="" />
              Mã mời
            </div>
            <input
              type='email'
              id='email'
              placeholder
              autoComplete='off'
              value={mamoi}
              onChange={e => setmamoi(e.target.value)}
            />
            <small>Vui lòng nhập mã mời (không bắt buộc)</small>
          </div>
          <button
            type='submit'
            className='register-btn'
            onClick={() => {
              if (validate()) {
                setisModalCapcha(true)
              }
            }}
          >
            Đăng ký
          </button>
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
        Event={handleregister}
      />
      <Loading isLoading={loading} />
    </>
  )
}

export default RegisterLayout
