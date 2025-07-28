import { PropsWithComponentPropsWithRef } from "@/types/utils";
import { AutoplayOptionsType } from "embla-carousel-autoplay";
import Image from "next/image";
import { ComponentProps, PropsWithChildren, ReactNode } from "react";
import { EmblaSlide } from "../Embla";

export type ImageSliderProps = PropsWithChildren<{
  autoplayOptions?: AutoplayOptionsType;
  containerClassName?: string;
  emblaWrapperClassName?: string;
  emblaContainerClassName?: string;
  sidesNavigation?: boolean;
  prevButton?: ReactNode;
  prevButtonClassName?: string;
  nextButton?: ReactNode;
  nextButtonClassName?: string;
  dotNavigation?: boolean;
}>;

export type ImageSliderSlideProps = PropsWithComponentPropsWithRef<
  typeof EmblaSlide,
  Pick<ComponentProps<typeof Image>, "src" | "alt"> & {
    overlay?: boolean;
  }
>;
