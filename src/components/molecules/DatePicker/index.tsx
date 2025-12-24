"use client";

import { ChevronLeft_Outline } from "@/components/atoms/icons/Arrow/ChevronLeft";
import { ChevronRight_Outline } from "@/components/atoms/icons/Arrow/ChevronRight";
import Input from "@/components/atoms/Input";
import { InputProps } from "@/components/atoms/Input/index.types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atoms/Popover";
import { useState } from "react";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Calendar, Value } from "react-multi-date-picker";
import { twJoin } from "tailwind-merge";

export type DatePickerProps = {
  defaultValue?: Value;
  value?: Value;
  onChange?: (value: DateObject) => void;
} & Omit<InputProps, "value" | "onChange">;

const DatePicker = ({
  value,
  onChange,
  defaultValue,
  ...props
}: DatePickerProps) => {
  const [open, setOpen] = useState(false);
  const [_value, setValue] = useState<Value | undefined>(defaultValue);

  const val = value ?? _value;

  const resolvedValue =
    val instanceof DateObject ? val.toDate() : val ? new Date(val) : undefined;

  const handleChangeDate = (value: DateObject) => {
    if (onChange) onChange(value);
    else setValue(value);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Input
          readOnly
          type="text"
          autoComplete="off"
          {...props}
          value={resolvedValue?.toLocaleDateString("fa")}
        />
      </PopoverTrigger>

      <PopoverContent align="center">
        <Calendar
          calendar={persian}
          weekDays={["ش", "ی", "د", "س", "چ", "پ", "ج"]}
          renderButton={(
            direction: "left" | "right",
            handleClick: () => void,
          ) => {
            const Icon =
              direction === "left" ? ChevronRight_Outline : ChevronLeft_Outline;
            return (
              <button
                onClick={handleClick}
                className="border-primary text-primary grid size-4 place-items-center rounded-full border lg:size-6"
              >
                <Icon className="size-3 lg:size-4" />
              </button>
            );
          }}
          value={value}
          onChange={handleChangeDate}
          locale={persian_fa}
          className={twJoin([
            "[&_.rmdp-week-day]:text-neutral-gray-6! [&_.rmdp-selected>span]:bg-primary! [&_.rmdp-today:not(.rmdp-selected)>span]:bg-primary-tint-4! [&_.rmdp-day:hover:not(.rmdp-selected)>span]:bg-primary-tint-4! [&_.rmdp-day:hover>span]:text-neutral-white",
          ])}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
