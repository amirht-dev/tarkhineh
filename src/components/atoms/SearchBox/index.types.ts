import { ChangeEvent, SyntheticEvent } from "react";

export type SearchBoxProps = {
  onClear?: (e: SyntheticEvent<HTMLButtonElement>) => void;
  onSearch?: (e: SyntheticEvent, value: string) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
  fullWidth?: boolean;
  className?: string;
  initialValue?: string;
  disabled?: boolean;
};
