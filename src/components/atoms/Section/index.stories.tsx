import { twMerge } from "@/lib/tailwind-merge";
import type { Meta, StoryObj } from "@storybook/react";
import { twJoin } from "tailwind-merge";
import * as Section from ".";
import { ChevronRight_Outline } from "../icons/Arrow/ChevronRight";
import { Close_Outline } from "../icons/Essential/Close";

type Props = {
  title: string;
  prefixActionIconButton: boolean;
  suffixActionIconButton: boolean;
  titlePosition: "center" | "start" | "end";
};

const meta = {
  subcomponents: Section,
  args: {
    title: "عنوان",
    titlePosition: "center",
    prefixActionIconButton: false,
    suffixActionIconButton: false,
  },
  argTypes: {
    titlePosition: {
      control: "inline-radio",
      options: ["start", "center", "end"],
    },

    prefixActionIconButton: {
      control: "boolean",
      mapping: {
        true: <ChevronRight_Outline />,
      },
    },
    suffixActionIconButton: {
      control: "boolean",
      mapping: {
        true: <Close_Outline />,
      },
    },
  },
  render({
    title,
    prefixActionIconButton,
    suffixActionIconButton,
    titlePosition,
  }) {
    const hasPrefixIcon = !!prefixActionIconButton;
    const hasSuffixIcon = !!suffixActionIconButton;
    const hasAtLeastOneIcon = hasPrefixIcon || hasSuffixIcon;
    const hasOnlyPrefixIcon = hasPrefixIcon && !hasSuffixIcon;
    const hasOnlySuffixIcon = !hasPrefixIcon && hasSuffixIcon;
    const hasNotAnyIcon = !hasPrefixIcon && !hasSuffixIcon;
    const hasOnlyOneIcon = hasOnlyPrefixIcon || hasOnlySuffixIcon;

    console.log({
      hasPrefixIcon,
      hasSuffixIcon,
      hasAtLeastOneIcon,
      hasOnlyPrefixIcon,
      hasOnlySuffixIcon,
      hasNotAnyIcon,
      hasOnlyOneIcon,
    });

    return (
      <Section.Section>
        <Section.SectionHeader
          className={twJoin(
            "grid",
            hasNotAnyIcon && "grid-cols-1",
            hasAtLeastOneIcon && "grid-cols-3",
          )}
        >
          {!!prefixActionIconButton && (
            <Section.SectionActionIconButton className="justify-self-start">
              {prefixActionIconButton}
            </Section.SectionActionIconButton>
          )}
          <Section.SectionTitle
            className={twMerge(
              hasNotAnyIcon &&
                titlePosition === "start" &&
                "justify-self-start",
              hasNotAnyIcon &&
                titlePosition === "center" &&
                "justify-self-center",
              hasNotAnyIcon && titlePosition === "end" && "justify-self-end",

              hasOnlyOneIcon &&
                (titlePosition === "start" || titlePosition === "end") &&
                "col-span-2",

              hasAtLeastOneIcon &&
                titlePosition === "center" &&
                "col-start-2 justify-self-center",

              hasOnlyPrefixIcon &&
                titlePosition === "end" &&
                "justify-self-end",

              hasOnlySuffixIcon &&
                titlePosition === "start" &&
                "justify-self-start",
            )}
          >
            {title}
          </Section.SectionTitle>

          {!!suffixActionIconButton && (
            <Section.SectionActionIconButton className="justify-self-end">
              {suffixActionIconButton}
            </Section.SectionActionIconButton>
          )}
        </Section.SectionHeader>

        <Section.SectionBody className="bg-neutral-gray-3 h-[300px]" />
      </Section.Section>
    );
  },
} satisfies Meta<Props>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story<Props>;

export const PrefixIconTitleCenter = {
  args: {
    prefixActionIconButton: true,
    titlePosition: "center",
  },
} satisfies Story<Props>;

export const PrefixIconTitleEnd = {
  args: {
    prefixActionIconButton: true,
    titlePosition: "end",
  },
} satisfies Story<Props>;

export const SuffixIconTitleCenter = {
  args: {
    suffixActionIconButton: true,
    titlePosition: "center",
  },
} satisfies Story<Props>;

export const SuffixIconTitleStart = {
  args: {
    suffixActionIconButton: true,
    titlePosition: "start",
  },
} satisfies Story<Props>;

export const PrefixAndSuffixIconsTitle = {
  args: {
    prefixActionIconButton: true,
    suffixActionIconButton: true,
    titlePosition: "center",
  },
} satisfies Story<Props>;
