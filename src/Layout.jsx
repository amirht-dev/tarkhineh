import {Outlet} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer/Footer'

function Layout() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <Outlet />
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default Layout