"use client";

import ImageSlider from "@/components/molecules/ImageSlider";
import { tv } from "@/lib/tailwind-variants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "../../atoms/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../atoms/Dialog";
import { ChevronLeft_Outline } from "../../atoms/icons/Arrow/ChevronLeft";
import { Gallery_Outline } from "../../atoms/icons/Video-Audio-Image/Gallery";
import { BranchCardProps } from "./index.types";

const branchCardVariants = tv({
  slots: {
    root: "group bg-neutral-white border-neutral-gray-4 hover:border-primary hover:drop-shadow-4 flex h-(--card-height) flex-row overflow-hidden border transition-all [--card-height:80px] lg:flex-col",
    imageWrapper: "relative h-full shrink-0 transition-all lg:w-full",
    image: "object-cover object-center",
    overlay: "bg-neutral-black/60",
    moreImagesBtn: "",
    imageBtnIcon: "",
    imageBtnBgShape: "",
    contentWrapper:
      "flex shrink-0 flex-col items-center p-2 text-center transition-all max-lg:flex-1",
    titleAndAddressWrapper: "",
    title: "text-neutral-gray-8 line-clamp-1 shrink-0",
    address:
      "text-caption-sm text-neutral-gray-7 mt-1 line-clamp-2 shrink-0 max-lg:font-normal",
    linkBtn: "",
  },
  variants: {
    fullWidth: {
      true: {
        root: "w-full",
      },
      false: {
        root: "",
      },
    },
    popup: {
      true: {
        root: "rounded-lg lg:rounded-sm lg:[--card-height:auto]",
        imageWrapper: "w-[40%] lg:h-[179px]",
        title: "text-caption-md lg:text-button-lg max-lg:font-normal",
        address: "lg:text-caption-md lg:font-normal",
      },
      false: {
        root: "rounded-sm [--image-c-height:170px] [--image-e-height:230px] lg:rounded-lg lg:[--card-height:334px]",
        imageWrapper:
          "w-[45%] lg:h-(--image-e-height) lg:group-hover:h-(--image-c-height)",
        overlay:
          "absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 max-lg:hidden",
        moreImagesBtn:
          "lg:bg-neutral-white/50 text-neutral-white absolute flex items-center justify-center rounded-full transition-all max-lg:right-2 max-lg:bottom-2 lg:top-1/2 lg:left-1/2 lg:size-[42px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:scale-50 lg:opacity-0 lg:delay-100 lg:group-hover:scale-100 lg:group-hover:opacity-100",
        imageBtnIcon: "size-4 lg:size-8",
        imageBtnBgShape:
          "bg-neutral-white/25 absolute size-[58px] scale-0 rounded-full opacity-0 transition-all delay-150 ease-out group-hover:scale-100 group-hover:opacity-100 max-lg:hidden lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2",
        contentWrapper: "lg:pb-4",
        titleAndAddressWrapper:
          "h-[calc(var(--card-height)-var(--image-e-height))] shrink-0",
        title: "text-button-sm lg:text-heading-7",
        address: "lg:text-caption-lg",
        linkBtn: "shrink-0 max-lg:hidden",
      },
    },
  },
  compoundVariants: [
    {
      fullWidth: false,
      popup: false,
      className: {
        root: "max-w-[318px] lg:max-w-[288px]",
      },
    },
    {
      fullWidth: false,
      popup: true,
      className: {
        root: "max-w-[288px] lg:max-w-[175px]",
      },
    },
  ],
  defaultVariants: {
    fullWidth: false,
    popup: false,
  },
});

const BranchCard = ({
  name,
  address,
  images,
  slug,
  fullWidth = true,
  popup = false,
  onClick,
}: BranchCardProps) => {
  const cns = branchCardVariants({ fullWidth, popup });

  const router = useRouter();

  const branchURL = `/branch/${slug}`;

  return (
    <Dialog>
      <div
        className={cns.root()}
        onClick={(e) => {
          router.push(branchURL);
          onClick?.(e);
        }}
      >
        <div className={cns.imageWrapper()}>
          <Image src={images[0]} alt="" fill className={cns.image()} />
          <div className={cns.overlay()} />
          <>
            <div className={cns.imageBtnBgShape()} />
            <DialogTrigger
              className={cns.moreImagesBtn()}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Gallery_Outline className={cns.imageBtnIcon()} />
            </DialogTrigger>
          </>
        </div>

        <div className={cns.contentWrapper()}>
          <div className={cns.titleAndAddressWrapper()}>
            <h5 className={cns.title()}>شعبه {name}</h5>
            <span className={cns.address()}>{address}</span>
          </div>
          {!popup && (
            <Button
              size="sm"
              variant="outline"
              suffixIcon={<ChevronLeft_Outline />}
              className={cns.linkBtn()}
              onClick={(e) => e.stopPropagation()}
              asChild
            >
              <Link href={branchURL}>صفحه شعبه</Link>
            </Button>
          )}
        </div>
      </div>

      <DialogContent className="border-0 p-0 lg:max-w-[808px]" dir="rtl">
        <DialogTitle className="sr-only">{name} branch images</DialogTitle>
        <ImageSlider images={images} />
        <DialogClose className="bg-neutral-gray-8/50 text-neutral-white absolute top-4 left-4 rounded-full" />
      </DialogContent>
    </Dialog>
  );
};

export default BranchCard;
