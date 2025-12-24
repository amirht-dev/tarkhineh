import { ChevronRight_Outline } from "@/components/atoms/icons/Arrow/ChevronRight";
import {
  Section,
  SectionActionIconButton,
  SectionBody,
  SectionHeader,
  SectionTitle,
} from "@/components/atoms/Section";
import Link from "next/link";
import EditUserProfile from "./_components/EditUserProfile";

const DashboardProfilePage = () => {
  return (
    <Section className="lg:border-neutral-gray-4 lg:rounded-xl lg:border lg:p-6">
      <SectionHeader className="lg:border-neutral-gray-4 grid grid-cols-3 lg:border-b lg:pb-2">
        <SectionActionIconButton className="lg:hidden" asChild>
          <Link href="/dashboard">
            <ChevronRight_Outline />
          </Link>
        </SectionActionIconButton>
        <SectionTitle className="max-lg:col-start-2 max-lg:justify-self-center">
          پروفایل
        </SectionTitle>
      </SectionHeader>

      <SectionBody>
        <EditUserProfile />
      </SectionBody>
    </Section>
  );
};

export default DashboardProfilePage;
