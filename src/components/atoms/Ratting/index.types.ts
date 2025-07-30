type SharedRattingProps = {
  count?: number;
  containerClassName?: string;
  skeletonClassName?: string;
  iconClassName?: string;
};

export type RattingProps = {
  value: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  disabled?: boolean;
  buttonClassName?: string;
} & SharedRattingProps;

export type RattingSkeletonProps = SharedRattingProps;
