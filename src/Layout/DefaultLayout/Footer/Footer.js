import './Footer.scss'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <div class='navbar1'>
      <Link to='/'>
        <div class='nav-item'>
          <img src='/assets/images/trangchu.png' alt='Trang Chủ' class='icon' />
          <span>Trang Chủ</span>
        </div>
      </Link>
      <Link to='/khuyenmai'>
        <div class='nav-item'>
          <img
            src='/assets/images/khuyenmai.png'
            alt='Khuyến Mãi'
            class='icon'
          />
          <span>Khuyến Mãi</span>
        </div>
      </Link>
      <Link to='/cskh'>
        <div class='nav-item'>
          <img src='/assets/images/cskh.png' alt='VIP' class='icon' />
          <span>CSKH</span>
        </div>
      </Link>
      <Link to='/daily'>
        <div class='nav-item'>
          <img src='/assets/images/daily.png' alt='Đại Lý' class='icon' />
          <span>Đại Lý</span>
        </div>
      </Link>
      <Link to='/taikhoan'>
        <div class='nav-item'>
          <img src='/assets/images/taikhoan.png' alt='Tài Khoản' class='icon' />
          <span>Tài Khoản</span>
        </div>
      </Link>
    </div>
  )
}
export default Footer
