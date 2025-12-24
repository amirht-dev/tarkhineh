"use client";

import Button from "@/components/atoms/Button";
import { ChevronLeft_Outline } from "@/components/atoms/icons/Arrow/ChevronLeft";
import { ChevronRight_Outline } from "@/components/atoms/icons/Arrow/ChevronRight";
import { twMerge } from "@/lib/tailwind-merge";
import { createCTX } from "@/utils/clientHelpers";
import { Slot } from "@radix-ui/react-slot";
import { useCounter } from "@uidotdev/usehooks";
import { MouseEventHandler } from "react";
import {
  StepsBarProps,
  StepsContextType,
  StepsItemProps,
  StepsNextButtonProps,
  StepsPrevButtonProps,
  StepsProps,
  StepsSeparatorProps,
  StepsViewProps,
  StepViewContextType,
} from "./index.types";

export const { context: StepsContext, hook: useStepsContext } =
  createCTX<StepsContextType>("Steps");

export const { context: StepViewContext, hook: useStepViewContext } =
  createCTX<StepViewContextType>("StepView");

export const Steps = ({
  stepsCount,
  initialStepIndex = 0,
  children,
}: StepsProps) => {
  const lastStepIndex = stepsCount - 1;

  const [currentStepIndex, api] = useCounter(initialStepIndex, {
    min: 0,
    max: lastStepIndex,
  });

  const [navigationStepIndex, navigationApi] = useCounter(initialStepIndex, {
    min: 0,
    max: lastStepIndex,
  });

  const isNavigating = currentStepIndex !== navigationStepIndex;

  const navigateToStep = (index: number) => {
    navigationApi.set(index);
  };

  const goToNextSiblingStep = (currentStepIndex: number) => {
    const nextStepIndex = currentStepIndex + 1;

    if (isNavigating) navigationApi.set(nextStepIndex);
    else {
      api.set(nextStepIndex);
      navigationApi.set(nextStepIndex);
    }
  };

  return (
    <StepsContext.Provider
      value={{
        currentStepIndex,
        stepsCount,
        goToNextStep: api.increment,
        lastStepIndex,
        navigationStepIndex,
        navigateToStep,
        goToNextSiblingStep,
        isNavigating,
      }}
    >
      {children}
    </StepsContext.Provider>
  );
};

export const StepsBar = ({ className, ...props }: StepsBarProps) => {
  return <div {...props} className={twMerge("flex items-center", className)} />;
};

export const StepsBarItem = ({
  className,
  index,
  onClick,
  disabled = false,
  ...props
}: StepsItemProps) => {
  const {
    currentStepIndex,
    lastStepIndex,
    navigateToStep,
    isNavigating,
    navigationStepIndex,
  } = useStepsContext();

  const isPassedStep = index < currentStepIndex;

  const isFutureStep = index > currentStepIndex;

  const isCurrentStep = index === currentStepIndex;

  const isLastStep = index === lastStepIndex;

  const isVisibleStep =
    (isNavigating && navigationStepIndex === index) ||
    (!isNavigating && currentStepIndex === index);

  const isVisitedStep = index <= currentStepIndex;

  return (
    <>
      {index !== 0 && <StepsSeparator active={isCurrentStep || isPassedStep} />}
      <Button
        variant="text"
        data-state={isCurrentStep ? "active" : "disactive"}
        data-position={
          isPassedStep ? "passed" : isFutureStep ? "future" : "current"
        }
        {...props}
        onClick={(e) => {
          onClick?.(e, index);
          if (!e.isDefaultPrevented() && (isPassedStep || isCurrentStep))
            navigateToStep(index);
        }}
        className={twMerge(
          "text-caption-sm lg:text-body-sm text-neutral-gray-4 hover:text-neutral-gray-4 inline-flex shrink-0 items-center gap-0.5 px-1 font-normal lg:px-2 [&_svg]:size-3 lg:[&_svg]:size-6",
          isVisibleStep &&
            "text-caption-md text-primary hover:text-primary lg:text-heading-6 lg:font-bold [&_svg]:size-4 lg:[&_svg]:size-8",
          isVisitedStep &&
            !isVisibleStep &&
            "text-primary hover:text-primary-shade-1",
          className,
        )}
        disabled={disabled ?? isFutureStep}
      />
      {!isLastStep && <StepsSeparator active={isCurrentStep || isPassedStep} />}
    </>
  );
};

const StepsSeparator = ({
  className,
  active = false,
  ...props
}: StepsSeparatorProps) => {
  return (
    <svg
      {...props}
      viewBox="0 0 100% 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-px w-full", className)}
    >
      <line
        x1="100%"
        y1="0.5"
        x2="0.5"
        y2="0.5"
        className={active ? "stroke-primary" : "stroke-neutral-gray-4"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
    </svg>
  );
};

export const StepsPrevButton = ({
  asChild,
  children,
  className,
  disabled,
  ...props
}: StepsPrevButtonProps) => {
  const { currentStepIndex, navigationStepIndex, navigateToStep } =
    useStepsContext();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    props.onClick?.(e);
    navigateToStep(navigationStepIndex - 1);
  };

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      {...props}
      onClick={handleClick}
      className={twMerge(
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      disabled={
        disabled ?? (currentStepIndex === 0 || navigationStepIndex === 0)
      }
    >
      {children ?? <ChevronRight_Outline />}
    </Comp>
  );
};

export const StepsNextButton = ({
  asChild,
  children,
  className,
  disabled,
  stepIndex,
  ...props
}: StepsNextButtonProps) => {
  const { goToNextSiblingStep, lastStepIndex } = useStepsContext();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    props.onClick?.(e);
    goToNextSiblingStep(stepIndex);
  };

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      {...props}
      onClick={handleClick}
      className={twMerge(
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      disabled={disabled ?? stepIndex === lastStepIndex}
    >
      {children ?? <ChevronLeft_Outline />}
    </Comp>
  );
};

export const StepsView = ({
  index,
  className,
  children,
  ...props
}: StepsViewProps) => {
  const { currentStepIndex, navigationStepIndex, goToNextSiblingStep } =
    useStepsContext();

  const isNavigating = currentStepIndex !== navigationStepIndex;

  if (
    !(
      (!isNavigating && currentStepIndex === index) ||
      (isNavigating && navigationStepIndex === index)
    )
  )
    return null;

  const _goToNextSiblingStep = () => goToNextSiblingStep(index);

  const context: StepViewContextType = {
    goToNextSiblingStep: _goToNextSiblingStep,
    stepIndex: index,
  };

  if (typeof children === "function") return children(context);

  return (
    <StepViewContext.Provider value={context}>
      <div {...props} className={twMerge("mt-6 lg:mt-10", className)}>
        {children}
      </div>
    </StepViewContext.Provider>
  );
};
