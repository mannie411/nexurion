import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";
import type { StatProps } from "@/components/pages/solutions";
import {
  BenefitsSection,
  DeliveryProcessSection,
  ImpactSection,
  IntroSection,
  IndustriesSection,
} from "@/components/pages/solutions/cybersecurity";
import { OtherSolutionsSection, solutions } from "@/components/pages/solutions";
import {
  CaseStudySlidesSection,
  FAQSection,
  HeroSection,
  TestimonialSection,
} from "@/components/shared/blocks";

import type { Testimonial } from "@/types";
import { imgHeroERTM } from "@/assets/images";

export const Route = createFileRoute("/solutions/etrm-ctrm")({
  component: RouteComponent,
});

export function RouteComponent() {
  const testimonial: Testimonial = {
    name: " Dr. Ifeanyi Okorie",
    content: `"The transformation wasn't just about technology. Nexurion built
                our internal capability. Our team now owns this system
                completely. That was always the goal, and they delivered."`,
    role: " Head of Operations, Nigerian Gas Trading Company",
  };

  const stats: StatProps[] = [
    {
      value: "48 hours → 8 minutes",
      label: "Daily position reporting time",
    },
    {
      value: "60% Faster",
      label: "Faster monthly close completion",
    },
    {
      value: "20+ Integrations",
      label: "Successfully delivered across Africa",
    },
    {
      value: "98% user satisfaction",
      label: "Post-implementation feedback",
    },
  ];

  return (
    <Fragment>
      <HeroSection
        title="ETRM/CTRM Implementation"
        subtitle="our solutions"
        bgImage={imgHeroERTM}
      />
      <IntroSection />
      <BenefitsSection />
      <DeliveryProcessSection />
      <IndustriesSection />
      <ImpactSection stats={stats} />
      <TestimonialSection {...testimonial} />
      <CaseStudySlidesSection />
      <OtherSolutionsSection solutions={solutions} />
      <FAQSection />
    </Fragment>
  );
}
