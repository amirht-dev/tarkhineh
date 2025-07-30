/* eslint-disable react-hooks/rules-of-hooks */
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Ratting from ".";
import { RattingProps } from "./index.types";

const meta = {
  component: Ratting,
  args: {
    count: 5,
    value: 3,
    onChange: fn(),
    readonly: false,
    disabled: false,
  },
  render(args) {
    const [{ value }, updateArgs] = useArgs<RattingProps>();

    return (
      <Ratting
        {...args}
        value={value}
        onChange={(value) => {
          args.onChange?.(value);
          updateArgs({ value });
        }}
      />
    );
  },
} satisfies Meta<typeof Ratting>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const Readonly = {
  args: {
    readonly: true,
  },
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;
