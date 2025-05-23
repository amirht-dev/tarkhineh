import type { Meta, StoryObj } from '@storybook/react';

const Comp = () => {
  return <div>تست</div>;
};

const meta = {
  component: Comp,
} satisfies Meta;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;
