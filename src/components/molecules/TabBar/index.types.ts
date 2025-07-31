import NavLink from "@/components/atoms/NavLink";
import { PropsWithComponentPropsWithRef } from "@/types/utils";

export type TabBarProps = PropsWithComponentPropsWithRef<"div">;

export type TabBarListProps = PropsWithComponentPropsWithRef<"ul">;

export type TabBarListItemProps = PropsWithComponentPropsWithRef<
  typeof NavLink
>;
