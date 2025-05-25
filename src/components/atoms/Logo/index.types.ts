import type { VariantProps } from "@/lib/tailwind-variants";
import { ImageProps, StaticImageData } from "next/image";
import { ArrayValues, Except, Merge, SetOptional } from "type-fest";
import { LogoVariants } from ".";
import { LOGO_COLORS, LOGO_SIZES } from "./index.constants";

export type LogoColor = ArrayValues<typeof LOGO_COLORS>;

export type LogoColorImageMap = Record<
  LogoColor,
  Record<ArrayValues<typeof LOGO_SIZES>, StaticImageData>
>;

export type LogoOwnProps = Merge<
  VariantProps<typeof LogoVariants>,
  {
    color?: LogoColor;
  }
>;

export type LogoProps = Merge<
  Except<SetOptional<ImageProps, "alt">, "src">,
  LogoOwnProps
>;
