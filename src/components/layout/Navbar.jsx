import IconButton from '../IconButton';

function Navbar() {
  return (
    <nav className="flex max-w-7xl">
      <div className="flex-1 flex">
        <IconButton>
          <img src="/icons/user.svg" alt="user" />
        </IconButton>
        <IconButton>
          <img src="/icons/shop.svg" alt="shop" />
        </IconButton>
        <IconButton>
          <img src="/icons/search.svg" alt="search" />
        </IconButton>
      </div>
      <div className="flex-1">{/* links */}</div>
      <div className="flex-1">{/* logo */}</div>
    </nav>
  );
}

export default Navbar;
