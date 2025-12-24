import emptyDesktopImage from "@/assets/images/vectors/empty-desktop.png";
import Button from "@/components/atoms/Button";
import { ChevronLeft_Outline } from "@/components/atoms/icons/Arrow/ChevronLeft";
import { ChevronRight_Outline } from "@/components/atoms/icons/Arrow/ChevronRight";
import { Check_Outline } from "@/components/atoms/icons/Essential/Check";
import {
  Section,
  SectionActionIconButton,
  SectionBody,
  SectionHeader,
  SectionTitle,
} from "@/components/atoms/Section";
import Tag from "@/components/atoms/Tag";
import OrderCard from "@/components/molecules/OrderCard";
import Image from "next/image";
import Link from "next/link";

const OrderTracking = () => {
  const orders = 4;

  return (
    <Section className="lg:border-neutral-gray-4 lg:rounded-xl lg:border lg:p-6">
      <SectionHeader className="lg:border-neutral-gray-4 grid grid-cols-3 lg:border-b lg:pb-2">
        <SectionActionIconButton className="lg:hidden" asChild>
          <Link href="/dashboard">
            <ChevronRight_Outline />
          </Link>
        </SectionActionIconButton>
        <SectionTitle className="max-lg:col-start-2 max-lg:justify-self-center">
          سفارشات
        </SectionTitle>
      </SectionHeader>

      <SectionBody>
        <div className="flex items-center gap-2">
          <Tag color="primary" variant="pill" size="responsive">
            <span>همه</span>
            <Check_Outline />
          </Tag>
          <Tag color="neutral" variant="pill" size="responsive">
            <span>جاری</span>
            <ChevronLeft_Outline />
          </Tag>
          <Tag color="neutral" variant="pill" size="responsive">
            <span>تحویل‌شده</span>
            <ChevronLeft_Outline />
          </Tag>
          <Tag color="neutral" variant="pill" size="responsive">
            <span>لغو‌شده</span>
            <ChevronLeft_Outline />
          </Tag>
        </div>

        {orders > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-4">
            {Array.from({ length: orders }, (_, idx) => (
              <OrderCard deliverType="courier" status="in-progress" key={idx} />
            ))}
          </div>
        ) : (
          <EmptyOrders />
        )}
      </SectionBody>
    </Section>
  );
};

export default OrderTracking;

function EmptyOrders() {
  return (
    <div className="max-lg:border-neutral-gray-4 relative flex h-[256px] flex-col items-center justify-center gap-4 max-lg:rounded-xl max-lg:border lg:h-[380px] lg:gap-8">
      <Image
        src={emptyDesktopImage}
        alt="empty"
        className="absolute w-[200px] lg:w-[325px]"
      />
      <p className="text-caption-md text-neutral-gray-7 lg:text-body-xl mt-12">
        شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
      </p>
      <Button
        variant="outline"
        size="responsive"
        className="relative w-38 justify-center"
        asChild
      >
        <Link href="#">منوی رستوران</Link>
      </Button>
    </div>
  );
}
