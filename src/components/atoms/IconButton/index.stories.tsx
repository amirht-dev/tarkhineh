import { T } from "@/utils/storybook";
import type { Meta, StoryObj } from "@storybook/react";
import IconButton from ".";
import { ShoppingCard_Outline } from "../icons/Shop/ShoppingCard";
import { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES } from "./index.constants";
import { IconButtonProps } from "./index.types";

const meta = {
  component: IconButton,
  args: {
    size: "md",
    color: "primary",
    children: <ShoppingCard_Outline />,
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ICON_BUTTON_SIZES,
      table: {
        type: {
          summary: T.union(...ICON_BUTTON_SIZES),
        },
      },
    },
    color: {
      control: "inline-radio",
      options: ICON_BUTTON_COLORS,
      table: {
        type: {
          summary: T.union(...ICON_BUTTON_COLORS),
        },
      },
    },
    badge: {
      control: "number",
      type: "number",
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<IconButtonProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const Medium = {
  args: {
    size: "md",
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

export const White = {
  args: {
    color: "white",
  },
} satisfies Story;

export const WithBadge = {
  args: {
    badge: 1,
  },
} satisfies Story;
