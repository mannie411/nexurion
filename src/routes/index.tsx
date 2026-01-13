import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AboutUs, Hero } from "@/components/pages/home";
import {
  ApproachSection,
  CaseStudySlidesSection,
  CoreServiceSection,
  FAQSection,
  InsightsSection,
  PartnerSection,
  StatsSection,
  TestimonialsSection,
} from "@/components/shared/blocks";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

export function RouteComponent() {
  return (
    <Fragment>
      <Hero />
      <AboutUs />
      <CoreServiceSection />
      <ApproachSection />
      <PartnerSection />
      <StatsSection />
      <CaseStudySlidesSection />
      <TestimonialsSection />
      <InsightsSection />
      <FAQSection />
    </Fragment>
  );
}
