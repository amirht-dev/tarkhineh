import samanBankImage from "@/assets/images/banks/bank-saman1.svg";
import mellatBankImage from "@/assets/images/banks/Mellat.svg";
import persianBankImage from "@/assets/images/banks/Parsian-Bank-Logo.svg";
import branch1 from "@/assets/images/branches/branch-1.jpg";
import branch2 from "@/assets/images/branches/branch-2.jpg";
import branch3 from "@/assets/images/branches/branch-3.jpg";
import branch4 from "@/assets/images/branches/branch-4.jpg";
import branch5 from "@/assets/images/branches/branch-5.jpg";
import branch6 from "@/assets/images/branches/branch-6.jpg";
import appetizer from "@/assets/images/menu/appetizer.png";
import dessert from "@/assets/images/menu/dessert.png";
import drink from "@/assets/images/menu/drink.png";
import mainFood from "@/assets/images/menu/main-food.png";
import slide1 from "@/assets/images/slides/slide-1.jpg";
import slide2 from "@/assets/images/slides/slide-2.jpg";
import slide3 from "@/assets/images/slides/slide-3.jpg";
import { Building_Outline } from "@/components/atoms/icons/Building/Building";
import { CallCalling_Outline } from "@/components/atoms/icons/Call/CallCalling";
import { MenuBoard_Outline } from "@/components/atoms/icons/Content-Edit/MenuBoard";
import { Home_Outline } from "@/components/atoms/icons/Essential/Home";
import { HomeHashtag_Outline } from "@/components/atoms/icons/Essential/HomeHashtag";
import { CardPos_Outline } from "@/components/atoms/icons/Money/CardPos";
import { Wallet2_Outline } from "@/components/atoms/icons/Money/Wallet2";
import { Instagram_Outline } from "@/components/atoms/icons/SocialMedia/Instagram";
import { Telegram_Outline } from "@/components/atoms/icons/SocialMedia/Telegram";
import { Twitter_Outline } from "@/components/atoms/icons/SocialMedia/Twitter";
import { Profile2Users_Outline } from "@/components/atoms/icons/Users/Profile2Users";
import { Entries } from "type-fest";

export const menus = {
  mainFood: {
    label: "غذای اصلی",
    imageSrc: mainFood,
    slug: "main-food",
  },
  appetizer: {
    label: "پیش غذا",
    imageSrc: appetizer,
    slug: "appetizer",
  },
  dessert: {
    label: "دسر",
    imageSrc: dessert,
    slug: "dessert",
  },
  drink: {
    label: "نوشیدنی",
    imageSrc: drink,
    slug: "drink",
  },
};

export const branches = {
  ekbatan: {
    name: "اکباتان",
    address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    images: [branch1, branch2, branch3, branch4, branch5, branch6],
    slug: "ekbatan",
  },
  chalos: {
    name: "چالوس",
    address:
      "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
    images: [branch2, branch1, branch3, branch4, branch5, branch6],
    slug: "chalos",
  },
  aghdasieh: {
    name: "اقدسیه",
    address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
    images: [branch3, branch1, branch2, branch4, branch5, branch6],
    slug: "aghdasieh",
  },
  vanak: {
    name: "ونک",
    address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
    images: [branch4, branch1, branch2, branch3, branch5, branch6],
    slug: "vanak",
  },
};

export const navLinks = {
  root: {
    label: "صفحه اصلی",
    href: "/",
    icon: <Home_Outline />,
  },
  menu: {
    label: "منو",
    href: "/menu",
    icon: <MenuBoard_Outline />,
    items: Object.values(menus).map((item) => ({
      label: item.label,
      href: `/menu/${item.slug}`,
    })),
  },
  branches: {
    label: "شعبه",
    href: "/branches",
    icon: <HomeHashtag_Outline />,
    items: Object.values(branches).map((item) => ({
      label: item.name,
      href: `/branch/${item.slug}`,
    })),
  },
  grantingRepresentation: {
    label: "اعطای نمایندگی",
    href: "/granting-representation",
    icon: <Building_Outline />,
  },
  aboutUs: {
    label: "درباره ما",
    href: "/about-us",
    icon: <Profile2Users_Outline />,
  },
  contactUs: {
    label: "تماس با ما",
    href: "/contact-us",
    icon: <CallCalling_Outline />,
  },
};

export const heroSlides = [
  {
    title: "تجربه غذای سالم و گیاهی به سبک ترخینه",
    imageSrc: slide1,
    action: {
      label: "سفارش آنلاین غذا",
      href: "#",
    },
  },
  { title: "طعم بی‌نظیر طبیعت!", imageSrc: slide2, link: "#" },
  {
    title: "لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!",
    imageSrc: slide3,
    action: {
      label: "سفارش آنلاین غذا",
      href: "#",
    },
  },
];

export const socialMedias = [
  {
    title: "twitter",
    icon: <Twitter_Outline />,
    href: "",
  },
  {
    title: "instagram",
    icon: <Instagram_Outline />,
    href: "",
  },
  {
    title: "telegram",
    icon: <Telegram_Outline />,
    href: "",
  },
];

export const breakpoint = {
  initial: 0,
  lg: 1024,
};

export type Breakpoint = keyof typeof breakpoint;

export const breakpointEntires = Object.entries(breakpoint) as Entries<
  typeof breakpoint
>;

export const TEST_OTP_CODE = "11111";

export const paymentMethods = [
  {
    type: "internet" as const,
    label: "پرداخت اینترنتی",
    subLabel: "پرداخت اینترنتی",
    icon: <CardPos_Outline />,
  },
  {
    type: "on-site" as const,
    label: "پرداخت در محل",
    subLabel: "پرداخت در محل",
    icon: <Wallet2_Outline />,
  },
];

export type PaymentMethod = (typeof paymentMethods)[number]["type"];

export const paymentGateways = [
  {
    name: "saman-bank",
    image: samanBankImage,
  },
  {
    name: "mellat-bank",
    image: mellatBankImage,
  },
  {
    name: "persian-bank",
    image: persianBankImage,
  },
];
