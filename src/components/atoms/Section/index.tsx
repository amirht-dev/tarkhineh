import { twMerge } from "@/lib/tailwind-merge";
import { PropsWithAsChild } from "@/types/utils";
import { Slot } from "@radix-ui/react-slot";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const Section = forwardRef<HTMLElement, ComponentPropsWithoutRef<"section">>(
  (props, ref) => {
    return <section {...props} ref={ref} />;
  },
);
Section.displayName = "Section";

const SectionHeader = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={twMerge(
        "group/header flex items-center justify-center",
        props.className,
      )}
    />
  );
});
SectionHeader.displayName = "SectionHeader";

const SectionTitle = forwardRef<
  HTMLHeadingElement,
  PropsWithAsChild<React.ComponentPropsWithoutRef<"h4">>
>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : "h4";

  return (
    <Comp
      {...props}
      ref={ref}
      className={twMerge("text-heading-6 lg:text-heading-4", props.className)}
    />
  );
});
SectionTitle.displayName = "SectionTitle";

const SectionBody = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={twMerge("mt-3 lg:mt-6", props.className)}
    />
  );
});
SectionBody.displayName = "SectionBody";

const SectionActionIconButton = forwardRef<
  HTMLButtonElement,
  PropsWithAsChild<React.ComponentPropsWithoutRef<"button">>
>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      {...props}
      ref={ref}
      className={twMerge(
        "text-neutral-gray-8 section__action_icon_button [&>svg]:size-4 lg:[&>svg]:size-6",
        props.className,
      )}
    />
  );
});
SectionActionIconButton.displayName = "SectionActionIconButton";

export {
  Section,
  SectionActionIconButton,
  SectionBody,
  SectionHeader,
  SectionTitle,
};
