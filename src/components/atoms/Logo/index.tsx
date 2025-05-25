import { tv } from "@/lib/tailwind-variants";
import Image from "next/image";
import { forwardRef } from "react";
import { logoColorImageMap } from "./index.constants";
import { LogoProps } from "./index.types";

export const LogoVariants = tv({
  base: "aspect-155/51",
  variants: {
    size: {
      sm: "w-[102px]",
      lg: "w-[155px]",
    },
  },
});

const Logo = forwardRef<SVGSVGElement, LogoProps>(
  ({ color = "primary", size = "lg", className, ...props }) => {
    return (
      <Image
        alt="tarkhineh logo"
        {...props}
        src={logoColorImageMap[color][size]}
        className={LogoVariants({ size, className })}
      />
    );
  },
);
Logo.displayName = "Logo";

export default Logo;
