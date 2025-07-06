import { EmblaSlide } from "@/components/atoms/Embla";
import { PropsWithComponentPropsWithoutRef } from "@/types/utils";
import { Dispatch, ReactNode } from "react";
import { Merge } from "type-fest";

export type MultiViewContextType = {
  meta: unknown;
  setMeta: Dispatch<unknown>;
  next: () => void;
  prev: () => void;
  activeWindowIdx: number;
};

export type MultiViewWindowContextType = {
  windowIdx: number;
  isActiveWindow: boolean;
};

type PropsWithFunctionAbleChildren<TProps = unknown> = Merge<
  TProps,
  {
    children?: ReactNode | ((context: MultiViewContextType) => ReactNode);
  }
>;

export type MultiViewProps = PropsWithFunctionAbleChildren<{
  defaultMeta?: unknown;
}>;

export type MultiViewContainerProps = PropsWithFunctionAbleChildren;

export type MultiViewWindowProps = PropsWithFunctionAbleChildren<
  PropsWithComponentPropsWithoutRef<
    typeof EmblaSlide,
    {
      windowIdx: number;
    }
  >
>;
