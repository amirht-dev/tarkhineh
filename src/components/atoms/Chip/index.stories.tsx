import { T } from "@/utils/storybook";
import type { Meta, StoryObj } from "@storybook/react";
import Chip from ".";
import { ChevronLeft_Outline } from "../icons/Arrow/ChevronLeft";
import { ChipProps } from "./index.types";

const meta = {
  component: Chip,
  argTypes: {
    icon: {
      control: "boolean",
      mapping: {
        true: <ChevronLeft_Outline />,
      },
      table: {
        type: {
          summary: T.react.ReactNode,
        },
      },
    },
  },
  args: {
    children: "غذاهای ایرانی",
    selected: false,
    disabled: false,
  },
} satisfies Meta<ChipProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const Icon = {
  args: {
    icon: true,
  },
} satisfies Story;

export const Selected = {
  args: {
    ...Icon.args,
    selected: true,
  },
} satisfies Story;

export const Disabled = {
  args: {
    ...Icon.args,
    disabled: true,
  },
} satisfies Story;
