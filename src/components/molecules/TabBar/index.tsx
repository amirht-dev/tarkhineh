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
      className={twMerge("container flex gap-4 lg:gap-8", className)}
    />
  );
};

const TabBarItem = ({ className, ...props }: TabBarListItemProps) => {
  return (
    <li>
      <NavLink
        {...props}
        className={twMerge(
          "data-[state=active]:text-primary data-[state=active]:text-caption-lg data-[state=active]:border-primary text-caption-md text-neutral-gray-7 lg:text-body-xl lg:data-[state=active]:text-heading-5 block py-2.5 leading-none data-[state=active]:border-b data-[state=active]:font-medium lg:py-5 data-[state=active]:lg:border-b-2 lg:data-[state=active]:font-bold",
          className,
        )}
      />
    </li>
  );
};

export { TabBar, TabBarItem, TabBarList };
