import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";
import type { Testimonial } from "@/types";
import {
  ImpactSection,
  IntroSection,
  solutions,
  type StatProps,
} from "@/components/pages/solutions";
import {
  BenefitsSection,
  DeliveryProcessSection,
  IndustriesSection,
} from "@/components/pages/solutions/cybersecurity";
import { OtherSolutionsSection } from "@/components/pages/solutions/";
import {
  CaseStudySlidesSection,
  FAQSection,
  HeroSection,
  TestimonialSection,
} from "@/components/shared/blocks";

import { imgHeroIT } from "@/assets/images";

export const Route = createFileRoute("/solutions/it")({
  component: RouteComponent,
});

export function RouteComponent() {
  const testimonial: Testimonial = {
    name: "Angela Chukwudi",
    content: `This transformation enabled our growth strategy. 
    We couldn't have scaled to our current size with the old fragmented systems.
    More valuable than the technology was the capability Nexurion built in our team.
    We own this platform completely.`,
    role: "Chief Operating Officer, East African Commodity Trading House",
  };

  const stats: StatProps[] = [
    {
      value: "75% reduction",
      label: "In trade processing time",
    },
    {
      value: "300% capacity increase",
      label: "Without adding operations headcount",
    },
    {
      value: "12 days → 3 days",
      label: "Month-end close completion time",
    },
    {
      value: "15+ systems integrated",
      label: "Into unified operational platform",
    },
  ];
  return (
    <Fragment>
      <HeroSection
        title="IT Project Delivery & Digital Transformation"
        subtitle="our solutions"
        bgImage={imgHeroIT}
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
