import { TrangChuLayout } from '../Layout/TrangChuLayout'
import { KhuyenMaiLayout } from '../Layout/KhuyenMaiLayout'
import { CSKHLayout } from '../Layout/CSKHLayout'
import { DaiLyLayout } from '../Layout/DaiLyLayout'
import { TaiKhoanLayout } from '../Layout/TaiKhoanLayout'
import { LoginLayout } from '../Layout/LoginLayout'
import DepositPage from '../Layout/DepositPage/DepositPage'
import TransactionHistory from '../Layout/TransactionHistory/TransactionHistory'
import GameHistory from '../Layout/BettingHistory/Bettinghistory'
import { RegisterLayout } from '../Layout/RegisterLayout'
import WithDraw from '../Layout/WithDraw/WithDraw'
import Setting from '../Layout/TaiKhoanLayout/Setting/Setting'
import AboutMe from '../Layout/TaiKhoanLayout/Setting/VeChungToi/VeChungToi'
import TroGiup from '../Layout/TaiKhoanLayout/Setting/TroGiup/TroGiup'
import ChinhSach from '../Layout/TaiKhoanLayout/Setting/ChinhSach/ChinhSach'
const publicRoutes = [
  {
    path: '/login',
    component: LoginLayout,
    layout: null
  },
  {
    path: '/register',
    component: RegisterLayout,
    layout: null
  },
  {
    path: '/',
    component: TrangChuLayout
  },
  {
    path: '/khuyenmai',
    component: KhuyenMaiLayout
  },
  {
    path: '/cskh',
    component: CSKHLayout
  },
  {
    path: '/daily',
    component: DaiLyLayout
  },
  {
    path: '/member',
    component: TaiKhoanLayout
  },
  {
    path: '/member/deposit',
    component: DepositPage
  },
  {
    path: '/member/withdraw',
    component: WithDraw 
  },
  {
    path: '/member/transactionhistory',
    component: TransactionHistory
  },
  {
    path: '/member/bettinghistory',
    component: GameHistory
  },
  {
    path: '/member/setting',
    component: Setting
  },
  {
    path: '/member/setting/aboutme',
    component: AboutMe
  },
  {
    path: '/member/setting/policy',
    component: ChinhSach
  },
  {
    path: '/member/setting/help',
    component: TroGiup
  }
  
]
const privateRoutes = []
export { publicRoutes, privateRoutes }
