import SearchBox from "@/components/atoms/SearchBox";
import { ChipsList, ChipsListItem } from "@/components/molecules/ChipsList";
import { TabBar, TabBarItem, TabBarList } from "@/components/molecules/TabBar";
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

      <div className="mt-2 overflow-hidden">
        <div className="container flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <ChipsList
            wrapperClassName="flex-1 shrink min-w-0"
            emblaNavigationButtonClassName="max-lg:hidden"
            emblaWrapperClassName="max-lg:overflow-visible"
          >
            {Array.from({ length: 20 }, (_, idx) => (
              <ChipsListItem key={idx}>غذاهای ایرانی</ChipsListItem>
            ))}
          </ChipsList>

          <SearchBox
            fullWidth={false}
            className="w-full shrink-0 lg:w-[496px]"
          />
        </div>
      </div>

      {children}
    </>
  );
}
