import { navLinks } from "@/constants";
import type { Meta, StoryObj } from "@storybook/react";
import Header from ".";

const meta = {
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["!autodocs"],
} satisfies Meta<typeof Header>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const MainPage = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: navLinks.root.href,
      },
    },
  },
} satisfies Story;

export const BranchPage = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: navLinks.branches.href,
      },
    },
  },
} satisfies Story;

export const GrantingRepresentationPage = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: navLinks.grantingRepresentation.href,
      },
    },
  },
} satisfies Story;

export const AboutUsPage = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: navLinks.aboutUs.href,
      },
    },
  },
} satisfies Story;

export const ContactUsPage = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: navLinks.contactUs.href,
      },
    },
  },
} satisfies Story;
