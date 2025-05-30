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
import { Instagram_Outline } from "@/components/atoms/icons/SocialMedia/Instagram";
import { Telegram_Outline } from "@/components/atoms/icons/SocialMedia/Telegram";
import { Twitter_Outline } from "@/components/atoms/icons/SocialMedia/Twitter";

export const navLinks = {
  root: {
    label: "صفحه اصلی",
    href: "/",
  },
  branches: {
    label: "شعبه",
    href: "/branches",
  },
  grantingRepresentation: {
    label: "اعطای نمایندگی",
    href: "/granting-representation",
  },
  aboutUs: {
    label: "درباره ما",
    href: "/about-us",
  },
  contactUs: {
    label: "تماس با ما",
    href: "/contact-us",
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

export const menus = {
  mainFood: {
    label: "غذای اصلی",
    imageSrc: mainFood,
  },
  appetizer: {
    label: "پیش غذا",
    imageSrc: appetizer,
  },
  dessert: {
    label: "دسر",
    imageSrc: dessert,
  },
  drink: {
    label: "نوشیدنی",
    imageSrc: drink,
  },
};

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

export const branches = {
  ekbatan: {
    name: "اکباتان",
    address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    images: [branch1, branch2, branch3, branch4, branch5, branch6],
    slug: "ekbatan",
  },
  chalos: {
    name: "chalos",
    address:
      "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
    images: [branch2, branch1, branch3, branch4, branch5, branch6],
    slug: "ekbatan",
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
