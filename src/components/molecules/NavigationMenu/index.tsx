"use client";

import { ChevronDown_Outline } from "@/components/atoms/icons/Arrow/ChevronDown";
import { List, ListItem } from "@/components/atoms/List";
import NavLink from "@/components/atoms/NavLink";
import { branches, navLinks } from "@/constants";
import useBranchLocalStorage from "@/hooks/useBranchLocalStorage";
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
import { ComponentProps, PropsWithChildren } from "react";

const NavigationMenu = () => {
  const [selectedBranch] = useBranchLocalStorage();

  const branch = Object.values(branches).find((b) => b.slug === selectedBranch);

  return (
    <NavigationMenuRoot orientation="horizontal" dir="rtl" className="relative">
      <NavigationMenuList className="flex items-center justify-center gap-6">
        <NavigationMenuItem value={navLinks.root.label}>
          <NavMenuLink href={navLinks.root.href}>
            {navLinks.root.label}
          </NavMenuLink>
        </NavigationMenuItem>

        {!!branch && (
          <NavigationMenuItem value={navLinks.menu.label} className="relative">
            <NavMenuListTrigger href={`/branch/${branch.slug}/menu`}>
              {navLinks.menu.label}
            </NavMenuListTrigger>

            <NavMenuList>
              {navLinks.menu.items.map((item) => (
                <ListItem key={item.label}>
                  <Link href={`/branch/${branch.slug}/menu/${item.slug}`}>
                    {item.label}
                  </Link>
                </ListItem>
              ))}
            </NavMenuList>
          </NavigationMenuItem>
        )}

        <NavigationMenuItem
          value={navLinks.branches.label}
          className="relative"
        >
          <NavMenuListTrigger
            href={branch ? `/branch/${branch.slug}` : navLinks.branches.href}
          >
            {navLinks.branches.label} {!!branch && branch.name}
          </NavMenuListTrigger>

          <NavMenuList>
            {navLinks.branches.items.map((item) => (
              <ListItem key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </ListItem>
            ))}
          </NavMenuList>
        </NavigationMenuItem>

        <NavigationMenuItem value={navLinks.grantingRepresentation.label}>
          <NavMenuLink href={navLinks.grantingRepresentation.href}>
            {navLinks.grantingRepresentation.label}
          </NavMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem value={navLinks.aboutUs.label}>
          <NavMenuLink href={navLinks.aboutUs.href}>
            {navLinks.aboutUs.label}
          </NavMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem value={navLinks.contactUs.label}>
          <NavMenuLink href={navLinks.contactUs.href}>
            {navLinks.contactUs.label}
          </NavMenuLink>
        </NavigationMenuItem>

        {/* {Object.values(navLinks).map((link) => (
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
        ))} */}
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

function NavMenuListTrigger({
  children,
  className,
  ...props
}: ComponentProps<typeof NavLink>) {
  return (
    <NavigationMenuTrigger className="group/trigger">
      <NavMenuLink
        {...props}
        className={twMerge("flex items-center gap-1", className)}
      >
        {children}
        <ChevronDown_Outline className="size-4 transition-transform group-data-[state=open]/trigger:rotate-180" />
      </NavMenuLink>
    </NavigationMenuTrigger>
  );
}

function NavMenuList({ children }: PropsWithChildren) {
  return (
    <NavigationMenuContent asChild>
      <List
        className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out data-[state=open]:zoom-in-75 data-[state=closed]:zoom-out-75 absolute top-full right-0 z-10 min-w-36 transition-all rtl:origin-top-right"
        divider
      >
        {children}
      </List>
    </NavigationMenuContent>
  );
}
