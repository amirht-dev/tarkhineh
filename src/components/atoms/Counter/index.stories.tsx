/* eslint-disable react-hooks/rules-of-hooks */
import { T } from "@/utils/storybook";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Counter, { CounterSkeleton } from ".";
import { CounterProps } from "./index.types";

const variants: Array<NonNullable<CounterProps["variant"]>> = [
  "fill",
  "outline",
  "text",
];

const meta = {
  component: Counter,
  argTypes: {
    variant: {
      control: "inline-radio",
      options: variants,
      table: {
        type: {
          summary: T.union(...variants),
        },
      },
    },
  },
  args: {
    value: 2,
    onIncrement: fn(),
    onDecrement: fn(),
    onDelete: fn(),
  },
  render(args) {
    const [{ value }, updateArgs] = useArgs<CounterProps>();
    return (
      <Counter
        {...args}
        value={value}
        onIncrement={(value) => {
          args.onIncrement?.(value);
          updateArgs({ value });
        }}
        onDecrement={(value) => {
          args.onDecrement?.(value);
          updateArgs({ value });
        }}
      />
    );
  },
} satisfies Meta<CounterProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const Delete = {
  args: {
    value: 1,
  },
} satisfies Story;

export const Fill = {
  args: {
    variant: "fill",
  },
} satisfies Story;

export const Outline = {
  args: {
    variant: "outline",
  },
} satisfies Story;

export const Text = {
  args: {
    variant: "text",
  },
} satisfies Story;

export const Skeleton = {
  render: () => <CounterSkeleton className="w-14" />,
} satisfies Story;
