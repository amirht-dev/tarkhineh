import {
  PropsWithAsChild,
  PropsWithComponentPropsWithoutRef,
} from "@/types/utils";
import type {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
} from "embla-carousel";
import type { EmblaViewportRefType } from "embla-carousel-react";
import type {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactNode,
} from "react";
import { Except, Merge, MergeExclusive } from "type-fest";
import type {
  DEFAULT_EMBLA_BUTTON_ELEMENT,
  DEFAULT_EMBLA_CONTAINER_ELEMENT,
  DEFAULT_EMBLA_NAVIGATION_ELEMENT,
  DEFAULT_EMBLA_SLIDE_ELEMENT,
  DEFAULT_EMBLA_WRAPPER_ELEMENT,
} from "./index.constants";

type EmblaDisplayType = "flex" | "grid";

export type EmblaContextType = {
  emblaRef: EmblaViewportRefType;
  emblaApi: EmblaCarouselType | undefined;
  type: EmblaDisplayType;
} & EmblaOptionsType;

export type NavigationState = {
  isSelected: boolean;
};

export type EmblaProps = PropsWithChildren<
  Merge<
    EmblaOptionsType,
    {
      type?: EmblaDisplayType;
      plugins?: EmblaPluginType[];
      emblaRef?: EmblaViewportRefType;
      emblaApi?: EmblaCarouselType | undefined;
    }
  >
>;

export type EmblaWrapperProps = PropsWithChildren<
  PropsWithAsChild<
    ComponentPropsWithoutRef<typeof DEFAULT_EMBLA_WRAPPER_ELEMENT>
  >
>;

export type EmblaContainerProps = PropsWithChildren<
  PropsWithAsChild<
    ComponentPropsWithoutRef<typeof DEFAULT_EMBLA_CONTAINER_ELEMENT>
  >
>;

export type EmblaSlideProps = PropsWithChildren<
  PropsWithAsChild<ComponentPropsWithoutRef<typeof DEFAULT_EMBLA_SLIDE_ELEMENT>>
>;

export type EmblaButtonProps = PropsWithChildren<
  PropsWithAsChild<
    ComponentPropsWithoutRef<typeof DEFAULT_EMBLA_BUTTON_ELEMENT>
  >
>;

export type EmblaNavigationProps = MergeExclusive<
  {
    children: (api: EmblaCarouselType) => ReactNode;
  },
  Except<
    PropsWithComponentPropsWithoutRef<
      typeof DEFAULT_EMBLA_NAVIGATION_ELEMENT,
      {
        renderItems?: (
          state: NavigationState,
          index: number,
          api: EmblaCarouselType | undefined,
        ) => ReactNode;
        navigateOnClick?: boolean;
        dotProps?: ComponentPropsWithoutRef<"span">;
      }
    >,
    "children"
  >
>;
