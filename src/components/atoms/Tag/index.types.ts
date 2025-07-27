import { PropsWithComponentPropsWithRef } from "@/types/utils";
import { ArrayValues } from "type-fest";
import { TAG_COLORS, TAG_SIZES, TAG_VARIANTS } from "./index.constants";

export type TagProps = PropsWithComponentPropsWithRef<
  "span",
  {
    variant?: ArrayValues<typeof TAG_VARIANTS>;
    color?: ArrayValues<typeof TAG_COLORS>;
    size?: ArrayValues<typeof TAG_SIZES>;
  }
>;
