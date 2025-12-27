import Button from "@/components/atoms/Button";
import { Home_Outline } from "@/components/atoms/icons/Essential/Home";
import Input from "@/components/atoms/Input";
import DatePicker from "@/components/molecules/DatePicker";
import { Slot } from "@radix-ui/react-slot";
import Image from "next/image";
import { PropsWithChildren, ReactNode } from "react";

const FranchisePage = () => {
  return (
    <div className="mb-6 lg:mb-12">
      <div className="relative flex h-[176px] items-center justify-center lg:h-[336px]">
        <Image
          fill
          src="https://placehold.net/800x600.png"
          alt=""
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[black] opacity-55"></div>
        <p className="text-heading-6 text-primary-tint-1 lg:text-heading-2 relative text-center">
          همین الان به خانواده بزرگ ترخینه بپیوندید!
        </p>
      </div>

      <div className="container mt-6 lg:mt-12">
        <section className="mx-auto grid w-fit grid-cols-2 justify-center gap-8 lg:grid-cols-4 lg:gap-16">
          <Feature icon={<Home_Outline />} />
          <Feature icon={<Home_Outline />} />
          <Feature icon={<Home_Outline />} />
          <Feature icon={<Home_Outline />} />
        </section>

        <hr className="border-neutral-gray-4 my-6 lg:my-12" />

        <section>
          <h4 className="text-heading-6 text-neutral-gray-8 lg:text-heading-4 text-center">
            مزیت دریافت نمایندگی
          </h4>

          <div className="mx-auto mt-4 grid grid-cols-1 gap-1 lg:mt-6 lg:w-fit lg:grid-cols-2 lg:gap-x-10 lg:gap-y-4">
            <Benefit>استفاده از برند شناخته شده ترخینه</Benefit>
            <Benefit>مشاوره در امور حقوقی، مالی و مالیاتی</Benefit>
            <Benefit>پشتیبانی بازاریابی و منابع انسانی</Benefit>
            <Benefit>تسریع روند بازگشت سرمایه</Benefit>
            <Benefit>دریافت مشاوره جهت تامین مواد اولیه و تجهیزات</Benefit>
            <Benefit>مشاوره های تخصصی جهت مدیریت رستوران</Benefit>
            <Benefit>طرح های تشویقی برای ارتقا فروش</Benefit>
          </div>
        </section>

        <hr className="border-neutral-gray-4 my-6 lg:my-12" />

        <section>
          <h4 className="text-heading-6 text-neutral-gray-8 lg:text-heading-4 text-center">
            مزیت دریافت نمایندگی
          </h4>

          <div className="mt-4 lg:mt-6">
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
              <Input label="نام و نام‌خانوادگی" size="responsive" />
              <Input label="شماره تماس" size="responsive" />
              <DatePicker label="زمان ایده‌آل" size="responsive" />
            </div>

            <Button size="responsive" className="mx-auto mt-4 block lg:mt-6">
              درخواست مشاوره
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FranchisePage;

function Feature({ icon }: { icon: ReactNode }) {
  return (
    <div className="flex max-w-[184px] flex-col items-center gap-3 lg:gap-4">
      <div className="border-primary flex size-[80px] items-center justify-center rounded-full border-[3px] lg:size-[140px] lg:border-4">
        <Slot className="text-primary size-[60%]">{icon}</Slot>
      </div>

      <span className="text-neutral-gray-8 text-body-sm lg:text-body-lg text-center font-medium">
        لورم ایپسوم متن ساختگی با تولید سادگی
      </span>
    </div>
  );
}

function Benefit({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center gap-2">
      <span className="border-primary size-3 rotate-45 rounded-sm border-2 lg:size-4" />
      <span className="text-body-sm lg:text-body-xl">{children}</span>
    </div>
  );
}
