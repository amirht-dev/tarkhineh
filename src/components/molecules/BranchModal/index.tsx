"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/atoms/Dialog";
import { branches } from "@/constants";
import useBranchLocalStorage, {
  LOCAL_STORAGE_BRANCH_KEY,
} from "@/hooks/useBranchLocalStorage";
import { useEffect, useState } from "react";
import BranchCard from "../BranchCard";

const BranchModal = () => {
  const [open, setOpen] = useState(false);

  const [, setBranch] = useBranchLocalStorage();

  const handleClick = (name: string) => {
    setBranch(name);
    setOpen(false);
  };

  useEffect(() => {
    const localBranch = localStorage.getItem(LOCAL_STORAGE_BRANCH_KEY);
    if (localBranch && !JSON.parse(localBranch)) setOpen(true);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden p-0 lg:max-w-[808px]" dir="rtl">
        <DialogHeader className="grid grid-cols-3">
          <DialogTitle className="col-start-2 justify-self-center">
            انتخاب شعبه
          </DialogTitle>

          <DialogClose className="justify-self-end" />
        </DialogHeader>

        <DialogDescription className="text-center">
          برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید:
        </DialogDescription>

        <div className="grid grid-cols-1 gap-2 p-4 lg:grid-cols-4 lg:gap-5 lg:p-6">
          {Object.values(branches).map((branch) => (
            <BranchCard
              key={branch.slug}
              address={branch.address}
              images={branch.images}
              name={branch.name}
              slug={branch.slug}
              fullWidth
              popup
              onClick={() => handleClick(branch.name)}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BranchModal;
