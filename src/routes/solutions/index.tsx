import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";

import {
  ApproachSection,
  IntroSection,
  MethodologySection,
  SolutionsListSection,
} from "@/components/pages/solutions";
import {
  FAQSection,
  HeroSection,
  StatsSection,
  InsightsSection,
  TestimonialsSection,
} from "@/components/shared/blocks";
import { imgSolutionBG } from "@/assets/images";

export const Route = createFileRoute("/solutions/")({
  component: RouteComponent,
});

export function RouteComponent() {
  return (
    <Fragment>
      <HeroSection title="What We Do" bgImage={imgSolutionBG} />
      <IntroSection />
      <MethodologySection />
      <SolutionsListSection />
      <ApproachSection />
      <StatsSection />
      <TestimonialsSection />
      <InsightsSection />
      <FAQSection />
    </Fragment>
  );
}
