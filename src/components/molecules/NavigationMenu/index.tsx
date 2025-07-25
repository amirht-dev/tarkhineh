import { ChevronDown_Outline } from "@/components/atoms/icons/Arrow/ChevronDown";
import { List, ListItem } from "@/components/atoms/List";
import NavLink from "@/components/atoms/NavLink";
import { navLinks } from "@/constants";
import { twMerge } from "@/lib/tailwind-merge";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu as NavigationMenuRoot,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { ComponentProps } from "react";

const NavigationMenu = () => {
  return (
    <NavigationMenuRoot orientation="horizontal" dir="rtl" className="relative">
      <NavigationMenuList className="flex items-center justify-center gap-6">
        {Object.values(navLinks).map((link) => (
          <NavigationMenuItem
            key={link.label}
            value={link.label}
            className="relative"
          >
            {"items" in link ? (
              <>
                <NavigationMenuTrigger className="group/trigger">
                  <NavMenuLink
                    href={link.href}
                    className="flex items-center gap-1"
                  >
                    {link.label}
                    <ChevronDown_Outline className="size-4 transition-transform group-data-[state=open]/trigger:rotate-180" />
                  </NavMenuLink>
                </NavigationMenuTrigger>

                <NavigationMenuContent asChild>
                  <List
                    className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out data-[state=open]:zoom-in-75 data-[state=closed]:zoom-out-75 absolute top-full right-0 z-10 min-w-36 transition-all rtl:origin-top-right"
                    divider
                  >
                    {link.items.map((item) => (
                      <ListItem key={item.label}>
                        <Link href={item.href}>{item.label}</Link>
                      </ListItem>
                    ))}
                  </List>
                </NavigationMenuContent>
              </>
            ) : (
              <NavMenuLink href={link.href}>{link.label}</NavMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenuRoot>
  );
};

export default NavigationMenu;

function NavMenuLink(props: ComponentProps<typeof NavLink>) {
  return (
    <NavigationMenuLink asChild>
      <NavLink
        {...props}
        className={twMerge(
          "text-body-xl data-[state=active]:text-heading-5 text-neutral-gray-7 data-[state=active]:text-primary underline-offset-8 data-[state=active]:underline",
          props.className,
        )}
      />
    </NavigationMenuLink>
  );
}
