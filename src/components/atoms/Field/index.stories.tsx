/* eslint-disable react-hooks/rules-of-hooks */
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import Field from ".";
import { FieldProps } from "./index.types";

const meta = {
  component: Field,
  args: {
    label: "رمز عبور",
  },
  render(args) {
    const [{ value }, updateArgs] = useArgs<FieldProps>();
    return (
      <Field
        {...args}
        value={value}
        onChange={(e, value) => {
          args.onChange?.(e, value);
          updateArgs({ value });
        }}
      />
    );
  },
} satisfies Meta<FieldProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const Error = {
  args: {
    error: "پر کردن این فیلد الزامی است!",
  },
} satisfies Story;
