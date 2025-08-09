"use client";

import {
  Section,
  SectionActionIconButton,
  SectionBody,
  SectionHeader,
  SectionTitle,
} from "@/components/atoms/Section";
import { StepsPrevButton, StepsView } from "@/components/molecules/Steps";
import { Visible } from "@/components/utils/Responsive";
import { ComponentProps, PropsWithChildren, ReactNode } from "react";

function StepViewContent({
  children,
  index,
  label,
  sectionActionButton,
}: PropsWithChildren<
  Pick<ComponentProps<typeof StepsView>, "index"> & {
    sectionActionButton?: ReactNode;
    label: string;
  }
>) {
  return (
    <StepsView index={index} key={index}>
      <Visible on="initial">
        <Section key={index}>
          <SectionHeader className="grid grid-cols-3">
            <SectionActionIconButton className="justify-self-start" asChild>
              <StepsPrevButton className="disabled:invisible" />
            </SectionActionIconButton>
            <SectionTitle className="justify-self-center">{label}</SectionTitle>
            {!!sectionActionButton && (
              <SectionActionIconButton className="justify-self-end" asChild>
                {sectionActionButton}
              </SectionActionIconButton>
            )}
          </SectionHeader>

          <SectionBody className="mt-6">{children}</SectionBody>
        </Section>
      </Visible>

      <Visible on="lg">{children}</Visible>
    </StepsView>
  );
}

export default StepViewContent;
