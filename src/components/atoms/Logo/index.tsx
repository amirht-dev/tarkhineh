import Image from "next/image";
import { forwardRef } from "react";
import { logoColorImageMap } from "./index.constants";
import { LogoProps } from "./index.types";

const Logo = forwardRef<SVGSVGElement, LogoProps>(
  ({ color = "primary", size = "lg", ...props }) => {
    return (
      <Image
        alt="tarkhineh logo"
        {...props}
        src={logoColorImageMap[color][size]}
      />
    );
  },
);
Logo.displayName = "Logo";

export default Logo;
