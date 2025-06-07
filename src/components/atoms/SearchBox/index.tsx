"use client";

import { twMerge } from "@/lib/tailwind-merge";
import { useRouter } from "next/navigation";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  SyntheticEvent,
  useState,
} from "react";
import { CloseCircle_Outline } from "../icons/Essential/CloseCircle";
import { SearchNormal_Outline } from "../icons/Search/SearchNormal";
import { SearchBoxProps } from "./index.types";

const SearchBox = ({
  onChange,
  onClear,
  onSearch,
  fullWidth = true,
  className,
}: SearchBoxProps) => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const isDisabled = !value;

  const handleSearch = (e: SyntheticEvent) => {
    if (!isDisabled) onSearch?.(e, value);
    if (e.isDefaultPrevented() || isDisabled) return;
    const searchParams = new URLSearchParams({ q: encodeURI(value) });
    router.push(`/search?${searchParams.toString()}`);
  };

  const handleClear = (e: SyntheticEvent<HTMLButtonElement>) => {
    onClear?.(e);
    if (!e.isDefaultPrevented()) setValue("");
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange?.(e, e.target.value);
    if (!e.isDefaultPrevented()) setValue(e.target.value);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") handleSearch(e);
  };

  return (
    <div
      className={twMerge(
        "border-neutral-gray-4 text-neutral-gray-8 not-[:focus-within]:hover:border-neutral-gray-8 focus-within:border-primary flex h-8 items-center gap-1 rounded-sm border px-4 transition-colors lg:h-10 lg:rounded-lg",
        fullWidth ? "w-full" : "max-w-[409px]",
        className,
      )}
    >
      {value && (
        <button onClick={handleClear}>
          <CloseCircle_Outline className="hover:text-status-error size-3 transition-colors lg:size-4" />
        </button>
      )}

      <input
        type="search"
        placeholder="جستجو"
        className="text-caption-sm lg:text-caption-md flex-1 border-none font-normal outline-none"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <button
        onClick={handleSearch}
        disabled={isDisabled}
        className="disabled:text-neutral-gray-3 hover:text-primary transition-colors disabled:cursor-not-allowed"
      >
        <SearchNormal_Outline className="size-4 lg:size-6" />
      </button>
    </div>
  );
};

export default SearchBox;
