"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const NavLink = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<typeof Link>
>((props) => {
  const pathname = usePathname().slice(1);
  const href = props.href.toString().slice(1);

  const isActive =
    (!!href.length && pathname.startsWith(href)) || pathname === href;

  return (
    <Link
      {...props}
      aria-selected={isActive}
      data-state={isActive ? "active" : "disactive"}
    />
  );
});
NavLink.displayName = "NavLink";

export default NavLink;
