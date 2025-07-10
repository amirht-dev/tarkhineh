"use client";

import {
  Embla,
  EmblaContainer,
  EmblaNextButton,
  EmblaPreButton,
  EmblaSlide,
  EmblaWrapper,
} from "@/components/atoms/Embla";
import useEmblaEvent from "@/hooks/useEmblaEvent";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { twJoin } from "tailwind-merge";
import { ImageSliderProps } from "./index.types";

const MotionImage = motion.create(Image);

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [selected, setSelected] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: "rtl",
    skipSnaps: true,
    align: "center",
  });

  useEmblaEvent(emblaApi, "select", (api) => {
    setSelected(api.selectedScrollSnap());
  });

  return (
    <div className="relative h-[352px] overflow-hidden rounded-lg select-none lg:h-[441px]">
      <AnimatePresence>
        <MotionImage
          className="object-cover object-center"
          key={selected}
          fill
          src={images[selected]}
          alt=""
          variants={{
            show: { opacity: 1 },
            hide: { opacity: 0 },
          }}
          initial="hide"
          animate="show"
          exit="hide"
        />
      </AnimatePresence>

      <Embla emblaRef={emblaRef} emblaApi={emblaApi}>
        <div className="from-neutral-black absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent pb-5">
          <div className="relative">
            <EmblaWrapper className="px-24 py-px">
              <EmblaContainer className="items-center [--gap:theme(spacing.4)] lg:[--gap:theme(spacing.8)]">
                {images.map((image, idx) => {
                  const isSelected = idx === selected;

                  return (
                    <EmblaSlide
                      key={idx}
                      className="group max-w-fit flex-auto shrink-0"
                    >
                      <div
                        className={twJoin(
                          "relative size-18 overflow-hidden rounded-sm transition-all lg:size-22",
                          isSelected
                            ? "border-neutral-white scale-100 border brightness-100"
                            : "scale-90 brightness-75",
                        )}
                        onClick={() => {
                          setSelected(idx);
                          emblaApi?.scrollTo(idx);
                        }}
                      >
                        <Image
                          src={image}
                          alt=""
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    </EmblaSlide>
                  );
                })}
              </EmblaContainer>
            </EmblaWrapper>

            <EmblaNextButton className="bg-neutral-white absolute top-1/2 left-4 flex size-4 -translate-y-1/2 items-center justify-center rounded-full [&>svg]:size-3" />
            <EmblaPreButton className="bg-neutral-white absolute top-1/2 right-4 flex size-4 -translate-y-1/2 items-center justify-center rounded-full [&>svg]:size-3" />
          </div>
        </div>
      </Embla>
    </div>
  );
};

export default ImageSlider;
