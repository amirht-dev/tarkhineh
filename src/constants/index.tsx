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
import { StaticImageData } from "next/image";
import { Entries } from "type-fest";

type Menu = {
  id: string;
  label: string;
  imageSrc: StaticImageData;
  slug: string;
};

export const menus = {
  mainFood: {
    id: "0",
    label: "غذای اصلی",
    imageSrc: mainFood,
    slug: "main-food",
  },
  appetizer: {
    id: "1",
    label: "پیش غذا",
    imageSrc: appetizer,
    slug: "appetizer",
  },
  dessert: {
    id: "2",
    label: "دسر",
    imageSrc: dessert,
    slug: "dessert",
  },
  drink: {
    id: "3",
    label: "نوشیدنی",
    imageSrc: drink,
    slug: "drink",
  },
} satisfies Record<string, Menu>;

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
      slug: item.slug,
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
    href: "/franchise",
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

export type Food = {
  menuId: Menu["id"];
  id: string;
  name: string;
  discount: number | null;
  price: number;
  rates: number[];
  images: string[];
  ingredients: string;
};

// export const foods = times<Food>(20, (idx) => ({
//   id: idx.toString(),
//   menuId: random(0, Object.values(menus).length).toString(),
//   name: "دلمه برگ کلم",
//   discount: Math.random() > 0.5 ? random(5, 30) : null,
//   price: random(100, 200) * 1000,
//   rates: times(random(10, 40), () => random(1, 5)),
//   images: times(5, () => "/images/products/demo.jpg"),
//   ingredients: "پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده",
// }));

export const foods: Food[] = [
  {
    id: "0",
    menuId: "0",
    name: "قورمه سبزی",
    discount: 12,
    price: 100000,
    rates: [2, 4, 1, 1, 2, 1, 1, 5, 2, 4, 5],
    images: [
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
    ],
    ingredients:
      "سبزی قورمه (تره، جعفری، شنبلیله)، گوشت گوسفندی، لوبیا قرمز، لیمو عمانی، پیاز",
  },
  {
    id: "1",
    menuId: "3",
    name: "کباب کوبیده",
    discount: null,
    price: 114000,
    rates: [4, 5, 2, 1, 3, 3, 3, 1, 4, 2, 2, 5, 2, 2, 1, 2, 4, 3, 1, 4, 4],
    images: [
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
    ],
    ingredients: "گوشت چرخ کرده مخلوط گوسفند و گوساله، پیاز، نمک، فلفل سیاه",
  },
  {
    id: "2",
    menuId: "3",
    name: "زرشک پلو با مرغ",
    discount: 24,
    price: 160000,
    rates: [
      1, 3, 5, 2, 1, 2, 3, 2, 2, 1, 3, 1, 3, 5, 1, 1, 4, 2, 4, 4, 1, 5, 2, 2, 4,
      3, 5, 2, 5, 5, 3, 1, 3, 5, 3, 3, 2, 3,
    ],
    images: [
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
    ],
    ingredients: "برنج، مرغ، زرشک، زعفران، پیاز، رب گوجه فرنگی، خلال پسته",
  },
  {
    id: "3",
    menuId: "2",
    name: "فسنجان",
    discount: null,
    price: 129000,
    rates: [
      4, 2, 4, 4, 1, 1, 3, 4, 1, 3, 5, 4, 3, 5, 1, 3, 5, 3, 1, 5, 3, 2, 2, 3,
    ],
    images: [
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
    ],
    ingredients: "گردوی آسیاب شده، رب انار، مرغ یا گوشت قلقلی، پیاز، زعفران",
  },
  {
    id: "4",
    menuId: "1",
    name: "آش رشته",
    discount: null,
    price: 187000,
    rates: [5, 2, 3, 2, 2, 2, 4, 5, 5, 5, 2, 3, 4, 2, 4, 5, 1, 1, 3, 4, 3, 4],
    images: [
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
    ],
    ingredients: "رشته آشی، نخود، لوبیا، عدس، سبزی آش، کشک، پیاز داغ، نعنا داغ",
  },
  {
    id: "5",
    menuId: "4",
    name: "ته چین",
    discount: 26,
    price: 116000,
    rates: [4, 4, 1, 1, 1, 3, 3, 5, 2, 2, 2, 1, 2, 1, 4, 5, 4, 5, 3, 5, 3],
    images: [
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
    ],
    ingredients: "برنج، ماست چکیده، تخم مرغ، زعفران، سینه مرغ، زرشک",
  },
  {
    id: "6",
    menuId: "3",
    name: "قیمه",
    discount: null,
    price: 169000,
    rates: [3, 5, 5, 3, 4, 3, 1, 4, 1, 4, 1],
    images: [
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
    ],
    ingredients:
      "لپه، گوشت خورشتی، پیاز، رب گوجه فرنگی، لیمو عمانی، سیب زمینی سرخ کرده",
  },
  {
    id: "7",
    menuId: "2",
    name: "باقالی پلو با ماهیچه",
    discount: null,
    price: 196000,
    rates: [
      3, 2, 4, 3, 1, 1, 4, 2, 1, 3, 4, 3, 4, 1, 4, 2, 5, 2, 1, 3, 4, 3, 4,
    ],
    images: [
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
    ],
    ingredients: "برنج، باقالی سبز، شوید، گوشت ماهیچه گوسفندی، زعفران، پیاز",
  },
  {
    id: "8",
    menuId: "2",
    name: "میرزا قاسمی",
    discount: 14,
    price: 160000,
    rates: [
      1, 5, 4, 3, 5, 2, 2, 1, 3, 2, 4, 4, 5, 5, 3, 4, 3, 3, 4, 4, 3, 1, 1, 3, 3,
      1, 4, 5, 1, 3, 5, 1, 1, 2, 3,
    ],
    images: [
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
    ],
    ingredients: "بادمجان کبابی، گوجه فرنگی، سیر، تخم مرغ، زردچوبه، روغن",
  },
  {
    id: "9",
    menuId: "3",
    name: "جوجه کباب",
    discount: null,
    price: 194000,
    rates: [
      3, 1, 3, 5, 1, 1, 5, 4, 2, 1, 3, 1, 5, 5, 1, 4, 2, 3, 2, 5, 3, 3, 4, 5,
    ],
    images: [
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
    ],
    ingredients: "سینه یا ران مرغ، پیاز، زعفران، آبلیمو، ماست، روغن زیتون",
  },
  {
    id: "10",
    menuId: "2",
    name: "دیزی",
    discount: null,
    price: 193000,
    rates: [
      5, 1, 3, 5, 5, 4, 5, 5, 5, 4, 4, 4, 2, 1, 1, 3, 5, 3, 3, 3, 3, 4, 5, 3, 2,
      1, 2,
    ],
    images: [
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
    ],
    ingredients:
      "گوشت گوسفندی، دنبه، نخود، لوبیا سفید، سیب زمینی، گوجه فرنگی، پیاز",
  },
  {
    id: "11",
    menuId: "3",
    name: "کوفته تبریزی",
    discount: null,
    price: 181000,
    rates: [1, 5, 2, 5, 3, 5, 4, 5, 5, 1, 5, 2, 1],
    images: [
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
    ],
    ingredients:
      "گوشت چرخ کرده، لپه، برنج، سبزی معطر، پیاز، تخم مرغ، آلو و گردو",
  },
  {
    id: "12",
    menuId: "2",
    name: "عدس پلو",
    discount: null,
    price: 103000,
    rates: [3, 1, 3, 1, 3, 4, 3, 2, 3, 4, 1, 3, 4],
    images: [
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
    ],
    ingredients: "برنج، عدس، گوشت چرخ کرده، کشمش، پیاز داغ، دارچین",
  },
  {
    id: "13",
    menuId: "4",
    name: "سبزی پلو با ماهی",
    discount: null,
    price: 166000,
    rates: [2, 2, 5, 5, 4, 5, 2, 3, 4, 3, 4, 4, 5, 2, 4, 5, 3, 5, 4, 4, 4],
    images: [
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
    ],
    ingredients:
      "برنج، سبزی پلو (تره، جعفری، گشنیز، شوید)، ماهی سفید، سیر، زعفران",
  },
  {
    id: "14",
    menuId: "4",
    name: "لوبیا پلو",
    discount: 19,
    price: 131000,
    rates: [4, 1, 3, 1, 3, 3, 1, 5, 5, 3],
    images: [
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
    ],
    ingredients:
      "برنج، لوبیا سبز، گوشت چرخ کرده یا تکه‌ای، رب گوجه فرنگی، پیاز، دارچین",
  },
  {
    id: "15",
    menuId: "4",
    name: "کلم پلو شیرازی",
    discount: null,
    price: 181000,
    rates: [5, 4, 5, 2, 3, 2, 2, 3, 5, 4, 1],
    images: [
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
    ],
    ingredients:
      "برنج، کلم، گوشت چرخ کرده، سبزی (ترخون، ریحان، شوید)، پیاز، آرد نخودچی",
  },
  {
    id: "16",
    menuId: "0",
    name: "اکبر جوجه",
    discount: 12,
    price: 191000,
    rates: [
      2, 4, 5, 5, 4, 4, 2, 1, 5, 5, 3, 2, 4, 3, 5, 2, 5, 5, 2, 3, 1, 2, 1, 4, 2,
      1, 3, 3, 1, 3, 3, 4, 2, 1, 3, 1, 5, 3, 4, 4,
    ],
    images: [
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
    ],
    ingredients: "جوجه مرغ کوچک، رب انار، کره، لیمو ترش، روغن مایع",
  },
  {
    id: "17",
    menuId: "1",
    name: "قلیه ماهی",
    discount: 5,
    price: 162000,
    rates: [
      2, 2, 3, 3, 1, 4, 4, 5, 4, 5, 5, 4, 4, 4, 4, 1, 3, 2, 5, 4, 4, 1, 4, 4, 5,
      5, 2, 5, 5, 4, 5, 5, 4, 5, 1, 3, 1, 4, 5,
    ],
    images: [
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
    ],
    ingredients:
      "ماهی جنوب، سبزی (گشنیز، شنبلیله)، تمرهندی، سیر، پیاز، فلفل قرمز",
  },
  {
    id: "18",
    menuId: "3",
    name: "خورشت بادمجان",
    discount: 8,
    price: 182000,
    rates: [
      5, 4, 1, 1, 5, 2, 1, 4, 5, 1, 2, 5, 5, 2, 2, 2, 2, 5, 1, 1, 1, 4, 1,
    ],
    images: [
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
    ],
    ingredients:
      "بادمجان، گوشت خورشتی، گوجه فرنگی، پیاز، غوره یا آبغوره، رب گوجه فرنگی",
  },
  {
    id: "19",
    menuId: "3",
    name: "کشک بادمجان",
    discount: null,
    price: 107000,
    rates: [4, 3, 5, 3, 3, 4, 2, 2, 5, 3, 1, 1, 3, 1, 1, 1, 3, 3, 5, 5],
    images: [
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
      "/images/products/demo.jpg",
    ],
    ingredients: "بادمجان، کشک، پیاز داغ، نعنا داغ، سیر، گردوی خرد شده",
  },
];
