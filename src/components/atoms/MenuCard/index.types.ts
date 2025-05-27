import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type MenuCardProps = {
  imageSrc: StaticImport | string;
  label: string;
  imageClassName?: string;
};
