/* eslint-disable react-hooks/rules-of-hooks */
import useEmblaEffect, {
  EMBLA_SCALE_EFFECT_TARGETS,
  EmblaEffectOptions,
  EmblaScaleEffectOptions,
  EmblaScaleTargetContext,
  scaleEffect,
} from "@/hooks/useEmblaEffect";
import { T } from "@/utils/storybook";
import { Meta, StoryObj } from "@storybook/react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Embla,
  EmblaContainer,
  EmblaNavigation,
  EmblaNextButton,
  EmblaPreButton,
  EmblaSlide,
  EmblaWrapper,
} from ".";

const meta = {
  subcomponents: {
    Embla,
    EmblaContainer,
    EmblaSlide,
    EmblaWrapper,
    EmblaPreButton,
    EmblaNextButton,
    EmblaNavigation,
  },
} satisfies Meta;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Story = {
  render() {
    return (
      <Embla direction="rtl">
        <EmblaWrapper>
          <EmblaContainer>
            {Array.from({ length: 10 }, (_, idx) => (
              <EmblaSlide
                key={idx}
                className="[--slide-size:] bg-neutral-gray-3 flex h-[200px] items-center justify-center select-none"
              >
                slide {idx + 1}
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaWrapper>
      </Embla>
    );
  },
} satisfies Story;

export const Flex = {
  render() {
    return (
      <Embla type="flex" align="start" direction="rtl">
        <EmblaWrapper>
          <EmblaContainer>
            {Array.from({ length: 10 }, (_, idx) => (
              <EmblaSlide
                key={idx}
                className="[--slide-size:] bg-neutral-gray-3 flex h-[200px] items-center justify-center select-none"
              >
                slide {idx + 1}
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaWrapper>
      </Embla>
    );
  },
} satisfies Story;

export const FlexYAxis = {
  render() {
    return (
      <Embla type="flex" axis="y" align="start">
        <EmblaWrapper>
          <EmblaContainer className="h-[400px]">
            {Array.from({ length: 10 }, (_, idx) => (
              <EmblaSlide
                key={idx}
                className="[--slide-size:] bg-neutral-gray-3 flex items-center justify-center select-none"
              >
                slide {idx + 1}
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaWrapper>
      </Embla>
    );
  },
} satisfies Story;

export const Gap = {
  render() {
    return (
      <Embla type="flex" direction="rtl">
        <EmblaWrapper>
          <EmblaContainer className="[--gap:16px]">
            {Array.from({ length: 10 }, (_, idx) => (
              <EmblaSlide
                key={idx}
                className="[--slide-size:] bg-neutral-gray-3 flex h-[200px] items-center justify-center select-none"
              >
                slide {idx + 1}
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaWrapper>
      </Embla>
    );
  },
} satisfies Story;

export const SlidePerView = {
  render() {
    return (
      <Embla type="flex" direction="rtl">
        <EmblaWrapper>
          <EmblaContainer className="[--slide-per-view:4]">
            {Array.from({ length: 10 }, (_, idx) => (
              <EmblaSlide
                key={idx}
                className="[--slide-size:] bg-neutral-gray-3 flex h-[200px] items-center justify-center select-none"
              >
                slide {idx + 1}
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaWrapper>
      </Embla>
    );
  },
} satisfies Story;

export const WithButtons = {
  render() {
    return (
      <Embla type="flex" direction="rtl">
        <EmblaWrapper>
          <EmblaContainer className="[--slide-per-view:4]">
            {Array.from({ length: 10 }, (_, idx) => (
              <EmblaSlide
                key={idx}
                className="[--slide-size:] bg-neutral-gray-3 flex h-[200px] items-center justify-center select-none"
              >
                slide {idx + 1}
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaWrapper>
        <div className="mt-5 flex items-center gap-2">
          <EmblaPreButton />
          <EmblaNextButton />
        </div>
      </Embla>
    );
  },
} satisfies Story;

export const WithNavigation = {
  render() {
    return (
      <Embla type="flex" direction="rtl">
        <EmblaWrapper>
          <EmblaContainer className="[--slide-per-view:4]">
            {Array.from({ length: 10 }, (_, idx) => (
              <EmblaSlide
                key={idx}
                className="[--slide-size:] bg-neutral-gray-3 flex h-[200px] items-center justify-center select-none"
              >
                slide {idx + 1}
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaWrapper>
        <EmblaNavigation className="mx-auto mt-4 w-fit" />
      </Embla>
    );
  },
} satisfies Story;

export const ScaleEffect = {
  args: {
    loop: false,
    target: ({ scale, slide }) => {
      slide.style.setProperty("--s", scale.toFixed(2));
    },
  },
  argTypes: {
    factor: {
      control: {
        type: "range",
        min: 0.5,
        max: 3,
        step: 0.1,
      },
    },
    min: {
      control: {
        type: "range",
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    wrapperSlideSelector: {
      control: false,
    },
    eventTargets: {
      control: false,
      table: {
        type: {
          summary: T.arrayOf("EmblaEventType"),
        },
      },
    },
    target: {
      control: "inline-radio",
      options: EMBLA_SCALE_EFFECT_TARGETS,
      table: {
        type: {
          summary: T.union(
            ...EMBLA_SCALE_EFFECT_TARGETS,
            T.function({
              context: T.object<EmblaScaleTargetContext>({
                scale: T.primitive.number,
                slide: T.react.elements.HTMLElement,
                wrapperSlide: T.react.elements.HTMLElement,
              }),
            }),
          ),
        },
      },
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
  render({
    loop,
    factor,
    min,
    target,
    wrapperSlideSelector,
    eventTargets,
    onlyInView,
  }) {
    const [ref, api] = useEmblaCarousel({
      skipSnaps: true,
      loop,
    });

    useEmblaEffect(
      api,
      scaleEffect({ factor, min, target, wrapperSlideSelector }),
      { eventTargets, onlyInView },
    );

    return (
      <Embla loop={loop} emblaRef={ref} emblaApi={api}>
        <EmblaWrapper dir="ltr">
          <EmblaContainer className="[--gap:16px] [--slide-per-view:5]">
            {Array.from({ length: 10 }, (_, idx) => (
              <EmblaSlide key={idx} className="[--slide-size:] select-none">
                <div className="bg-neutral-gray-3 flex h-[200px] scale-(--s) flex-col items-center justify-center">
                  <span>slide {idx + 1}</span>
                </div>
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaWrapper>
      </Embla>
    );
  },
} satisfies Story<
  { loop: boolean } & EmblaEffectOptions & EmblaScaleEffectOptions
>;
