import NavLink from "@/components/atoms/NavLink";
import { twMerge } from "@/lib/tailwind-merge";
import {
  TabBarListItemProps,
  TabBarListProps,
  TabBarProps,
} from "./index.types";

const TabBar = ({ className, ...props }: TabBarProps) => {
  return <div {...props} className={twMerge("bg-neutral-gray-3", className)} />;
};

const TabBarList = ({ className, ...props }: TabBarListProps) => {
  return (
    <ul
      {...props}
      className={twMerge("container flex items-center gap-4", className)}
    />
  );
};

const TabBarItem = ({ className, ...props }: TabBarListItemProps) => {
  return (
    <li>
      <NavLink
        {...props}
        className={twMerge(
          "data-[state=active]:text-primary data-[state=active]:text-caption-lg data-[state=active]:border-primary text-caption-md text-neutral-gray-7 inline-block py-1.5 data-[state=active]:border-b data-[state=active]:font-medium",
          className,
        )}
      />
    </li>
  );
};

export { TabBar, TabBarItem, TabBarList };
