import { ImageProps, StaticImageData } from "next/image";
import { ArrayValues, Except, Merge, SetOptional } from "type-fest";
import { LOGO_COLORS, LOGO_SIZES } from "./index.constants";

export type LogoColor = ArrayValues<typeof LOGO_COLORS>;
export type LogoSize = ArrayValues<typeof LOGO_SIZES>;

export type LogoColorImageMap = Record<
  LogoColor,
  Record<ArrayValues<typeof LOGO_SIZES>, StaticImageData>
>;

export type LogoOwnProps = {
  color?: LogoColor;
  size?: LogoSize;
};

export type LogoProps = Merge<
  Except<SetOptional<ImageProps, "alt">, "src">,
  LogoOwnProps
>;
