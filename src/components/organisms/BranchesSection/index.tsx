import {
  Section,
  SectionBody,
  SectionHeader,
  SectionTitle,
} from "@/components/atoms/Section";
import BranchCard from "@/components/molecules/BranchCard";
import { branches } from "@/constants";

const BranchesSection = () => {
  return (
    <Section className="container">
      <SectionHeader>
        <SectionTitle>ترخینه گردی</SectionTitle>
      </SectionHeader>

      <SectionBody className="grid grid-cols-1 gap-3 lg:grid-cols-4 lg:gap-6">
        {Object.values(branches).map((branch, idx) => (
          <BranchCard
            fullWidth
            slug={branch.slug}
            key={idx}
            name={branch.name}
            address={branch.address}
            images={branch.images}
          />
        ))}
      </SectionBody>
    </Section>
  );
};

export default BranchesSection;
