import {Outlet} from 'react-router-dom'
import Navbar from './components/layout/Navbar'

function Layout() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <Outlet />
    <footer>footer</footer>
    </>
  )
}

export default Layout