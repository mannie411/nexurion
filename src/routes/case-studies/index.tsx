import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";

import {
  FilterSection,
  FeaturedCaseStudy,
  CaseStudyGrid,
} from "@/components/pages/case-studies/";
import {
  StatsSection,
  InsightsSection,
  TestimonialsSection,
} from "@/components/shared/blocks";

export const Route = createFileRoute("/case-studies/")({
  component: RouteComponent,
});

export function RouteComponent() {
  return (
    <Fragment>
      <FilterSection />
      <FeaturedCaseStudy />
      <CaseStudyGrid />
      <StatsSection />
      <TestimonialsSection />
      <InsightsSection />
    </Fragment>
  );
}
