import { CustomRadio } from "@/components/atoms/CustomRadio";
import { PropsWithComponentPropsWithRef } from "@/types/utils";
import { ReactNode } from "react";
import { Except } from "type-fest";

export type RadioProps = Except<
  PropsWithComponentPropsWithRef<
    typeof CustomRadio,
    {
      label: string;
      subLabel: string;
      icon: ReactNode;
    }
  >,
  "children"
>;
