import { TrangChuLayout } from '../Layout/TrangChuLayout'
import { KhuyenMaiLayout } from '../Layout/KhuyenMaiLayout'
import { CSKHLayout } from '../Layout/CSKHLayout'
import { DaiLyLayout } from '../Layout/DaiLyLayout'
import { TaiKhoanLayout } from '../Layout/TaiKhoanLayout'
import { LoginLayout } from '../Layout/LoginLayout'
import { RegisterLayout } from '../Layout/RegisterLayout'
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
    path: '/taikhoan',
    component: TaiKhoanLayout
  }
]
const privateRoutes = []
export { publicRoutes, privateRoutes }
