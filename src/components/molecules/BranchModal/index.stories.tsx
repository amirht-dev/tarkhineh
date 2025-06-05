/* eslint-disable react-hooks/rules-of-hooks */
import useBranchLocalStorage from "@/hooks/useBranchLocalStorage";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import BranchModal from ".";
const meta = {
  component: BranchModal,
  tags: ["!autodocs"],
  render() {
    const [branch, setBranch] = useBranchLocalStorage();

    const handleReset = () => {
      action("reset")();
      setBranch(null);
    };
    return (
      <>
        <BranchModal />
        <div>
          {branch == null
            ? "branch not selected"
            : `selected branch: ${branch}`}
        </div>
        <button onClick={handleReset}>reset branch</button>
      </>
    );
  },
} satisfies Meta<typeof BranchModal>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {
  name: "BranchModal",
} satisfies Story;
