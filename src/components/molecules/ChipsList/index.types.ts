import { ChipProps } from "@/components/atoms/Chip/index.types";
import { PropsWithChildren } from "react";

export type ChipsListProps = PropsWithChildren<{
  wrapperClassName?: string;
  emblaWrapperClassName?: string;
  emblaContainerClassName?: string;
  emblaNavigationButtonClassName?: string;
}>;

export type ChipsListItemProps = ChipProps;
