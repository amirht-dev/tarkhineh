import { T } from "@/utils/storybook";
import type { Meta, StoryObj } from "@storybook/react";
import { CardSlider, CardSliderSlide } from ".";
import { CardSliderProps } from "./index.types";

type Props = CardSliderProps;

const meta = {
  subcomponents: { CardSlider, CardSliderSlide },
  argTypes: {
    sidesNavigation: {
      control: "boolean",
    },
    dotNavigation: {
      control: "boolean",
    },
    prevButton: {
      table: {
        type: {
          summary: T.react.ReactNode,
        },
      },
    },
    nextButton: {
      table: {
        type: {
          summary: T.react.ReactNode,
        },
      },
    },
    containerClassName: {
      table: {
        category: "className",
      },
    },
    emblaWrapperClassName: {
      table: {
        category: "className",
      },
    },
    emblaContainerClassName: {
      table: {
        category: "className",
      },
    },
    sidesNavigationClassName: {
      table: {
        category: "className",
      },
    },
    prevButtonClassName: {
      table: {
        category: "className",
      },
    },
    nextButtonClassName: {
      table: {
        category: "className",
      },
    },
    dotNavigationClassName: {
      table: {
        category: "className",
      },
    },
  },
  args: {
    sidesNavigation: false,
    dotNavigation: false,
  },
  render(args) {
    return (
      <CardSlider {...args}>
        {Array.from({ length: 10 }, (_, idx) => (
          <CardSliderSlide
            key={idx}
            className="border-neutral-gray-4 h-[200px] w-[300px] rounded-lg border"
          />
        ))}
      </CardSlider>
    );
  },
} satisfies Meta<Props>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const SidesNavigation = {
  args: {
    sidesNavigation: true,
  },
} satisfies Story;

export const DotNavigation = {
  args: {
    dotNavigation: true,
  },
} satisfies Story;
