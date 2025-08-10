"use client";

import withSuspense from "@/hoc/withSuspense";
import { twMerge } from "@/lib/tailwind-merge";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  SyntheticEvent,
  useEffect,
  useState,
  useTransition,
} from "react";
import { CloseCircle_Outline } from "../icons/Essential/CloseCircle";
import { SearchNormal_Outline } from "../icons/Search/SearchNormal";
import LoadingSpinner from "../LoadingSpinner";
import { SearchBoxProps } from "./index.types";

const SearchBox = ({
  onChange,
  onClear,
  onSearch,
  fullWidth = true,
  className,
  initialValue = "",
  disabled,
}: SearchBoxProps) => {
  const [value, setValue] = useState(initialValue);
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTermQuery = searchParams.get("q");
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    if (searchTermQuery) setValue(searchTermQuery);
  }, [searchTermQuery]);

  const isDisabled = disabled || !value;

  const handleSearch = (e: SyntheticEvent) => {
    if (!isDisabled) onSearch?.(e, value);
    if (e.isDefaultPrevented() || isDisabled) return;
    const searchParams = new URLSearchParams({ q: value });
    startTransition(() => router.push(`/search?${searchParams.toString()}`));
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
        "flex h-8 items-center gap-1 rounded-sm border px-4 transition-colors lg:h-10 lg:rounded-lg",
        fullWidth ? "w-full" : "max-w-[409px]",
        pending
          ? "border-neutral-gray-3 text-neutral-gray-3"
          : "border-neutral-gray-4 text-neutral-gray-8 not-[:focus-within]:hover:border-neutral-gray-8 focus-within:border-primary",
        className,
      )}
    >
      {value && (
        <button
          onClick={handleClear}
          disabled={pending || disabled}
          className="not-disabled:hover:text-status-error disabled:text-neutral-gray-3 transition-colors"
        >
          <CloseCircle_Outline className="size-3 lg:size-4" />
        </button>
      )}

      <input
        type="search"
        placeholder="جستجو"
        className="text-caption-sm lg:text-caption-md disabled:text-neutral-gray-3 flex-1 border-none font-normal outline-none"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={pending || disabled}
      />

      {pending ? (
        <LoadingSpinner className="size-4 lg:size-6" />
      ) : (
        <button
          onClick={handleSearch}
          disabled={isDisabled}
          className="disabled:text-neutral-gray-3 hover:text-primary transition-colors disabled:cursor-not-allowed"
        >
          <SearchNormal_Outline className="size-4 lg:size-6" />
        </button>
      )}
    </div>
  );
};

export default withSuspense(SearchBox);
