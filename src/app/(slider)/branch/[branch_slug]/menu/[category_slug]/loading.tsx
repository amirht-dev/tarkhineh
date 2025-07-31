import {
  Section,
  SectionBody,
  SectionHeader,
  SectionTitle,
} from "@/components/atoms/Section";
import { Skeleton } from "@/components/atoms/Skeleton";
import { MenuCardSkeleton } from "@/components/molecules/MenuCard";

const BranchMenuLoading = () => {
  const skeleton = (
    <Section className="container">
      <SectionHeader className="justify-start">
        <SectionTitle>
          <Skeleton size="text" className="w-20" />
        </SectionTitle>
      </SectionHeader>

      <SectionBody className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
        {Array.from({ length: 3 }, (_, idx) => (
          <MenuCardSkeleton fullWidth key={idx} />
        ))}
      </SectionBody>
    </Section>
  );
  return (
    <div className="my-6 space-y-6 lg:my-12 lg:space-y-12">
      {skeleton}

      {skeleton}
    </div>
  );
};

export default BranchMenuLoading;
