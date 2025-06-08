import type { Meta, StoryObj } from "@storybook/react";
import NavigationMenu from ".";
import { navLinks } from "@/constants";

const meta = {
  component: NavigationMenu,
} satisfies Meta<typeof NavigationMenu>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const HomePage = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: navLinks.root.href,
      },
    },
  },
} satisfies Story;

export const MenuPage = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: navLinks.menu.href,
      },
    },
  },
} satisfies Story;

export const BranchesPage = {
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
