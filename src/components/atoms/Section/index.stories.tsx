import type { Meta, StoryObj } from "@storybook/react";
import * as Section from ".";

type Props = {
  title: string;
};

const meta = {
  subcomponents: Section,
  args: {
    title: "عنوان",
  },
} satisfies Meta<Props>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {
  render({ title }) {
    return (
      <Section.Section>
        <Section.SectionHeader>
          <Section.SectionTitle>{title}</Section.SectionTitle>
        </Section.SectionHeader>

        <Section.SectionBody className="bg-neutral-gray-3 h-[300px]" />
      </Section.Section>
    );
  },
} satisfies Story<Props>;
