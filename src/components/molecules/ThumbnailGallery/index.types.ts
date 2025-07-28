import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type ThumbnailGalleryProps = {
  images: (StaticImport | string)[];
};
