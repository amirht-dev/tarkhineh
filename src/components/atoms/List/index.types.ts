import { PropsWithComponentPropsWithRef } from "@/types/utils";
import Link from "next/link";

export type ListProps = PropsWithComponentPropsWithRef<
  "ul",
  {
    divider?: boolean;
  }
>;

export type ListItemProps = PropsWithComponentPropsWithRef<
  "li",
  {
    passClassName?: boolean;
  }
>;

export type ListIconProps = PropsWithComponentPropsWithRef<"span">;

export type ListLinkProps = PropsWithComponentPropsWithRef<typeof Link>;
