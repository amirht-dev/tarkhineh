"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/atoms/Dialog";
import IconButton from "@/components/atoms/IconButton";
import { SearchNormal_Outline } from "@/components/atoms/icons/Search/SearchNormal";
import SearchBox from "@/components/atoms/SearchBox";
import { SearchBoxProps } from "@/components/atoms/SearchBox/index.types";
import { useState } from "react";
import { SearchModalProps } from "./index.types";

const SearchModal = ({
  onChange,
  onClear,
  onOpenChange,
  onSearch,
}: SearchModalProps) => {
  const [open, setOpen] = useState(false);

  const handleSearch: SearchBoxProps["onSearch"] = (e, searchTerm) => {
    onSearch?.(e, searchTerm);
    if (e.isDefaultPrevented()) return;
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        onOpenChange?.(open);
        setOpen(open);
      }}
    >
      <DialogTrigger asChild>
        <IconButton color="white" size="lg" className="max-lg:hidden">
          <SearchNormal_Outline />
        </IconButton>
      </DialogTrigger>

      <DialogContent
        dir="rtl"
        className="overflow max-w-[600px] overflow-hidden p-0 pb-12"
      >
        <DialogHeader className="grid grid-cols-3">
          <DialogTitle className="col-start-2 justify-self-center">
            جستجو
          </DialogTitle>
          <DialogClose className="justify-self-end" />
        </DialogHeader>

        <DialogDescription className="text-center">
          لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.
        </DialogDescription>

        <SearchBox
          fullWidth={false}
          className="mx-auto mt-3"
          onChange={onChange}
          onClear={onClear}
          onSearch={handleSearch}
        />
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
