/* eslint-disable react-hooks/rules-of-hooks */
import { Truck_Outline } from "@/components/atoms/icons/Delivery/Truck";
import { T } from "@/utils/storybook";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Radio from ".";
import { RadioProps } from "./index.types";

const meta = {
  component: Radio,
  argTypes: {
    label: {
      control: "text",
      table: {
        type: {
          summary: T.primitive.string,
        },
      },
    },
    subLabel: {
      control: "text",
      table: {
        type: {
          summary: T.primitive.string,
        },
      },
    },
    icon: {
      control: "boolean",
      mapping: {
        true: <Truck_Outline />,
      },
      table: {
        type: {
          summary: T.react.ReactNode,
        },
      },
    },
  },
  args: {
    label: "ارسال توسط پیک",
    subLabel: "توسط پیک رستوران ارسال شود.",
    icon: true,
    onChange: fn(),
    checked: false,
  },
  render(args) {
    const [{ checked }, updateArgs] = useArgs<RadioProps>();
    return (
      <Radio
        {...args}
        checked={checked}
        onChange={(e) => {
          args.onChange?.(e);
          const checked = e.target.checked;
          if (checked) updateArgs({ checked });
        }}
      />
    );
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const Checked = {
  args: {
    checked: true,
  },
} satisfies Story;
