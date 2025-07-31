import { TabBar, TabBarList, TabBarItem } from "@/components/molecules/TabBar";
import { menus } from "@/constants";
import { NextLayoutProps } from "@/types/next";

export default async function BranchMenuLayout({
  children,
  params,
}: NextLayoutProps<"branch_slug">) {
  const { branch_slug } = await params;

  return (
    <>
      <TabBar>
        <TabBarList>
          {Object.values(menus).map((menu) => (
            <TabBarItem
              key={menu.slug}
              href={`/branch/${branch_slug}/menu/${menu.slug}`}
            >
              {menu.label}
            </TabBarItem>
          ))}
        </TabBarList>
      </TabBar>

      {children}
    </>
  );
}
