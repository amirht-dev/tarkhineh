import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import SearchModal from ".";
import * as SearchBoxStories from "../../atoms/SearchBox/index.stories";

const meta = {
  component: SearchModal,
  args: {
    ...SearchBoxStories.default.args,
    onOpenChange: fn(),
  },
  tags: ["!autodocs"],
} satisfies Meta<typeof SearchModal>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {
  name: "SearchModal",
} satisfies Story;
