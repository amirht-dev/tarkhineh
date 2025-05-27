import { twMerge } from "@/lib/tailwind-merge";
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
      className={twMerge("flex items-center justify-center", props.className)}
    />
  );
});
SectionHeader.displayName = "SectionHeader";

const SectionTitle = forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h4">
>((props, ref) => {
  return (
    <h4
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

export { Section, SectionBody, SectionHeader, SectionTitle };
