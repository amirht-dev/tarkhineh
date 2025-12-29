import { ResponsiveButton } from "@/components/atoms/Button";
import { ShoppingCard_Outline } from "@/components/atoms/icons/Shop/ShoppingCard";
import {
  Section,
  SectionBody,
  SectionHeader,
  SectionTitle,
} from "@/components/atoms/Section";
import MenuCard from "@/components/molecules/MenuCard";
import { foods, menus } from "@/constants";
import Link from "next/link";

export default async function MenuCategory({
  params,
}: PageProps<"/branch/[branch_slug]/menu/[category_slug]">) {
  const { category_slug } = await params;

  const menu = Object.values(menus).find((menu) => menu.slug === category_slug);

  const menuFoods = foods
    .filter((food) => food.menuId === menu?.id)
    .map((food) => <MenuCard fullWidth key={food.id} food={food} />);

  return (
    <div className="my-6 space-y-6 lg:my-12 lg:space-y-12">
      <Section className="container">
        <SectionHeader className="flex items-center justify-between">
          <SectionTitle>غذاهای ایرانی</SectionTitle>

          <ResponsiveButton
            asChild
            variant="outline"
            size={{ initial: "sm", lg: "md" }}
            prefixIcon={<ShoppingCard_Outline />}
          >
            <Link href="/checkout">تکمیل خرید</Link>
          </ResponsiveButton>
        </SectionHeader>

        <SectionBody className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
          {menuFoods}
        </SectionBody>
      </Section>

      <Section className="container">
        <SectionHeader className="justify-start">
          <SectionTitle>غذاهای غیر ایرانی</SectionTitle>
        </SectionHeader>

        <SectionBody className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
          {menuFoods}
        </SectionBody>
      </Section>

      <Section className="container">
        <SectionHeader className="justify-start">
          <SectionTitle>پیتزاها</SectionTitle>
        </SectionHeader>

        <SectionBody className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
          {menuFoods}
        </SectionBody>
      </Section>

      <Section className="container">
        <SectionHeader className="justify-start">
          <SectionTitle>ساندویچ‌ها</SectionTitle>
        </SectionHeader>

        <SectionBody className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
          {menuFoods}
        </SectionBody>
      </Section>
    </div>
  );
}
