import IconButton, {
  ResponsiveIconButton,
} from "@/components/atoms/IconButton";
import { ShoppingCard_Outline } from "@/components/atoms/icons/Shop/ShoppingCard";
import { User_Outline } from "@/components/atoms/icons/Users/User";
import Logo from "@/components/atoms/Logo";
import LoginPopup from "@/components/molecules/LoginPopup";
import MenuSheet from "@/components/molecules/MenuSheet";
import NavigationMenu from "@/components/molecules/NavigationMenu";
import SearchModal from "@/components/molecules/SearchModal";
import UserDropdown from "@/components/molecules/UserDropdown";
import { SignedIn, SignedOut } from "@/components/utils/Auth";

const Header = async () => {
  return (
    <header className="shadow-neutral-black/5 shadow-md">
      <div className="container flex min-h-16 items-center justify-between lg:min-h-[115px]">
        <div className="flex flex-1 items-center">
          <MenuSheet />

          <Logo size="lg" color="primary" className="max-lg:hidden" />
        </div>

        <div className="flex justify-center">
          <Logo size="sm" color="primary" className="lg:hidden" />

          <nav className="max-lg:hidden">
            <NavigationMenu />
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end gap-1 lg:gap-2">
          <SearchModal />

          <>
            <IconButton color="white" className="lg:hidden">
              <ShoppingCard_Outline />
            </IconButton>

            <IconButton color="white" size="lg" className="max-lg:hidden">
              <ShoppingCard_Outline />
            </IconButton>
          </>

          <SignedIn>
            <UserDropdown />
          </SignedIn>

          <SignedOut>
            <LoginPopup
              trigger={
                <ResponsiveIconButton
                  size={{ initial: "md", lg: "lg" }}
                  color="white"
                >
                  <User_Outline />
                </ResponsiveIconButton>
              }
            />
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
