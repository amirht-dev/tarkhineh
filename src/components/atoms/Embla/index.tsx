"use client";

import useCombineRefs from "@/hooks/useCombineRefs";
import useEmblaEvent from "@/hooks/useEmblaEvent";
import { twMerge } from "@/lib/tailwind-merge";
import { PropsWithAsChild } from "@/types/utils";
import { createCTX } from "@/utils/clientHelpers";
import { Slot, Slottable } from "@radix-ui/react-slot";
import useEmblaCarousel from "embla-carousel-react";
import {
  forwardRef,
  Fragment,
  useCallback,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from "react";
import { ChevronLeft_Outline } from "../icons/Arrow/ChevronLeft";
import { ChevronRight_Outline } from "../icons/Arrow/ChevronRight";
import {
  DEFAULT_EMBLA_CONTAINER_ELEMENT,
  DEFAULT_EMBLA_SLIDE_ELEMENT,
  DEFAULT_EMBLA_WRAPPER_ELEMENT,
} from "./index.constants";
import type {
  EmblaContainerProps,
  EmblaContextType,
  EmblaNavigationProps,
  EmblaProps,
  EmblaWrapperProps,
} from "./index.types";

export const { context: EmblaContext, hook: useEmblaContext } =
  createCTX<EmblaContextType>("Embla");

const Embla = ({
  children,
  type = "flex",
  plugins,
  emblaRef,
  emblaApi,
  ...props
}: EmblaProps) => {
  const [_emblaRef, _emblaApi] = useEmblaCarousel(props, plugins);

  return (
    <EmblaContext.Provider
      value={{
        emblaRef: emblaRef ?? _emblaRef,
        emblaApi: emblaApi ?? _emblaApi,
        type,
        ...props,
      }}
    >
      {children}
    </EmblaContext.Provider>
  );
};

const EmblaWrapper = forwardRef<HTMLDivElement, EmblaWrapperProps>(
  ({ asChild, ...props }, ref) => {
    const { emblaRef } = useEmblaContext();
    const combinedRef = useCombineRefs(ref, emblaRef);

    const Comp = asChild ? Slot : DEFAULT_EMBLA_WRAPPER_ELEMENT;

    return (
      <Comp
        {...props}
        ref={combinedRef}
        className={twMerge("group overflow-hidden", props.className)}
      />
    );
  },
);

EmblaWrapper.displayName = "EmblaWrapper";

const EmblaContainer = forwardRef<HTMLDivElement, EmblaContainerProps>(
  ({ asChild, ...props }, ref) => {
    const { type, axis } = useEmblaContext();
    const Comp = asChild ? Slot : DEFAULT_EMBLA_CONTAINER_ELEMENT;
    return (
      <Comp
        {...props}
        ref={ref}
        className={twMerge(
          props.className,
          type,
          type === "flex" ? (axis === "y" ? "flex-col" : "flex-row") : "",
        )}
      />
    );
  },
);

EmblaContainer.displayName = "EmblaContainer";

// calc(_calc(100%_/_3)_-_calc(_calc(_calc(3_-_1)_*_16px_)_/_3_))

const EmblaSlide = forwardRef<HTMLDivElement, EmblaContainerProps>(
  ({ asChild, ...props }, ref) => {
    const { type, loop, emblaApi } = useEmblaContext();
    const Comp = asChild ? Slot : DEFAULT_EMBLA_SLIDE_ELEMENT;
    return (
      <Comp
        {...props}
        ref={ref}
        className={twMerge(
          "me-[var(--gap,0px)] min-w-0",
          !(emblaApi?.internalEngine().options.loop ?? loop) && "last:me-0",
          type === "flex"
            ? "flex-[0_0_var(--slide-size,calc(calc(100%/var(--slide-per-view,1))-calc(calc(calc(var(--slide-per-view,1)-1)*var(--gap,0px))/var(--slide-per-view,1))))]"
            : "",
          props.className,
        )}
      />
    );
  },
);

EmblaSlide.displayName = "EmblaSlide";

const EmblaPreButton = forwardRef<
  HTMLButtonElement,
  PropsWithAsChild<ComponentPropsWithoutRef<"button">>
>(({ children, asChild, ...props }, ref) => {
  const { emblaApi } = useEmblaContext();
  const [disabled, setDisabled] = useState(false);

  useEmblaEvent(
    emblaApi,
    useMemo(() => ["init", "select"], []),
    useCallback((api) => setDisabled(!api.canScrollPrev()), []),
  );

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      {...props}
      ref={ref}
      disabled={disabled}
      onClick={() => emblaApi?.scrollPrev()}
      className={twMerge(
        "disabled:cursor-not-allowed disabled:opacity-30",
        props.className,
      )}
    >
      {children ? <Slottable>{children}</Slottable> : <ChevronRight_Outline />}
    </Comp>
  );
});

EmblaPreButton.displayName = "EmblaPreButton";

const EmblaNextButton = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<"button">
>(({ children, ...props }, ref) => {
  const { emblaApi } = useEmblaContext();
  const [disabled, setDisabled] = useState(false);

  useEmblaEvent(
    emblaApi,
    useMemo(() => ["init", "select"], []),
    useCallback((api) => setDisabled(!api.canScrollNext()), []),
  );

  return (
    <button
      {...props}
      ref={ref}
      disabled={disabled}
      onClick={() => emblaApi?.scrollNext()}
      className={twMerge(
        "disabled:cursor-not-allowed disabled:opacity-30",
        props.className,
      )}
    >
      {children ?? <ChevronLeft_Outline />}
    </button>
  );
});

EmblaNextButton.displayName = "EmblaNextButton";

const EmblaNavigation = forwardRef<HTMLDivElement, EmblaNavigationProps>(
  (props, ref) => {
    const { emblaApi } = useEmblaContext();
    const [count, setCount] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);

    useEmblaEvent(
      emblaApi,
      "init",
      useCallback((api) => {
        setCount(api.scrollSnapList().length);
        setSelected(api.selectedScrollSnap());
      }, []),
    );

    useEmblaEvent(
      emblaApi,
      "select",
      useCallback((api) => setSelected(api.selectedScrollSnap()), []),
    );

    if (props.children) return !!emblaApi && props.children(emblaApi);

    const {
      renderItems,
      navigateOnClick = true,
      dotProps,
      ...containerProps
    } = props;

    return (
      <div
        {...containerProps}
        className={twMerge("flex items-center gap-1", containerProps.className)}
        ref={ref}
      >
        {Array.from({ length: count }, (_, idx) => {
          const isSelected = selected === idx;
          return (
            renderItems?.({ isSelected }, idx, emblaApi) ?? (
              <Fragment key={idx}>
                <span
                  // style={{ "--size": size } as CSSProperties}
                  {...dotProps}
                  aria-selected={isSelected}
                  data-state={isSelected ? "active" : "disactive"}
                  className={twMerge(
                    "size-2 rounded-full bg-[#e1e1e1] data-[state=active]:bg-[#adadad]",
                    dotProps?.className,
                  )}
                  {...(navigateOnClick && {
                    onClick: (e) => {
                      emblaApi?.scrollTo(idx);
                      dotProps?.onClick?.(e);
                    },
                  })}
                />
              </Fragment>
            )
          );
        })}
      </div>
    );
  },
);

EmblaNavigation.displayName = "EmblaNavigation";

export {
  Embla,
  EmblaContainer,
  EmblaNavigation,
  EmblaNextButton,
  EmblaPreButton,
  EmblaSlide,
  EmblaWrapper,
};
