import type { Meta, StoryObj } from "@storybook/react";
import { ChipsList, ChipsListItem } from ".";

type Props = {
  count: number;
};

const meta = {
  subcomponents: { ChipsList, ChipsListItem },
  args: {
    count: 20,
  },
  render({ count }) {
    return (
      <ChipsList>
        {Array.from({ length: count }, (_, idx) => (
          <ChipsListItem key={idx}>غذاهای ایرانی</ChipsListItem>
        ))}
      </ChipsList>
    );
  },
} satisfies Meta<Props>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;
