import './DefaultLayout.scss';
import { Header } from './Header';
import { Footer } from './Footer';
import { useLocation } from 'react-router-dom';

function DefaultLayout({ children }) {
  const location = useLocation();

  // Danh sách các trang không cần Header
  const hiddenHeaderRoutes = ['/khuyenmai','/cskh','/daily'];

  // Kiểm tra nếu đường dẫn hiện tại có trong danh sách
  const shouldHideHeader = hiddenHeaderRoutes.some(route => location.pathname.includes(route));

  return (
    <div className="default-layout-container">
      {!shouldHideHeader && <Header />}
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
