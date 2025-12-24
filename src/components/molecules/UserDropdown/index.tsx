"use client";

import IconButton from "@/components/atoms/IconButton";
import { Logout_Outline } from "@/components/atoms/icons/Arrow/Logout";
import { Location_Outline } from "@/components/atoms/icons/Location/Location";
import { Wallet2_Outline } from "@/components/atoms/icons/Money/Wallet2";
import { Heart_Outline } from "@/components/atoms/icons/Support-Like-Question/Heart";
import { User_Outline } from "@/components/atoms/icons/Users/User";
import { List, ListIcon, ListItem } from "@/components/atoms/List";
import {
  Popover,
  PopoverContent,
  PopoverIconIndicator,
  PopoverTrigger,
} from "@/components/atoms/Popover";
import SignoutButton from "@/components/atoms/SignoutButton";
import useBreakpointMediaQuery from "@/hooks/useBreakpointMediaQuery";
import Link from "next/link";
import { twJoin } from "tailwind-merge";

const UserDropdown = () => {
  const isLG = useBreakpointMediaQuery("lg");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton
          color="white"
          size={isLG ? "lg" : "md"}
          className={twJoin(
            "flex w-auto items-center gap-1",
            isLG ? "px-2" : "px-1",
          )}
        >
          <>
            <User_Outline data-slot="icon" />
            <PopoverIconIndicator className="size-2 lg:size-4" />
          </>
        </IconButton>
      </PopoverTrigger>

      <PopoverContent align="end" sideOffset={8} className="w-40">
        <List>
          <ListItem passClassName>
            <Link href="/dashboard/profile">
              <ListIcon>
                <User_Outline />
              </ListIcon>
              <span>پروفایل</span>
            </Link>
          </ListItem>

          <ListItem passClassName>
            <Link href="">
              <ListIcon>
                <Wallet2_Outline />
              </ListIcon>
              <span>پیگیری سفارش</span>
            </Link>
          </ListItem>

          <ListItem passClassName>
            <Link href="">
              <ListIcon>
                <Heart_Outline />
              </ListIcon>
              <span>علاقه‌مندی‌ها</span>
            </Link>
          </ListItem>

          <ListItem passClassName>
            <Link href="">
              <ListIcon>
                <Location_Outline />
              </ListIcon>
              <span>آدرس‌های من</span>
            </Link>
          </ListItem>

          <ListItem passClassName>
            <SignoutButton className="w-full disabled:opacity-50">
              <ListIcon>
                <Logout_Outline />
              </ListIcon>
              <span>خروج از حساب</span>
            </SignoutButton>
          </ListItem>
        </List>
      </PopoverContent>
    </Popover>
  );
};

export default UserDropdown;
