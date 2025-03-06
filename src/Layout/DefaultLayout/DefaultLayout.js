import './DefaultLayout.scss'
import { Header } from './Header'
import { Footer } from './Footer'
function DefaultLayout ({ children }) {
  return (
    <div className='default-layout-container'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default DefaultLayout
