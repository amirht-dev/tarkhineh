import { useLocalStorage } from "@uidotdev/usehooks";

export const LOCAL_STORAGE_BRANCH_KEY = "branch";

function useBranchLocalStorage() {
  const branchState = useLocalStorage<string | null>(
    LOCAL_STORAGE_BRANCH_KEY,
    null,
  );

  return branchState;
}

export default useBranchLocalStorage;
