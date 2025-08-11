import { HTMLInputTypeAttribute } from "react";

export const INPUT_SIZES = ["sm", "md", "lg", "xl"] as const;
export const INPUT_COLORS = [
  "primary",
  "error",
  "success",
  "warning",
  "light",
  "dark",
] as const;
export const INPUT_TYPES = [
  "text",
  "email",
  "number",
  "password",
  "search",
] satisfies HTMLInputTypeAttribute[];
