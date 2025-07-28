import { ResponsiveButton } from "@/components/atoms/Button";
import { Note_Outline } from "@/components/atoms/icons/Content-Edit/Note";
import ImageSlider, { ImageSliderSlide } from "@/components/atoms/ImageSlider";
import {
  Section,
  SectionBody,
  SectionHeader,
  SectionTitle,
} from "@/components/atoms/Section";
import BranchInfo from "@/components/molecules/BranchInfo";
import ProductCardSlider from "@/components/molecules/ProductCardSlider";
import { heroSlides } from "@/constants";
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

      <Section>
        <SectionHeader className="flex justify-center">
          <SectionTitle>شعبه اکباتان</SectionTitle>
        </SectionHeader>

        <SectionBody>
          <ImageSlider
            sidesNavigation
            prevButtonClassName="[&_svg]:size-6 lg:[&_svg]:size-12"
            nextButtonClassName="[&_svg]:size-6 lg:[&_svg]:size-12"
          >
            {heroSlides.map((slide, idx) => (
              <ImageSliderSlide
                overlay={false}
                key={idx}
                src={slide.imageSrc}
                alt={slide.title}
                className="overlay-20"
              />
            ))}
          </ImageSlider>

          <div className="container -mt-[15px] lg:-mt-[30px]">
            <BranchInfo />
          </div>
        </SectionBody>
      </Section>
    </>
  );
};

export default BranchPage;
