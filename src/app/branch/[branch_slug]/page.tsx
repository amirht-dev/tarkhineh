import { NextPage } from "@/types/next";

const BranchPage: NextPage<"branch_slug"> = async ({ params }) => {
  const { branch_slug } = await params;

  return <div>{branch_slug}</div>;
};

export default BranchPage;
