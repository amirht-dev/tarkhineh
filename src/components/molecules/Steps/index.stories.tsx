/* eslint-disable react-hooks/rules-of-hooks */
import Button from "@/components/atoms/Button";
import { ShoppingCard_Outline } from "@/components/atoms/icons/Shop/ShoppingCard";
import { addToArrayAt } from "@/utils";
import { useArgs } from "@storybook/preview-api";
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

type Step = { label: string; icon: ReactNode; disabled: boolean };

type Props = {
  steps: Array<Step>;
} & Pick<StepsProps, "initialStepIndex">;

const createStep = ({
  disabled = false,
}: Partial<Pick<Step, "disabled">> = {}): Step => ({
  label: "سبد خرید",
  icon: <ShoppingCard_Outline />,
  disabled,
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
    steps: Array.from({ length: 3 }, () => createStep()),
  },
} satisfies Meta<Props>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {
  render({ initialStepIndex }) {
    const [{ steps }, updateArgs] = useArgs<Props>();

    const updateStep = (index: number, update: Partial<Step>) => {
      updateArgs({
        steps: steps.map((step, idx) =>
          idx === index ? { ...step, ...update } : step,
        ),
      });
    };
    return (
      <>
        <Steps stepsCount={steps.length} initialStepIndex={initialStepIndex}>
          <StepsBar>
            {steps.map((step, idx) => (
              <StepsBarItem
                key={idx}
                index={idx}
                prefixIcon={step.icon}
                disabled={step.disabled}
              >
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
                {step.disabled ? null : (
                  <>
                    <span>
                      content of {step.label} {idx} step
                    </span>

                    <StepsNextButton
                      stepIndex={idx}
                      disabled={steps[idx + 1]?.disabled}
                      asChild
                    >
                      <Button>next step</Button>
                    </StepsNextButton>
                  </>
                )}
              </StepsView>
            ))}
          </div>
        </Steps>

        <table className="me-auto mt-4" dir="ltr">
          <thead>
            <tr>
              <th className="border px-2">step</th>
              <th className="border px-2">disabled</th>
            </tr>
          </thead>
          <tbody>
            {steps.map((steps, idx) => (
              <tr key={idx}>
                <td className="border px-2">{idx + 1}</td>
                <td className="border px-2">
                  <input
                    type="checkbox"
                    checked={steps.disabled}
                    onChange={(e) => {
                      updateStep(idx, { disabled: e.target.checked });
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Button
          onClick={() =>
            updateArgs({ steps: addToArrayAt(steps, 0, createStep()) })
          }
        >
          add step at first
        </Button>
      </>
    );
  },
} satisfies Story<Props>;
