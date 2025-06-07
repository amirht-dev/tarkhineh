import menuSheet from "@/assets/images/menu-sheet.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/Accordion";
import { Menu_Outline } from "@/components/atoms/icons/Essential/Menu";
import Logo from "@/components/atoms/Logo";
import NavLink from "@/components/atoms/NavLink";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/atoms/Sheet";
import { navLinks } from "@/constants";
import { Slot } from "@radix-ui/react-slot";
import Image from "next/image";
import { ReactNode } from "react";

const MenuSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className="text-primary lg:hidden">
        <Menu_Outline className="size-6" />
      </SheetTrigger>

      <SheetContent className="gap-0 border-none" dir="rtl">
        <SheetTitle className="sr-only">menu</SheetTitle>

        <SheetHeader className="relative flex h-24 flex-row items-start justify-between">
          <Image
            src={menuSheet}
            alt="menu"
            fill
            className="object-cover object-center brightness-35"
          />
          <Logo color="white" size="sm" className="relative self-center" />
          <SheetClose className="text-neutral-white relative" />
        </SheetHeader>

        <nav className="mt-2 px-4">
          <Accordion type="single" collapsible>
            <ul className="divide-neutral-gray-4 flex flex-col divide-y">
              {Object.values(navLinks).map((link) => (
                <li key={link.label}>
                  {"items" in link ? (
                    <AccordionItem value={link.label}>
                      <AccordionTrigger className="group/accordionItem data-[state=open]:[&_[data-slot=accordion-icon]]:text-primary py-0 hover:no-underline">
                        <MenuNavLinkItem
                          label={link.label}
                          icon={link.icon}
                          href={link.href}
                        />
                      </AccordionTrigger>

                      <AccordionContent>
                        <ul className="flex flex-col items-start gap-2 ps-3">
                          {link.items.map((item) => (
                            <li key={item.label}>
                              <SheetClose asChild>
                                <NavLink
                                  href={item.href}
                                  className="text-caption-sm text-neutral-gray-6 font-normal"
                                >
                                  {item.label}
                                </NavLink>
                              </SheetClose>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ) : (
                    <MenuNavLinkItem
                      label={link.label}
                      icon={link.icon}
                      href={link.href}
                    />
                  )}
                </li>
              ))}
            </ul>
          </Accordion>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;

type MenuItemProps = {
  icon: ReactNode;
  label: string;
  href: string;
};
function MenuNavLinkItem({ icon, label, href }: MenuItemProps) {
  return (
    <SheetClose asChild>
      <NavLink
        className="group/link flex w-fit items-center gap-1 py-2"
        href={href}
      >
        <Slot className="text-neutral-gray-8 group-data-[state=active]/link:text-primary group-data-[state=open]/accordionItem:text-primary size-4">
          {icon}
        </Slot>
        <span className="text-neutral-gray-8 text-caption-md group-data-[state=active]/link:text-primary group-data-[state=open]/accordionItem:text-primary font-normal">
          {label}
        </span>
      </NavLink>
    </SheetClose>
  );
}
