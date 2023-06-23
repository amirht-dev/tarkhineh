import { NavLink } from 'react-router-dom';
import IconButton from '../IconButton';

function Navbar() {
  return (
    <nav className="container mx-auto flex items-center">
      <div className="flex flex-1 gap-2">
        <IconButton>
          <img src="/public/icons/user.svg" alt="user" />
        </IconButton>
        <IconButton>
          <img src="/public/icons/shop.svg" alt="shop" />
        </IconButton>
        <IconButton>
          <img src="/public/icons/search.svg" alt="search" />
        </IconButton>
      </div>
      <div className="flex-1 flex justify-center gap-2">
        <NavLink
          to="/"
          className="text-blue-500 underline underline-offset-8"
        >
          صفحه اصلی
        </NavLink>
        <NavLink
          to="/"
          className="text-black"
        >
          اعطای نمایندگی
        </NavLink>
        <NavLink
          to="/"
          className="text-black"
        >
          درباره ما
        </NavLink>
        <NavLink
          to="/"
          className="text-black"
        >
          تماس با ما
        </NavLink>
      </div>
      <div className="flex flex-1 justify-end">
        <img src="/public/icons/Logo.svg" alt="tarkhineh" className="h-12" />
      </div>
    </nav>
  );
}

export default Navbar;
