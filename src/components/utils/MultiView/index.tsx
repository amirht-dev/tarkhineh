"use client";

import {
  Embla,
  EmblaContainer,
  EmblaPreButton,
  EmblaSlide,
  EmblaWrapper,
} from "@/components/atoms/Embla";
import useEmblaEvent from "@/hooks/useEmblaEvent";
import { createCTX } from "@/utils/clientHelpers";
import useEmblaCarousel from "embla-carousel-react";
import { forwardRef, useState } from "react";
import {
  MultiViewContainerProps,
  MultiViewContextType,
  MultiViewProps,
  MultiViewWindowContextType,
  MultiViewWindowProps,
} from "./index.types";

export const { context: MultiViewContext, hook: useMultiViewContext } =
  createCTX<MultiViewContextType>("MultiView");

const MultiView = ({ children, defaultMeta }: MultiViewProps) => {
  const [meta, setMeta] = useState<unknown>(defaultMeta);
  const [activeWindowIdx, setActiveWindowIdx] = useState(0);

  const [ref, api] = useEmblaCarousel({
    direction: "rtl",
    watchDrag: false,
    duration: 20,
  });

  useEmblaEvent(api, "select", (api) =>
    setActiveWindowIdx(api.selectedScrollSnap()),
  );

  const next = () => {
    if (api?.canScrollNext()) api.scrollNext();
  };

  const prev = () => {
    if (api?.canScrollPrev()) api.scrollPrev();
  };

  const contextValue = { meta, setMeta, next, prev, activeWindowIdx };

  return (
    <MultiViewContext value={contextValue}>
      <Embla emblaRef={ref} emblaApi={api}>
        {typeof children === "function" ? children(contextValue) : children}
      </Embla>
    </MultiViewContext>
  );
};
MultiView.displayName = "MultiView";

const MultiViewContainer = ({ children }: MultiViewContainerProps) => {
  const context = useMultiViewContext();
  return (
    <EmblaWrapper>
      <EmblaContainer>
        {typeof children === "function" ? children(context) : children}
      </EmblaContainer>
    </EmblaWrapper>
  );
};
MultiViewContainer.displayName = "MultiViewContainer";

export const {
  context: MultiViewWindowContext,
  hook: useMultiViewWindowContext,
} = createCTX<MultiViewWindowContextType>("MultiViewWindow");

const MultiViewWindow = forwardRef<HTMLDivElement, MultiViewWindowProps>(
  ({ children, windowIdx, ...props }, ref) => {
    const context = useMultiViewContext();

    return (
      <MultiViewWindowContext
        value={{
          windowIdx,
          isActiveWindow: context.activeWindowIdx === windowIdx,
        }}
      >
        <EmblaSlide {...props} ref={ref}>
          {typeof children === "function" ? children(context) : children}
        </EmblaSlide>
      </MultiViewWindowContext>
    );
  },
);
MultiViewWindow.displayName = "MultiViewWindow";

const MultiViewPrevButton = EmblaPreButton;
MultiViewPrevButton.displayName = "MultiViewPrevButton";

export { MultiView, MultiViewContainer, MultiViewPrevButton, MultiViewWindow };
