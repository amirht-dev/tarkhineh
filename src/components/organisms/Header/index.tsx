import IconButton from "@/components/atoms/IconButton";
import { ShoppingCard_Outline } from "@/components/atoms/icons/Shop/ShoppingCard";
import { User_Outline } from "@/components/atoms/icons/Users/User";
import Logo from "@/components/atoms/Logo";
import NavLink from "@/components/atoms/NavLink";
import MenuSheet from "@/components/molecules/MenuSheet";
import SearchModal from "@/components/molecules/SearchModal";
import { navLinks } from "@/constants";

const Header = () => {
  return (
    <header className="container flex min-h-16 items-center justify-between lg:min-h-[115px]">
      <div className="flex flex-1 items-center">
        <MenuSheet />

        <Logo size="lg" color="primary" className="max-lg:hidden" />
      </div>

      <div className="flex justify-center">
        <Logo size="sm" color="primary" className="lg:hidden" />
        <nav className="flex items-center justify-center gap-6 max-lg:hidden">
          {Object.values(navLinks).map((link, idx) => (
            <NavLink
              key={idx}
              href={link.href}
              className="text-body-xl data-[state=active]:text-heading-5 text-neutral-gray-7 data-[state=active]:text-primary underline-offset-8 data-[state=active]:underline"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex flex-1 items-center justify-end gap-1 lg:gap-2">
        <>
          <IconButton color="white" className="lg:hidden">
            <ShoppingCard_Outline />
          </IconButton>

          <IconButton color="white" className="lg:hidden">
            <User_Outline />
          </IconButton>
        </>

        <>
          <SearchModal />

          <IconButton color="white" size="lg" className="max-lg:hidden">
            <ShoppingCard_Outline />
          </IconButton>

          <IconButton color="white" size="lg" className="max-lg:hidden">
            <User_Outline />
          </IconButton>
        </>
      </div>
    </header>
  );
};

export default Header;
