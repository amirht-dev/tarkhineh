/* eslint-disable react-hooks/rules-of-hooks */
import { T } from "@/utils/storybook";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Field, { FieldErrorMessage, FieldInput, Field as FieldRoot } from ".";
import { FIELD_TYPES } from "./index.constants";
import {
  FieldInputOTPTypeProps,
  FieldInputTextTypeProps,
  FieldProps,
} from "./index.types";

const meta = {
  component: Field,
  subcomponents: { FieldRoot, FieldInput, FieldErrorMessage },
  argTypes: {
    type: {
      control: "select",
      options: FIELD_TYPES,
      table: {
        type: {
          summary: T.union(...FIELD_TYPES),
        },
      },
    },
    slots: {
      control: "object",
      if: { arg: "type", eq: "otp" },
    },
    error: {
      control: "boolean",
      mapping: { true: "پر کردن این فیلد الزامی است!" },
      table: {
        type: {
          summary: T.union(T.primitive.string, T.primitive.boolean),
        },
      },
    },
  },
  args: {
    value: "",
    onChange: fn(),
    error: false,
    type: "text",
  },
  render(args) {
    const [textArgs, updateTextArgs] = useArgs<FieldInputTextTypeProps>();
    const [otpArgs, updateOTPArgs] = useArgs<FieldInputOTPTypeProps>();

    if (args.type === "otp")
      return (
        <Field
          {...args}
          type="otp"
          value={otpArgs.value}
          onChange={(value) => {
            args.onChange?.(value);
            updateOTPArgs({ value });
          }}
        />
      );

    return (
      <Field
        {...args}
        value={textArgs.value}
        onChange={(e, value) => {
          args.onChange?.(e, value);
          updateTextArgs({ value });
        }}
      />
    );
  },
} satisfies Meta<FieldProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Text = {
  args: {
    type: "text",
  },
} satisfies Story<FieldInputTextTypeProps>;

export const OTP = {
  args: {
    type: "otp",
    slots: [5, 5],
    separator: true,
  },
  decorators: [(Story) => <div dir="ltr">{Story()}</div>],
} satisfies Story<FieldInputOTPTypeProps>;

export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story<FieldProps>;

export const Error = {
  args: {
    error: true,
  },
} satisfies Story<FieldProps>;
