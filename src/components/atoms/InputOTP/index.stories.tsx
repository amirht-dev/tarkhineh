/* eslint-disable react-hooks/rules-of-hooks */
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentProps } from "react";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from ".";
import { INPUT_OTP_GROUP_VARIANTS } from "./index.constants";

type Props = {
  count: number[];
  fullWidth: boolean;
} & Pick<
  ComponentProps<typeof InputOTP>,
  "value" | "onChange" | "disabled" | "error"
> &
  Pick<ComponentProps<typeof InputOTPGroup>, "variant">;

const meta = {
  subcomponents: { InputOTP, InputOTPSlot, InputOTPGroup, InputOTPSeparator },
  args: {
    count: [5],
    disabled: false,
    value: "",
    variant: "separate",
    onChange: fn(),
    error: false,
    fullWidth: false,
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: INPUT_OTP_GROUP_VARIANTS,
    },
  },
  render(args) {
    const [{ value }, updateArgs] = useArgs<Props>();
    let idx = 0;
    return (
      <div dir="ltr">
        <InputOTP
          maxLength={
            Array.isArray(args.count)
              ? args.count.reduce((total, number) => total + number)
              : args.count
          }
          value={value}
          onChange={(value) => {
            args.onChange?.(value);
            updateArgs({ value });
          }}
          disabled={args.disabled}
          error={args.error}
        >
          {args.count.map((slotsCount, groupIdx) => {
            return (
              <>
                <InputOTPGroup key={groupIdx} variant={args.variant} dir="ltr">
                  {Array.from({ length: slotsCount }, (_, slotIdx) => {
                    return (
                      <InputOTPSlot
                        key={slotIdx}
                        fullWidth={args.fullWidth}
                        index={idx++}
                      />
                    );
                  })}
                </InputOTPGroup>
                {groupIdx !== args.count.length - 1 && <InputOTPSeparator />}
              </>
            );
          })}
        </InputOTP>
      </div>
    );
  },
} satisfies Meta<Props>;

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
    count: [3, 3],
  },
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;

export const Error = {
  args: {
    error: true,
  },
} satisfies Story;
