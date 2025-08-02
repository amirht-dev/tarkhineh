import Button from "@/components/atoms/Button";
import {
  PropsWithAsChild,
  PropsWithComponentPropsWithRef,
} from "@/types/utils";
import { ComponentProps, MouseEvent, PropsWithChildren } from "react";

export type StepInfo = { disabled: boolean; id: string };

export type StepsContextType = {
  currentStepIndex: number;
  stepsCount: number;
  goToNextStep: () => void;
  goToNextSiblingStep: (currentStepIndex: number) => void;
  lastStepIndex: number;
  navigationStepIndex: number;
  navigateToStep: (index: number) => void;
  isNavigating: boolean;
};

export type StepsProps = PropsWithChildren<{
  stepsCount: number;
  initialStepIndex?: number;
}>;

export type StepsBarProps = PropsWithComponentPropsWithRef<"div">;

export type StepsItemProps = Omit<
  PropsWithComponentPropsWithRef<
    typeof Button,
    {
      index: number;
      onClick?: (e: MouseEvent<HTMLButtonElement>, index: number) => void;
    }
  >,
  "variant"
>;

export type StepsSeparatorProps = PropsWithComponentPropsWithRef<
  "svg",
  {
    active?: boolean;
  }
>;

export type StepsPrevButtonProps = PropsWithAsChild<ComponentProps<"button">>;

export type StepsNextButtonProps = PropsWithAsChild<
  PropsWithComponentPropsWithRef<
    "button",
    {
      stepIndex: number;
    }
  >
>;

export type StepsViewProps = PropsWithComponentPropsWithRef<
  "div",
  {
    index: number;
  }
>;
