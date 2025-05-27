import footer from "@/assets/images/footer.jpg";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";
import { socialMedias } from "@/constants";
import { twMerge } from "@/lib/tailwind-merge";
import { PropsWithComponentPropsWithoutRef } from "@/types/utils";
import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${footer.src})`,
      }}
    >
      <div className="container grid grid-cols-2 gap-4 pt-4 pb-6 lg:grid-cols-4 lg:pt-8 lg:pb-24">
        <FooterSection title="دسترسی آسان">
          <FooterLink href="">پرسش‌های متداول</FooterLink>
          <FooterLink href="">قوانین ترخینه</FooterLink>
          <FooterLink href="">حریم خصوصی</FooterLink>
          <div className="flex items-center gap-2 lg:gap-4">
            {socialMedias.map((item) => (
              <FooterIcon key={item.title} title={item.title} href={item.href}>
                <Slot className="size-[inherit]">{item.icon}</Slot>
              </FooterIcon>
            ))}
          </div>
        </FooterSection>

        <FooterSection title="شعبه‌های ترخینه">
          <FooterLink href="">شعبه اکباتان</FooterLink>
          <FooterLink href="">شعبه چالوس</FooterLink>
          <FooterLink href="">شعبه اقدسیه</FooterLink>
          <FooterLink href="">شعبه ونک</FooterLink>
        </FooterSection>

        <FooterSection
          title="پیام به ترخینه"
          className="order-first col-span-2 lg:order-last"
        >
          <form
            className={`grid w-full grid-cols-2 gap-3 lg:hidden ${styles.message_form}`}
          >
            <Input
              placeholder="نام و نام خانوادگی"
              size="sm"
              mode="light"
              containerProps={{
                style: { gridArea: "name" },
              }}
            />
            <Input
              placeholder="شماره تماس"
              size="sm"
              mode="light"
              containerProps={{
                style: { gridArea: "phone" },
              }}
            />
            <Input
              placeholder="آدرس ایمیل (اختیاری)"
              type="email"
              size="sm"
              mode="light"
              containerProps={{
                style: { gridArea: "email" },
              }}
            />
            <Textarea
              placeholder="پیام شما"
              mode="light"
              size="sm"
              containerProps={{
                style: { gridArea: "msg" },
              }}
            />
            <Button
              variant="outline"
              color="white"
              className="min-w-[100px] justify-center justify-self-end"
              size="sm"
              style={{
                gridArea: "btn",
              }}
            >
              ارسال پیام
            </Button>
          </form>
          <form
            className={`grid w-full grid-cols-2 max-lg:hidden lg:gap-x-7 lg:gap-y-3 ${styles.message_form}`}
          >
            <Input
              placeholder="نام و نام خانوادگی"
              size="md"
              mode="light"
              containerProps={{
                style: { gridArea: "name" },
              }}
            />
            <Input
              placeholder="شماره تماس"
              size="md"
              mode="light"
              containerProps={{
                style: { gridArea: "phone" },
              }}
            />
            <Input
              placeholder="آدرس ایمیل (اختیاری)"
              type="email"
              size="md"
              mode="light"
              containerProps={{
                style: { gridArea: "email" },
              }}
            />
            <Textarea
              placeholder="پیام شما"
              mode="light"
              size="md"
              containerProps={{
                style: { gridArea: "msg" },
              }}
              maxLength={200}
            />
            <Button
              variant="outline"
              color="white"
              className="min-w-[183px] justify-center justify-self-end"
              style={{
                gridArea: "btn",
              }}
            >
              ارسال پیام
            </Button>
          </form>
        </FooterSection>
      </div>
    </footer>
  );
};

type FooterSectionProps = PropsWithComponentPropsWithoutRef<
  "div",
  {
    title: string;
  }
>;

function FooterSection({ title, children, ...props }: FooterSectionProps) {
  return (
    <div
      {...props}
      className={twMerge("space-y-2 lg:space-y-4", props.className)}
    >
      <h5 className="text-caption-md lg:text-heading-5 text-neutral-white">
        {title}
      </h5>
      <div className="flex flex-col items-start gap-1 ps-2 lg:gap-4 lg:ps-3">
        {children}
      </div>
    </div>
  );
}

function FooterLink(props: ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className={twMerge(
        "text-caption-sm lg:text-caption-lg text-neutral-white hover:text-primary focus:text-primary-shade-2 font-normal transition-colors hover:underline lg:font-medium",
        props.className,
      )}
    />
  );
}

function FooterIcon(props: ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className={twMerge(
        "text-neutral-gray-3 hover:text-primary focus:text-primary-shade-2 size-4 transition-colors lg:size-6",
        props.className,
      )}
    />
  );
}

export default Footer;
