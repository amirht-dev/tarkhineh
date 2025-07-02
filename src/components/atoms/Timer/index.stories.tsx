import { T } from "@/utils/storybook";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Duration } from "date-fns";
import Timer from ".";
import { TimerProps } from "./index.types";

const durationHelperType = T.union(
  T.primitive.number,
  T.object<Duration>({
    years: T.primitive.number,
    months: T.primitive.number,
    weeks: T.primitive.number,
    days: T.primitive.number,
    hours: T.primitive.number,
    minutes: T.primitive.number,
    seconds: T.primitive.number,
  }),
);

const meta = {
  component: Timer,
  args: {
    onFinish: fn(),
  },
  argTypes: {
    duration: {
      control: {
        type: "number",
        min: 0,
      },
      table: {
        type: {
          summary: durationHelperType,
        },
      },
    },
    onFinish: {
      control: false,
      table: {
        type: {
          summary: T.function(),
        },
      },
    },
    warningStart: {
      control: {
        type: "number",
        min: 0,
      },
      table: {
        type: {
          summary: durationHelperType,
        },
      },
    },
  },
} satisfies Meta<TimerProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const NumberDuration = {
  args: {
    duration: 10,
  },
} satisfies Story;

export const DateDuration = {
  args: {
    duration: { minutes: 1, seconds: 30 },
  },
} satisfies Story;

export const WarningTimer = {
  args: {
    duration: 20,
    warningStart: 5,
    className: "text-[black] data-[state=warning]:text-[red]",
  },
} satisfies Story;
