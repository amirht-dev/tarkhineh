/* eslint-disable react-hooks/rules-of-hooks */
import { T } from "@/utils/storybook";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Field, {
  FieldDescription,
  FieldErrorMessage,
  FieldInput,
  Field as FieldRoot,
  FieldSuccessMessage,
} from ".";
import { INPUT_COLORS } from "../Input/index.constants";
import { FIELD_TYPES } from "./index.constants";
import {
  FieldInputOTPTypeProps,
  FieldInputTextTypeProps,
  FieldProps,
} from "./index.types";

const meta = {
  component: Field,
  subcomponents: {
    FieldRoot,
    FieldInput,
    FieldDescription,
    FieldErrorMessage,
    FieldSuccessMessage,
  },
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
    color: {
      control: "inline-radio",
      options: INPUT_COLORS,
      table: {
        type: {
          summary: T.union(...INPUT_COLORS),
        },
      },
    },
    error: {
      control: "text",
      if: { arg: "success", truthy: false },
      table: {
        type: {
          summary: T.primitive.string,
        },
      },
    },
    success: {
      control: "text",
      if: { arg: "error", truthy: false },
      table: {
        type: {
          summary: T.primitive.string,
        },
      },
    },
  },
  args: {
    value: "",
    onChange: fn(),
    color: "dark",
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

export const Description = {
  args: {
    label: "ایمیل",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
  },
} satisfies Story<FieldProps>;

export const Error = {
  args: {
    label: "ایمیل",
    error: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
  },
} satisfies Story<FieldProps>;

export const Success = {
  args: {
    label: "ایمیل",
    success: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
  },
} satisfies Story<FieldProps>;
