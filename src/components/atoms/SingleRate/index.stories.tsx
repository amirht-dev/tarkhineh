import { T } from "@/utils/storybook";
import type { Meta, StoryObj } from "@storybook/react";
import SingleRate from ".";
import {
  Heart_Bold,
  Heart_Outline,
} from "../icons/Support-Like-Question/Heart";
import { SingleRateProps } from "./index.types";

const meta = {
  component: SingleRate,
  argTypes: {
    value: {
      control: {
        type: "range",
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    fillIcon: {
      table: {
        type: {
          summary: T.react.ReactNode,
        },
      },
    },
    emptyIcon: {
      table: {
        type: {
          summary: T.react.ReactNode,
        },
      },
    },
    direction: {
      control: "inline-radio",
      options: ["x", "y"],
      table: {
        type: {
          summary: T.union("x", "y"),
        },
      },
    },
  },
  args: {
    value: 0.5,
    direction: "x",
  },
} satisfies Meta<SingleRateProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const LTR = {
  globals: {
    dir: "ltr",
  },
} satisfies Story;

export const RTL = {
  globals: {
    dir: "rtl",
  },
} satisfies Story;

export const CustomIcon = {
  args: {
    fillIcon: <Heart_Bold />,
    emptyIcon: <Heart_Outline />,
    className: "text-status-error",
  },
} satisfies Story;

export const Vertical = {
  args: {
    direction: "y",
  },
} satisfies Story;

export const Horizontal = {
  args: {
    direction: "x",
  },
} satisfies Story;
