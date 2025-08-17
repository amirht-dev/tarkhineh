import type { Preview } from "@storybook/react";
import { SessionProvider } from "next-auth/react";
import BreakpointProvider from "../src/contexts/breakpoint";
import { StorybookGlobalStoreProvider } from "../src/Providers/global-store";
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
    globalState: {
      resetStorage: true,
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
    (Story, { parameters }) => (
      <StorybookGlobalStoreProvider
        resetStorage={parameters.globalState?.resetStorage}
        initialState={parameters.globalState?.initialState}
      >
        {Story()}
      </StorybookGlobalStoreProvider>
    ),
    (Story) => <SessionProvider>{Story()}</SessionProvider>,
    (Story) => <BreakpointProvider>{Story()}</BreakpointProvider>,
    (Story, { globals }) => <div dir={globals.dir}>{Story()}</div>,
  ],
};

export default preview;
