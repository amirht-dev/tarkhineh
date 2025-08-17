/* eslint-disable react-hooks/rules-of-hooks */
import { paymentGateways } from "@/constants";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import GatewayRadio from ".";
import { GatewayRadioProps } from "./index.types";

const meta = {
  component: GatewayRadio,
  args: {
    gateway: paymentGateways[0],
    checked: false,
    onChange: fn(),
  },
  render(args) {
    const [{ checked }, updateArgs] = useArgs<GatewayRadioProps>();
    return (
      <GatewayRadio
        {...args}
        checked={checked}
        onChange={(e) => {
          args.onChange?.(e);
          updateArgs({ checked: e.target.checked });
        }}
      />
    );
  },
} satisfies Meta<typeof GatewayRadio>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const Checked = {
  args: {
    checked: true,
  },
} satisfies Story;
