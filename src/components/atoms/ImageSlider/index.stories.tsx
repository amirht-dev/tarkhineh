import { heroSlides } from "@/constants";
import { T } from "@/utils/storybook";
import type { Meta, StoryObj } from "@storybook/react";
import ImageSlider, { ImageSliderSlide } from ".";
import { ImageSliderProps } from "./index.types";

type Props = ImageSliderProps & {
  images: Array<{
    src: string;
    alt: string;
  }>;
};

const meta = {
  subcomponents: { ImageSlider, ImageSliderSlide },
  argTypes: {
    images: {
      table: {
        disable: true,
      },
    },
    autoplayOptions: {
      control: false,
      table: {
        type: {
          summary: "AutoplayOptionsType",
        },
      },
    },
    children: {
      control: false,
      table: {
        type: {
          summary: T.arrayOf("<ImageSliderSlide />"),
        },
      },
    },
    sidesNavigation: {
      control: "boolean",
    },
    prevButton: {
      control: false,
      table: {
        type: {
          summary: T.react.ReactNode,
        },
      },
    },
    nextButton: {
      control: false,
      table: {
        type: {
          summary: T.react.ReactNode,
        },
      },
    },
  },
  args: {
    images: heroSlides.map((slide) => ({
      src: slide.imageSrc.src,
      alt: slide.title,
    })),
    sidesNavigation: false,
    dotNavigation: false,
  },
  render({ images, ...args }) {
    return (
      <ImageSlider {...args}>
        {images.map((slide, idx) => (
          <ImageSliderSlide src={slide.src} alt={slide.alt} key={idx} />
        ))}
      </ImageSlider>
    );
  },
} satisfies Meta<Props>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const sidesNavigation = {
  args: {
    sidesNavigation: true,
  },
} satisfies Story;

export const DotNavigation = {
  args: {
    dotNavigation: true,
  },
} satisfies Story;
