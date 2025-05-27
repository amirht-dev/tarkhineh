import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import SearchBox from ".";
import { SearchBoxProps } from "./index.types";

const meta = {
  component: SearchBox,
  args: {
    onSearch: fn(),
    onClear: fn(),
    onChange: fn(),
  },
} satisfies Meta<SearchBoxProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;
