import type { LinkProps } from "next/link";
import type { PropsWithChildren } from "react";
import { Merge } from "type-fest";

export type NavLinkProps = Merge<
  PropsWithChildren<LinkProps>,
  {
    href: string;
  }
>;
