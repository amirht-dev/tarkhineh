"use client";

import { branches } from "@/constants";
import useBranchLocalStorage from "@/hooks/useBranchLocalStorage";
import { use, useEffect } from "react";

const BranchSlugLayout = ({
  children,
  params,
}: LayoutProps<"/branch/[branch_slug]">) => {
  const [, setBranch] = useBranchLocalStorage();
  const { branch_slug } = use(params);

  useEffect(() => {
    const branch = Object.values(branches).find((b) => b.slug === branch_slug);

    if (branch) setBranch(branch.slug);
  }, [branch_slug, setBranch]);

  return children;
};

export default BranchSlugLayout;
