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
    </>
  );
};

export default BranchPage;
