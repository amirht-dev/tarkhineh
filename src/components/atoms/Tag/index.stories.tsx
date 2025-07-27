import { T } from "@/utils/storybook";
import type { Meta, StoryObj } from "@storybook/react";
import Tag from ".";
import { TAG_COLORS, TAG_SIZES, TAG_VARIANTS } from "./index.constants";
import { TagProps } from "./index.types";

const meta = {
  component: Tag,
  argTypes: {
    variant: {
      control: "inline-radio",
      options: TAG_VARIANTS,
      description: "shape of tag",
      table: {
        type: {
          summary: T.union(...TAG_VARIANTS),
        },
      },
    },
    color: {
      control: "inline-radio",
      options: TAG_COLORS,
      table: {
        type: {
          summary: T.union(...TAG_COLORS),
        },
      },
    },
    size: {
      control: "inline-radio",
      options: TAG_SIZES,
      table: {
        type: {
          summary: T.union(...TAG_SIZES),
        },
      },
    },
  },
  args: {
    children: "تحویل شده",
    variant: "square",
    color: "primary",
    size: "22",
  },
} satisfies Meta<TagProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const Square = {
  args: {
    variant: "square",
  },
} satisfies Story;

export const Pill = {
  args: {
    variant: "pill",
  },
} satisfies Story;

export const Primary = {
  args: {
    color: "primary",
  },
} satisfies Story;

export const Neutral = {
  args: {
    color: "neutral",
  },
} satisfies Story;

export const Success = {
  args: {
    color: "success",
  },
} satisfies Story;

export const Warning = {
  args: {
    color: "warning",
  },
} satisfies Story;

export const Error = {
  args: {
    color: "error",
  },
} satisfies Story;

export const ExtraSmall = {
  args: {
    size: "16",
  },
} satisfies Story;

export const Small = {
  args: {
    size: "22",
  },
} satisfies Story;

export const Medium = {
  args: {
    size: "26",
  },
} satisfies Story;
