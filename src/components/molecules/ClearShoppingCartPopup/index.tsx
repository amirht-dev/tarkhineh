"use client";

import { ResponsiveButton } from "@/components/atoms/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/atoms/Dialog";
import { Trash_Outline } from "@/components/atoms/icons/Essential/Trash";
import { twMerge } from "@/lib/tailwind-merge";
import { useGlobalStore } from "@/Providers/global-store";
import { useState } from "react";

const ClearShoppingCartPopup = ({
  triggerClassName,
}: {
  triggerClassName?: string;
}) => {
  const [open, setOpen] = useState(false);

  const clearShoppingCart = useGlobalStore((state) => state.clearShoppingCart);

  const handleCloseDialog = () => setOpen(false);

  const handleClear = () => {
    clearShoppingCart();
    handleCloseDialog();
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={twMerge(
          "text-neutral-gray-8 hover:text-status-error transition-colors",
          triggerClassName,
        )}
      >
        <Trash_Outline className="size-4 lg:size-6" />
      </DialogTrigger>

      <DialogContent className="max-w-xs overflow-hidden border-none p-0 lg:max-w-sm">
        <DialogHeader className="bg-neutral-gray-1 grid grid-cols-[1fr_auto_1fr]">
          <DialogTitle className="col-start-2">حذف محصولات</DialogTitle>
          <DialogClose className="col-start-3 justify-self-end" />
        </DialogHeader>

        <div className="mt-4 mb-8">
          <DialogDescription className="text-center">
            همه محصولات سبد خرید شما حذف شود؟
          </DialogDescription>
        </div>

        <DialogFooter className="mb-6 flex justify-center gap-4">
          <ResponsiveButton
            variant="outline"
            size={{ initial: "sm", lg: "md" }}
            className="w-full max-w-[117px]"
            onClick={handleCloseDialog}
          >
            بازگشت
          </ResponsiveButton>

          <ResponsiveButton
            variant="twotone"
            color="error"
            size={{ initial: "sm", lg: "md" }}
            className="w-full max-w-[117px]"
            onClick={handleClear}
          >
            حذف
          </ResponsiveButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ClearShoppingCartPopup;
