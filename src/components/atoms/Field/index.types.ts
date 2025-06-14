import { Merge, OverrideProperties } from "type-fest";
import { InputProps } from "../Input/index.types";

export type FieldProps = Merge<
  OverrideProperties<
    InputProps,
    {
      error?: boolean | string;
    }
  >,
  {
    wrapperClassName?: string;
  }
>;
