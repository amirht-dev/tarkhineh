import { NextLayoutProps } from "@/types/next";

export default async function BranchMenuLayout({
  children,
  params,
}: NextLayoutProps<"branch_slug">) {
  const { branch_slug } = await params;

  return children;
}
