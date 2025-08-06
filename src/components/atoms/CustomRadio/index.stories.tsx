/* eslint-disable react-hooks/rules-of-hooks */
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CustomRadio, CustomRadioIndicator } from ".";
import Button from "../Button";
import { CustomRadioProps } from "./index.types";

const meta = {
  component: CustomRadio,
  subcomponents: { CustomRadioIndicator },
  args: {
    checked: false,
    onChange: fn(),
  },
  render(args) {
    const [{ checked }, updateArgs] = useArgs<CustomRadioProps>();

    return (
      <CustomRadio
        {...args}
        checked={checked}
        onChange={(e) => {
          args.onChange?.(e);
          if (e.target.checked) updateArgs({ checked: e.target.checked });
        }}
      />
    );
  },
} satisfies Meta<CustomRadioProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const RadioButton = {
  args: {
    children: ({ checked }) => (
      <Button asChild variant={checked ? "fill" : "outline"}>
        <div>custom radio</div>
      </Button>
    ),
  },
} satisfies Story<CustomRadioProps>;

export const RadioButtonWithIndicator = {
  args: {
    children: ({ checked }) => (
      <Button asChild color="success" variant={checked ? "fill" : "outline"}>
        <div className="flex items-center gap-2">
          <CustomRadioIndicator />
          <span className="mt-0.5">custom radio</span>
        </div>
      </Button>
    ),
  },
} satisfies Story<CustomRadioProps>;
