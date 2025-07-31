import { NextPageProps } from "@/types/next";

export default async function MenuCategory({
  params,
}: NextPageProps<"branch_slug" | "category_slug">) {
  const { category_slug } = await params;

  return <div>{category_slug}</div>;
}
