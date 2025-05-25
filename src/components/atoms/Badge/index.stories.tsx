import type { Meta, StoryObj } from "@storybook/react";
import Badge from ".";
import { BadgeProps } from "./index.types";

const meta = {
  component: Badge,
  args: {
    color: "primary",
    children: 1,
  },
} satisfies Meta<BadgeProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

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
