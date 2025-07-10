import Image from "next/image";
import { logoColorImageMap } from "./index.constants";
import { LogoProps } from "./index.types";

const Logo = ({ color = "primary", size = "lg", ...props }: LogoProps) => {
  return (
    <Image
      alt="tarkhineh logo"
      {...props}
      src={logoColorImageMap[color][size]}
    />
  );
};

export default Logo;
