import UserDashboardPanel from "@/components/molecules/UserDashboardPanel";
import { NextLayoutProps } from "@/types/next";

const DashboardLayout = ({ children }: NextLayoutProps) => {
  return (
    <div className="container py-4 lg:flex lg:items-start lg:gap-6 lg:py-12">
      <div className="border-neutral-gray-4 sticky top-4 w-full max-w-xs shrink-0 rounded-xl border max-lg:hidden">
        <UserDashboardPanel name="" phone="" />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DashboardLayout;
