import { ComponentPropsWithoutRef, forwardRef } from "react";

export const Check_Outline = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<"svg">
>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      ref={ref}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
});
Check_Outline.displayName = "Check_Outline";
