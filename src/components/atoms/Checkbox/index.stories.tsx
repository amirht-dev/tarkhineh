/* eslint-disable react-hooks/rules-of-hooks */
import { T } from "@/utils/storybook";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Checkbox from ".";
import {
  Heart_Bold,
  Heart_Outline,
} from "../icons/Support-Like-Question/Heart";
import { CheckboxProps } from "./index.types";

const meta = {
  component: Checkbox,
  argTypes: {
    checkedIcon: {
      control: false,
      table: {
        type: {
          summary: T.react.ReactNode,
        },
      },
    },
    uncheckedIcon: {
      control: false,
      table: {
        type: {
          summary: T.react.ReactNode,
        },
      },
    },
  },
  args: {
    checked: false,
    onChange: fn(),
    checkedIcon: <Heart_Bold />,
    uncheckedIcon: <Heart_Outline />,
  },
  render(args) {
    const [{ checked }, updateArgs] = useArgs<CheckboxProps>();
    return (
      <Checkbox
        {...args}
        checked={checked}
        className="text-status-error"
        onChange={(e) => {
          args.onChange?.(e);
          updateArgs({ checked });
        }}
      />
    );
  },
} satisfies Meta<CheckboxProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;
