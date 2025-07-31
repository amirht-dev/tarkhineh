import Chip from "@/components/atoms/Chip";
import {
  Embla,
  EmblaContainer,
  EmblaNextButton,
  EmblaPreButton,
  EmblaSlide,
  EmblaWrapper,
} from "@/components/atoms/Embla";
import { twJoin, twMerge } from "tailwind-merge";
import { ChipsListItemProps, ChipsListProps } from "./index.types";

const sharedNavButtonClassName =
  "bg-neutral-gray-1 absolute top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-sm disabled:invisible [&_svg]:size-4";

const ChipsList = ({
  wrapperClassName,
  emblaWrapperClassName,
  emblaContainerClassName,
  emblaNavigationButtonClassName,
  children,
}: ChipsListProps) => {
  return (
    <Embla direction="rtl" skipSnaps>
      <div className={twMerge(wrapperClassName, "relative")}>
        <EmblaWrapper className={emblaWrapperClassName}>
          <EmblaContainer
            className={twMerge(
              "[--gap:theme(spacing.2)]",
              emblaContainerClassName,
              "[--slide-size:auto]",
            )}
          >
            {children}
          </EmblaContainer>
        </EmblaWrapper>

        <EmblaPreButton
          className={twJoin(
            sharedNavButtonClassName,
            "right-0 translate-x-1/2",
            emblaNavigationButtonClassName,
          )}
        />
        <EmblaNextButton
          className={twJoin(
            sharedNavButtonClassName,
            "left-0 -translate-x-1/2",
            emblaNavigationButtonClassName,
          )}
        />
      </div>
    </Embla>
  );
};

const ChipsListItem = (props: ChipsListItemProps) => {
  return (
    <EmblaSlide>
      <Chip {...props} />
    </EmblaSlide>
  );
};
export { ChipsList, ChipsListItem };
