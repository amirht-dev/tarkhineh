import { Dialog } from "@/components/atoms/Dialog";
import { SearchBoxProps } from "@/components/atoms/SearchBox/index.types";
import { ComponentProps } from "react";

export type SearchModalProps = Pick<
  SearchBoxProps,
  "onSearch" | "onClear" | "onChange"
> &
  Pick<ComponentProps<typeof Dialog>, "onOpenChange">;
