import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import AddressPicker from ".";

const meta = {
  component: AddressPicker,
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    onChange: fn(),
    className: "h-[100dvh]",
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof AddressPicker>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;
