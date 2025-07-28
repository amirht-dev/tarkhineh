import { ResponsiveButton } from "@/components/atoms/Button";
import { Note_Outline } from "@/components/atoms/icons/Content-Edit/Note";
import {
  Section,
  SectionBody,
  SectionHeader,
  SectionTitle,
} from "@/components/atoms/Section";
import ProductCardSlider from "@/components/molecules/ProductCardSlider";
import { NextPage } from "@/types/next";

const BranchPage: NextPage<"branch_slug"> = async ({ params }) => {
  const { branch_slug } = await params;

  return (
    <>
      <Section>
        <SectionHeader className="container grid grid-cols-1">
          <SectionTitle className="justify-self-start">
            پیشنهاد ویژه
          </SectionTitle>
        </SectionHeader>

        <SectionBody className="relative overflow-hidden">
          <ProductCardSlider />
        </SectionBody>
      </Section>

      <Section className="bg-primary-shade-2 pt-6 pb-10">
        <SectionHeader className="container grid grid-cols-1">
          <SectionTitle className="text-neutral-white justify-self-start">
            غذاهای محبوب
          </SectionTitle>
        </SectionHeader>

        <SectionBody className="relative overflow-hidden">
          <ProductCardSlider />
        </SectionBody>
      </Section>

      <Section className="mb-0">
        <SectionHeader className="container grid grid-cols-1">
          <SectionTitle className="justify-self-start">
            غذاهای غیر ایرانی
          </SectionTitle>
        </SectionHeader>

        <SectionBody className="relative overflow-hidden">
          <ProductCardSlider />
        </SectionBody>
      </Section>

      <section className="mt-3 flex justify-center lg:mt-6">
        <ResponsiveButton
          variant="outline"
          size={{ initial: "sm", lg: "md" }}
          prefixIcon={<Note_Outline />}
        >
          مشاهده منوی کامل
        </ResponsiveButton>
      </section>
    </>
  );
};

export default BranchPage;
