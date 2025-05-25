import { T } from "@/utils/storybook";
import type { Meta, StoryObj } from "@storybook/react";
import Logo from ".";
import { LOGO_COLORS, LOGO_SIZES } from "./index.constants";

const meta = {
  component: Logo,
  args: {
    size: "lg",
    color: "primary",
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: LOGO_SIZES,
      table: {
        type: {
          summary: T.union(...LOGO_SIZES),
        },
      },
    },
    color: {
      control: "inline-radio",
      options: LOGO_COLORS,
      table: {
        type: {
          summary: T.union(...LOGO_COLORS),
        },
      },
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const Small = {
  args: {
    size: "sm",
  },
} satisfies Story;

export const Large = {
  args: {
    size: "lg",
  },
} satisfies Story;

export const Primary = {
  args: {
    color: "primary",
  },
} satisfies Story;

export const Black = {
  args: {
    color: "black",
  },
} satisfies Story;

export const white = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    color: "white",
  },
} satisfies Story;
