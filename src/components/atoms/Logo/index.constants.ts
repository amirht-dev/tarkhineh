import logoBlackLg from "@/assets/images/logos/black-lg.png";
import logoBlackSm from "@/assets/images/logos/black-sm.png";
import logoGreenLg from "@/assets/images/logos/green-lg.png";
import logoGreenSm from "@/assets/images/logos/green-sm.png";
import logoWhiteLg from "@/assets/images/logos/white-lg.png";
import logoWhiteSm from "@/assets/images/logos/white-sm.png";
import { LogoColorImageMap } from "./index.types";

export const LOGO_SIZES = ["sm", "lg"] as const;
export const LOGO_COLORS = ["primary", "white", "black"] as const;

export const logoColorImageMap = {
  primary: {
    sm: logoGreenSm,
    lg: logoGreenLg,
  },
  black: {
    sm: logoBlackSm,
    lg: logoBlackLg,
  },
  white: {
    sm: logoWhiteSm,
    lg: logoWhiteLg,
  },
} satisfies LogoColorImageMap;
