import { CallCalling_Outline } from "@/components/atoms/icons/Call/CallCalling";
import { Location_Outline } from "@/components/atoms/icons/Location/Location";
import { Clock_Outline } from "@/components/atoms/icons/Time/Clock";
import { twMerge } from "@/lib/tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { ComponentPropsWithRef, ReactNode } from "react";

function BranchInfo({
  ref,
  className,
}: Pick<ComponentPropsWithRef<"div">, "ref" | "className">) {
  return (
    <div
      ref={ref}
      className={twMerge(
        "border-primary bg-neutral-white relative mx-auto flex max-w-[810px] flex-wrap gap-2 rounded-sm border p-2 lg:gap-11 lg:rounded-lg lg:border-3 lg:px-12 lg:py-4",
        className,
      )}
    >
      <BranchInfoItem
        icon={<CallCalling_Outline />}
        content="۰۲۱-۳۳۵۳۵۳۵۴ ۰۲۱-۳۳۵۳۵۳۵۶"
      />
      <BranchInfoItem
        icon={<Location_Outline />}
        content="شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم"
      />
      <BranchInfoItem
        icon={<Clock_Outline />}
        content="همه‌روزه از ساعت ۱۲  الی ۲۳ "
      />
    </div>
  );
}

function BranchInfoItem({
  icon,
  content,
}: {
  icon: ReactNode;
  content: string;
}) {
  return (
    <div className="text-neutral-gray-8 flex flex-row items-center gap-2 lg:flex-1 lg:flex-col">
      <Slot className="size-4 shrink-0 lg:size-8">{icon}</Slot>

      <div className="text-caption-sm lg:text-body-md text-center font-normal text-wrap">
        {content}
      </div>
    </div>
  );
}
export default BranchInfo;
