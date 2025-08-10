import Button from "@/components/atoms/Button";
import { ShoppingCard_Outline } from "@/components/atoms/icons/Shop/ShoppingCard";
import {
  Section,
  SectionBody,
  SectionHeader,
  SectionTitle,
} from "@/components/atoms/Section";
import MenuCard from "@/components/molecules/MenuCard";
import { NextPageProps } from "@/types/next";

export default async function MenuCategory({}: NextPageProps<
  "branch_slug" | "category_slug"
>) {
  return (
    <div className="my-6 space-y-6 lg:my-12 lg:space-y-12">
      <Section className="container">
        <SectionHeader className="flex items-center justify-between">
          <SectionTitle>غذاهای ایرانی</SectionTitle>

          <>
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden"
              prefixIcon={<ShoppingCard_Outline />}
            >
              تکمیل خرید
            </Button>
            <Button
              variant="outline"
              size="md"
              className="max-lg:hidden"
              prefixIcon={<ShoppingCard_Outline />}
            >
              تکمیل خرید
            </Button>
          </>
        </SectionHeader>

        <SectionBody className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
          {Array.from({ length: 5 }, (_, idx) => (
            <MenuCard fullWidth key={idx} />
          ))}
        </SectionBody>
      </Section>

      <Section className="container">
        <SectionHeader className="justify-start">
          <SectionTitle>غذاهای غیر ایرانی</SectionTitle>
        </SectionHeader>

        <SectionBody className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
          {Array.from({ length: 5 }, (_, idx) => (
            <MenuCard fullWidth key={idx} />
          ))}
        </SectionBody>
      </Section>

      <Section className="container">
        <SectionHeader className="justify-start">
          <SectionTitle>پیتزاها</SectionTitle>
        </SectionHeader>

        <SectionBody className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
          {Array.from({ length: 5 }, (_, idx) => (
            <MenuCard fullWidth key={idx} />
          ))}
        </SectionBody>
      </Section>

      <Section className="container">
        <SectionHeader className="justify-start">
          <SectionTitle>ساندویچ‌ها</SectionTitle>
        </SectionHeader>

        <SectionBody className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
          {Array.from({ length: 5 }, (_, idx) => (
            <MenuCard fullWidth key={idx} />
          ))}
        </SectionBody>
      </Section>
    </div>
  );
}
