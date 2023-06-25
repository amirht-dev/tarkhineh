import {Outlet} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer/Footer'

function Layout() {
  return (
    <div className='max-w-[1700px] m-[0_auto]'>
    <header>
      <Navbar />
    </header>
    <Outlet />
    <footer>
      <Footer />
    </footer>
    </div>
  )
}

export default Layout