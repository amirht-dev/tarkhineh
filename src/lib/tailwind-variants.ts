import { tv as baseTV } from "tailwind-variants";
import { twMergeConfig } from "./tailwind-merge";

export * from "tailwind-variants";

export const tv: typeof baseTV = (options, config) => {
  return baseTV(options, {
    twMerge: false,
    twMergeConfig,
    ...config,
  });
};
