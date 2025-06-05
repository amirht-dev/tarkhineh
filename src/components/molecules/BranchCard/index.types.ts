import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type BranchCardProps = {
  name: string;
  address: string;
  images: (StaticImport | string)[];
  slug: string;
  fullWidth?: boolean;
  popup?: boolean;
};
