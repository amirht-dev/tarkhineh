import Button from "@/components/atoms/Button";
import { ShoppingCard_Outline } from "@/components/atoms/icons/Shop/ShoppingCard";
import type { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import {
  Steps,
  StepsBar,
  StepsBarItem,
  StepsNextButton,
  StepsPrevButton,
  StepsView,
} from ".";
import { StepsProps } from "./index.types";

type Step = { label: string; icon: ReactNode };

type Props = {
  steps: Array<Step>;
} & Pick<StepsProps, "initialStepIndex">;

const createStep = (): Step => ({
  label: "سبد خرید",
  icon: <ShoppingCard_Outline />,
});

const meta = {
  subcomponents: {
    Steps,
    StepsBar,
    StepsBarItem,
    StepsPrevButton,
    StepsNextButton,
    StepsView,
  },
  args: {
    steps: Array.from({ length: 3 }, createStep),
  },
  render({ steps, initialStepIndex }) {
    return (
      <>
        <Steps stepsCount={steps.length} initialStepIndex={initialStepIndex}>
          <StepsBar>
            {steps.map((step, idx) => (
              <StepsBarItem key={idx} index={idx} prefixIcon={step.icon}>
                {step.label} {idx}
              </StepsBarItem>
            ))}
          </StepsBar>
        </Steps>
      </>
    );
  },
} satisfies Meta<Props>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {
  render({ steps, initialStepIndex }) {
    return (
      <>
        <Steps stepsCount={steps.length} initialStepIndex={initialStepIndex}>
          <StepsBar>
            {steps.map((step, idx) => (
              <StepsBarItem key={idx} index={idx} prefixIcon={step.icon}>
                {step.label} {idx}
              </StepsBarItem>
            ))}
          </StepsBar>

          <div className="mt-10">
            {steps.map((step, idx) => (
              <StepsView
                key={idx}
                index={idx}
                className="bg-neutral-gray-3 flex h-[300px] flex-col items-center justify-center gap-4"
              >
                <span>
                  content of {step.label} {idx} step
                </span>

                <StepsNextButton stepIndex={idx} asChild>
                  <Button>next step</Button>
                </StepsNextButton>
              </StepsView>
            ))}
          </div>
        </Steps>
      </>
    );
  },
} satisfies Story;
