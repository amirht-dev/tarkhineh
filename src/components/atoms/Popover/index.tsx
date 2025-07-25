"use client";

import { twMerge } from "@/lib/tailwind-merge";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";
import { ChevronDown_Outline } from "../icons/Arrow/ChevronDown";

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return (
    <PopoverPrimitive.Trigger
      data-slot="popover-trigger"
      {...props}
      className={twMerge("group", props.className)}
    />
  );
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={twMerge(
          "bg-neutral-white drop-shadow-6 z-50 origin-(--radix-popover-content-transform-origin) rounded-md outline-hidden",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

function PopoverIconIndicator({
  children,
  ...props
}: React.ComponentPropsWithRef<"svg">) {
  return (
    children ?? (
      <ChevronDown_Outline
        {...props}
        className={twMerge(
          "size-4 transition-transform group-data-[state=open]:rotate-180",
          props.className,
        )}
      />
    )
  );
}

export {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverIconIndicator,
  PopoverTrigger,
};
