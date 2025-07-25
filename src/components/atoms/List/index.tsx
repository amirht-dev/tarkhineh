import { twMerge } from "@/lib/tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";
import {
  ListIconProps,
  ListItemProps,
  ListLinkProps,
  ListProps,
} from "./index.types";

const List = ({ divider, ...props }: ListProps) => {
  return (
    <ul
      {...props}
      className={twMerge(
        "bg-neutral-white drop-shadow-6 flex flex-col rounded-sm",
        divider && "divide-neutral-gray-3 divide-y",
        props.className,
      )}
    />
  );
};

const ListItem = ({ passClassName, children, ...props }: ListItemProps) => {
  const className = twMerge(
    "text-body-sm text-neutral-gray-8 hover:bg-neutral-gray-3 group block p-2 transition-colors has-data-[slot=icon]:flex has-data-[slot=icon]:items-center has-data-[slot=icon]:gap-2",
    props.className,
  );
  return (
    <li {...props} {...(!passClassName && { className })}>
      {passClassName ? <Slot className={className}>{children}</Slot> : children}
    </li>
  );
};

const ListLink = (props: ListLinkProps) => {
  return <Link {...props} />;
};

const ListIcon = (props: ListIconProps) => {
  return (
    <span
      data-slot="icon"
      {...props}
      className={twMerge("[&>svg]:size-4", props.className)}
    />
  );
};

export { List, ListIcon, ListItem, ListLink };
