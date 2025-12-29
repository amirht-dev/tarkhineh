import UserDashboardPanel from "@/components/molecules/UserDashboardPanel";

const DashboardLayout = ({ children }: LayoutProps<"/dashboard">) => {
  return (
    <div className="container py-4 lg:flex lg:items-start lg:gap-6 lg:py-12">
      <div className="border-neutral-gray-4 sticky top-4 w-full max-w-xs shrink-0 rounded-xl border max-lg:hidden">
        <UserDashboardPanel name="" phone="" />
      </div>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
};

export default DashboardLayout;
