/* eslint-disable react-hooks/rules-of-hooks */
import { T } from "@/utils/storybook";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import InputOTP, {
  InputOTPGroup,
  InputOTP as InputOTPRoot,
  InputOTPSeparator,
  InputOTPSlot,
} from ".";
import { INPUT_OTP_COLORS, INPUT_OTP_GROUP_VARIANTS } from "./index.constants";
import { InputOTPProps } from "./index.types";

const meta = {
  subcomponents: {
    InputOTPRoot,
    InputOTPSlot,
    InputOTPGroup,
    InputOTPSeparator,
  },
  component: InputOTP,
  args: {
    slots: [5],
    disabled: false,
    value: "",
    variant: "separate",
    onChange: fn(),
    color: "dark",
    fullWidth: false,
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: INPUT_OTP_GROUP_VARIANTS,
    },
    color: {
      control: "inline-radio",
      options: INPUT_OTP_COLORS,
      table: {
        type: {
          summary: T.union(...INPUT_OTP_COLORS),
        },
      },
    },
  },
  render(args) {
    const [{ value }, updateArgs] = useArgs<InputOTPProps>();

    return (
      <div dir="ltr">
        <InputOTP
          {...args}
          value={value}
          onChange={(value) => {
            args.onChange?.(value);
            updateArgs({ value });
          }}
        />
      </div>
    );
  },
} satisfies Meta<InputOTPProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const FullWidth = {
  args: {
    fullWidth: true,
  },
} satisfies Story;

export const SeparatedSlots = {
  args: {
    variant: "separate",
  },
} satisfies Story;

export const StickySlots = {
  args: {
    variant: "sticky",
  },
} satisfies Story;

export const MultipleGroups = {
  args: {
    slots: [3, 3],
    separator: true,
  },
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;

export const Dark = {
  args: {
    color: "dark",
  },
} satisfies Story;

export const Primary = {
  args: {
    color: "primary",
  },
} satisfies Story;

export const Error = {
  args: {
    color: "error",
  },
} satisfies Story;

export const Success = {
  args: {
    color: "success",
  },
} satisfies Story;

export const Warning = {
  args: {
    color: "warning",
  },
} satisfies Story;
