import {
  Section,
  SectionBody,
  SectionHeader,
  SectionTitle,
} from "@/components/atoms/Section";
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

        <SectionBody>dsfdf</SectionBody>
      </Section>
    </>
  );
};

export default BranchPage;
