import {
  Embla,
  EmblaContainer,
  EmblaNavigation,
  EmblaNextButton,
  EmblaPreButton,
  EmblaSlide,
  EmblaWrapper,
} from "@/components/atoms/Embla";
import { twMerge } from "@/lib/tailwind-merge";
import { CardSliderProps, CardSliderSlideProps } from "./index.types";

const sharedNavButtonClassName =
  "bg-neutral-white border-neutral-gray-4 text-neutral-gray-8 pointer-events-auto flex size-6 items-center justify-center rounded-lg border disabled:invisible lg:size-10 [&_svg]:size-4 lg:[&_svg]:size-6 drop-shadow-6";

const CardSlider = ({
  children,
  containerClassName,
  emblaWrapperClassName,
  emblaContainerClassName,
  sidesNavigation = false,
  sidesNavigationClassName,
  prevButton,
  prevButtonClassName,
  nextButton,
  nextButtonClassName,
  dotNavigation = false,
  dotNavigationClassName,
}: CardSliderProps) => {
  return (
    <Embla direction="rtl" skipSnaps inViewThreshold={1}>
      <div
        className={twMerge(
          "overflow-hidden",
          containerClassName,
          sidesNavigation && "relative",
        )}
      >
        <EmblaWrapper
          className={twMerge(
            "container overflow-visible select-none",
            emblaWrapperClassName,
          )}
        >
          <EmblaContainer
            className={twMerge(
              "[--gap:theme(spacing.4)] [--slide-size:auto] lg:[--gap:theme(spacing.6)]",
              emblaContainerClassName,
            )}
          >
            {children}
          </EmblaContainer>
        </EmblaWrapper>

        {sidesNavigation && (
          <div
            className={twMerge(
              "pointer-events-none absolute inset-x-0 top-1/2 container flex -translate-y-1/2 items-center justify-between",
              sidesNavigationClassName,
            )}
          >
            <EmblaPreButton
              className={twMerge(sharedNavButtonClassName, prevButtonClassName)}
            >
              {prevButton}
            </EmblaPreButton>

            <EmblaNextButton
              className={twMerge(sharedNavButtonClassName, nextButtonClassName)}
            >
              {nextButton}
            </EmblaNextButton>
          </div>
        )}

        {dotNavigation && (
          <EmblaNavigation
            className={twMerge("mt-3 justify-center", dotNavigationClassName)}
            dotProps={{
              className:
                "bg-neutral-gray-5 size-1 cursor-pointer lg:size-2 data-[state=active]:size-2 lg:data-[state=active]:size-3 data-[state=active]:bg-primary outline-primary-tint-1 data-[state=active]:outline-2",
            }}
          />
        )}
      </div>
    </Embla>
  );
};

const CardSliderSlide = (props: CardSliderSlideProps) => {
  return (
    <EmblaSlide
      {...props}
      className={twMerge(
        "transition-opacity [&:not(.is-in-view)]:opacity-40",
        props.className,
      )}
    />
  );
};

export { CardSlider, CardSliderSlide };
