import about from "@/assets/images/about.jpg";
import Button from "@/components/atoms/Button";
import { ChevronLeft_Outline } from "@/components/atoms/icons/Arrow/ChevronLeft";
import { Diagram_Outline } from "@/components/atoms/icons/Business/Diagram";
import { MenuBoard_Outline } from "@/components/atoms/icons/Content-Edit/MenuBoard";
import { HomeWifi_Outline } from "@/components/atoms/icons/Essential/HomeWifi";
import { User_Outline } from "@/components/atoms/icons/Users/User";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

const AboutSection = () => {
  return (
    <section
      className="bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${about.src})`,
      }}
    >
      <div className="container flex flex-col gap-6 py-4 lg:flex-row lg:items-center lg:justify-between lg:py-12">
        <div className="flex flex-col items-start gap-2 lg:w-1/2 lg:gap-6">
          <h4 className="text-overline-lg text-neutral-white lg:text-heading-4">
            رستوران‌های زنجیره‌ای ترخینه
          </h4>

          <p className="text-caption-sm text-neutral-white lg:text-body-xl text-justify font-normal">
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>

          <>
            <Button
              className="self-end lg:hidden"
              size="sm"
              suffixIcon={<ChevronLeft_Outline />}
              variant="outline"
              color="white"
            >
              اطلاعات بیشتر
            </Button>

            <Button
              className="self-end max-lg:hidden"
              size="md"
              suffixIcon={<ChevronLeft_Outline />}
              variant="outline"
              color="white"
            >
              اطلاعات بیشتر
            </Button>
          </>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          <FeatureItem icon={<User_Outline />} label="پرسنلی مجرب و حرفه‌ای" />
          <FeatureItem icon={<Diagram_Outline />} label="کیفیت بالای غذاها" />
          <FeatureItem
            icon={<HomeWifi_Outline />}
            label="محیطی دلنشین و آرام"
          />
          <FeatureItem icon={<MenuBoard_Outline />} label="منوی متنوع" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

type FeatureItemProps = {
  icon: ReactNode;
  label: string;
};

function FeatureItem({ icon, label }: FeatureItemProps) {
  return (
    <div className="text-neutral-white flex flex-col items-center gap-1">
      <Slot className="size-6 lg:size-12">{icon}</Slot>

      <span className="text-caption-md lg:text-body-lg">{label}</span>
    </div>
  );
}
