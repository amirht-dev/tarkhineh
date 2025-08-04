import type { Preview } from "@storybook/react";
import { SessionProvider } from "next-auth/react";
import BreakpointProvider from "../src/contexts/breakpoint";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  globalTypes: {
    dir: {
      description: "direction of application",
      toolbar: {
        title: "dir",
        items: ["ltr", "rtl"],
        dynamicTitle: true,
        icon: "TransferIcon",
      },
    },
  },
  initialGlobals: {
    dir: "rtl",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => <SessionProvider>{Story()}</SessionProvider>,
    (Story) => <BreakpointProvider>{Story()}</BreakpointProvider>,
    (Story, { globals }) => <div dir={globals.dir}>{Story()}</div>,
  ],
};

export default preview;
