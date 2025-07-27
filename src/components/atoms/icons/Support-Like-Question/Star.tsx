import { ComponentPropsWithoutRef, forwardRef } from "react";

export const Star_Outline = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<"svg">
>((props, ref) => {
  return (
    <svg
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <path
        d="M14.2188 8.44629L14.3311 8.79199H21.874L16.0654 13.0117L15.7715 13.2256L15.8838 13.5713L18.1025 20.3984L12.2939 16.1787L12 15.9658L11.7061 16.1787L5.89648 20.3984L8.11621 13.5713L8.22852 13.2256L7.93457 13.0117L2.12598 8.79199H9.66895L9.78125 8.44629L12 1.61719L14.2188 8.44629Z"
        stroke="currentColor"
      />
    </svg>
  );
});
Star_Outline.displayName = "Star_Outline";

export const Star_Bold = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<"svg">
>((props, ref) => {
  return (
    <svg
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <path
        d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
        fill="currentColor"
      />
    </svg>
  );
});
Star_Bold.displayName = "Star_Bold";

const Star = { Outline: Star_Outline, Bold: Star_Bold };

export default Star;
