import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/Avatar";
import { Logout_Outline } from "@/components/atoms/icons/Arrow/Logout";
import {
  Location_Bold,
  Location_Outline,
} from "@/components/atoms/icons/Location/Location";
import {
  Wallet2_Bold,
  Wallet2_Outline,
} from "@/components/atoms/icons/Money/Wallet2";
import {
  Heart_Bold,
  Heart_Outline,
} from "@/components/atoms/icons/Support-Like-Question/Heart";
import { User_Bold, User_Outline } from "@/components/atoms/icons/Users/User";
import NavLink from "@/components/atoms/NavLink";
import { twMerge } from "@/lib/tailwind-merge";
import { PropsWithAsChild } from "@/types/utils";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { ComponentProps, PropsWithChildren, ReactNode } from "react";
import { Merge } from "type-fest";

export type UserDashboardPanelProps = {
  avatar?: string | null;
  name: string;
  phone: string;
};

const UserDashboardPanel = ({
  avatar = null,
  name,
  phone,
}: UserDashboardPanelProps) => {
  name = name || "کاربر ترخینه";
  phone = phone || "09123456789";

  return (
    <div className="flex flex-col gap-2 lg:px-2 lg:py-4">
      <div className="flex items-center gap-2 lg:gap-6">
        <Avatar className="border-neutral-gray-4 size-12 border lg:size-22">
          <AvatarImage src={avatar ?? "/images/avatar_placeholder.png"} />
          <AvatarFallback>
            <AvatarImage src={"/images/avatar_placeholder.png"} />
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <span
            className="text-body-sm lg:text-body-md text-neutral-gray-8 line-clamp-1 font-semibold"
            title={name}
          >
            {name}
          </span>
          <span
            className="text-caption-sm lg:text-caption-md text-neutral-gray-6 line-clamp-1"
            title={phone}
          >
            {phone}
          </span>
        </div>
      </div>

      <hr className="border-neutral-gray-6 my-2" />

      <nav>
        <ul>
          <NavLinkItem
            activeIcon={<User_Bold />}
            disactiveIcon={<User_Outline />}
            href="/dashboard/profile"
          >
            پروفایل
          </NavLinkItem>
          <NavLinkItem
            activeIcon={<Wallet2_Bold />}
            disactiveIcon={<Wallet2_Outline />}
            href="/dashboard/order-tracking"
          >
            پیگیری سفارشات
          </NavLinkItem>
          <NavLinkItem
            activeIcon={<Heart_Bold />}
            disactiveIcon={<Heart_Outline />}
            href="/dashboard/favorites"
          >
            علاقمندی‌ها
          </NavLinkItem>
          <NavLinkItem
            activeIcon={<Location_Bold />}
            disactiveIcon={<Location_Outline />}
            href="/dashboard/addresses"
          >
            آدرس‌های من
          </NavLinkItem>
          <NavButtonItem
            icon={<Logout_Outline />}
            className="text-status-error"
          >
            خروج
          </NavButtonItem>
        </ul>
      </nav>
    </div>
  );
};

export default UserDashboardPanel;

type NavItemProps = PropsWithAsChild<{
  icon: ReactNode;
  className?: string;
}>;

function NavItem({ children, asChild, icon, className }: NavItemProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <li>
      <Comp
        className={twMerge(
          "text-caption-md lg:text-body-sm flex items-center gap-2 px-2 py-2",
          className,
        )}
      >
        <Slot className="size-4 lg:size-5">{icon}</Slot>
        <Slottable>{children}</Slottable>
      </Comp>
    </li>
  );
}

type NavLinkItemProps = PropsWithChildren<{
  activeIcon: ReactNode;
  disactiveIcon: ReactNode;
  href: string;
}>;

function NavLinkItem({
  children,
  activeIcon,
  disactiveIcon,
  href,
}: NavLinkItemProps) {
  return (
    <NavItem
      icon={
        <span>
          <Slot className="size-[inherit] group-data-[state=disactive]:hidden">
            {activeIcon}
          </Slot>
          <Slot className="size-[inherit] group-data-[state=active]:hidden">
            {disactiveIcon}
          </Slot>
        </span>
      }
      asChild
      className="data-[state=active]:text-primary data-[state=active]:text-caption-lg lg:data-[state=active]:text-body-md text-neutral-gray-8 before:bg-primary relative before:absolute before:inset-y-0 before:start-0 before:hidden before:w-[3px] before:rounded-e-full data-[state=active]:before:block"
    >
      <NavLink className="group" href={href}>
        {children}
      </NavLink>
    </NavItem>
  );
}

type NavButtonItemProps = Merge<
  ComponentProps<"button">,
  {
    icon: ReactNode;
  }
>;

function NavButtonItem({
  children,
  icon,
  className,
  ...props
}: NavButtonItemProps) {
  return (
    <NavItem
      icon={icon}
      asChild
      className={twMerge("text-neutral-gray-8", className)}
    >
      <button {...props}>{children}</button>
    </NavItem>
  );
}
// type NavItemProps = PropsWithAsChild<{
//   activeIcon: ReactNode;
//   disactiveIcon: ReactNode;
//   href: string;
// }>;
// function NavItem({ children, asChild, activeIcon, disactiveIcon, href }: NavItemProps) {
//   const Comp = asChild ? Slot : 'div'

//   return (
//     <li>
//       <Comp
//         className="data-[state=active]:text-primary text-neutral-gray-8 group before:bg-primary relative flex items-center gap-2 px-2 py-2 before:absolute before:inset-y-0 before:start-0 before:hidden before:w-0.5 before:rounded-e-full data-[state=active]:before:block"
//       >
//         <Slot className="size-4 group-data-[state=active]:hidden">
//           {disactiveIcon}
//         </Slot>

//         <Slot className="size-4 group-data-[state=disactive]:hidden">
//           {activeIcon}
//         </Slot>

//         <span className="text-caption-md group-data-[state=active]:text-caption-lg">
//           {children}
//         </span>
//       </Comp>
//     </li>
//   );
// }
