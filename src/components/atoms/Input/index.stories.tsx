/* eslint-disable react-hooks/rules-of-hooks */
import { T } from "@/utils/storybook";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Input from ".";
import { Eye_Outline } from "../icons/Security/Eye";
import { Lock_Outline } from "../icons/Security/Lock";
import { INPUT_MODES, INPUT_SIZES, INPUT_TYPES } from "./index.constants";
import { InputProps } from "./index.types";

const meta = {
  component: Input,
  args: {
    label: "رمز عبور",
    size: "md",
    mode: "dark",
    error: false,
    disabled: false,
    prefixIcon: false,
    suffixIcon: false,
    onChange: fn(),
    value: "",
  },
  argTypes: {
    type: {
      control: "select",
      options: INPUT_TYPES,
      table: {
        type: {
          summary: T.union(...INPUT_TYPES),
        },
      },
    },
    mode: {
      control: "inline-radio",
      options: INPUT_MODES,
      table: {
        type: {
          summary: T.union(...INPUT_MODES),
        },
      },
    },
    size: {
      control: "inline-radio",
      options: INPUT_SIZES,
      table: {
        type: {
          summary: T.union(...INPUT_SIZES),
        },
      },
    },
    prefixIcon: {
      control: "boolean",
      mapping: {
        true: <Lock_Outline />,
      },
      table: {
        type: {
          summary: T.react.ReactNode,
        },
      },
    },
    suffixIcon: {
      control: "boolean",
      mapping: {
        true: <Eye_Outline />,
      },
      table: {
        type: {
          summary: T.react.ReactNode,
        },
      },
    },
    disabled: {
      control: "boolean",
      type: "boolean",
    },
    error: {
      control: "boolean",
      table: {
        type: {
          summary: T.primitive.boolean,
        },
      },
    },
    onChange: {
      control: false,
      table: {
        type: {
          summary: T.function({
            event: T.react.events.ChangeEvent(
              T.react.elements.HTMLInputElement,
            ),
            value: T.primitive.string,
          }),
        },
      },
    },
  },
  render(args) {
    const [{ value }, updateArgs] = useArgs<InputProps>();
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => {
          const value = e.target.value;
          args.onChange?.(e, value);
          updateArgs({ value });
        }}
      />
    );
  },
} satisfies Meta<InputProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const Dark = {
  args: {
    mode: "dark",
  },
} satisfies Story;

export const Light = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    mode: "light",
  },
  decorators: [(Story) => <div className="[--label-bg:#333]">{Story()}</div>],
} satisfies Story;

export const Small = {
  args: {
    size: "sm",
  },
} satisfies Story;

export const Medium = {
  args: {
    size: "md",
  },
} satisfies Story;

export const Large = {
  args: {
    size: "lg",
  },
} satisfies Story;

export const ExtraLarge = {
  args: {
    size: "xl",
  },
} satisfies Story;

export const PrefixIcon = {
  args: {
    prefixIcon: true,
  },
} satisfies Story;

export const SuffixIcon = {
  args: {
    suffixIcon: true,
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
