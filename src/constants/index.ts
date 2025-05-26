import slide1 from "@/assets/images/slides/slide-1.jpg";
import slide2 from "@/assets/images/slides/slide-2.jpg";
import slide3 from "@/assets/images/slides/slide-3.jpg";

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
