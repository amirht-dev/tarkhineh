import useLocalStorageState from "./useLocalStorageState";

export const LOCAL_STORAGE_BRANCH_KEY = "branch";

function useBranchLocalStorage() {
  return useLocalStorageState<string | null>(LOCAL_STORAGE_BRANCH_KEY, null);
}

export default useBranchLocalStorage;
