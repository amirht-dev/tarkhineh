import type { Meta, StoryObj } from "@storybook/react";
import { TabBar, TabBarItem, TabBarList } from ".";

type Props = {
  items: { label: string; href: string }[];
};

const meta = {
  subcomponents: { TabBar, TabBarList, TabBarItem },
  args: {
    items: Array.from({ length: 3 }, (_, idx) => ({
      label: `آیتم ${idx + 1}`,
      href: `/item${idx + 1}`,
    })),
  },
  render(args) {
    return (
      <TabBar>
        <TabBarList>
          {args.items.map((item) => (
            <TabBarItem href={item.href} key={item.label}>
              {item.label}
            </TabBarItem>
          ))}
        </TabBarList>
      </TabBar>
    );
  },
} satisfies Meta<Props>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const Active = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/item1",
      },
    },
  },
} satisfies Story;
