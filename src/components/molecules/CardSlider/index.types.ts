import { EmblaSlide } from "@/components/atoms/Embla";
import { EmblaProps } from "@/components/atoms/Embla/index.types";
import { ComponentPropsWithRef, PropsWithChildren, ReactNode } from "react";

export type CardSliderProps = PropsWithChildren<{
  containerClassName?: string;
  emblaWrapperClassName?: string;
  emblaContainerClassName?: string;
  sidesNavigation?: boolean;
  sidesNavigationClassName?: string;
  prevButton?: ReactNode;
  prevButtonClassName?: string;
  nextButton?: ReactNode;
  nextButtonClassName?: string;
  dotNavigation?: boolean;
  dotNavigationClassName?: string;
  emblaProps?: EmblaProps;
}>;

export type CardSliderSlideProps = ComponentPropsWithRef<typeof EmblaSlide>;
