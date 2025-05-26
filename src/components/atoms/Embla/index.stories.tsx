import { Meta, StoryObj } from "@storybook/react";
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

type Story = StoryObj<typeof meta>;

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
