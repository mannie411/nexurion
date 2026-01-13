import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  CaseStudySlidesSection,
  FAQSection,
  HeroSection,
  TestimonialSection,
} from "@/components/shared/blocks";
import type { Testimonial } from "@/types";
import { type StatProps } from "@/components/pages/solutions";
import {
  IntroSection,
  ImpactSection,
  BenefitsSection,
  DeliveryProcessSection,
  IndustriesSection,
} from "@/components/pages/solutions/cybersecurity";
import { OtherSolutionsSection, solutions } from "@/components/pages/solutions";
import { imgHeroCyber } from "@/assets/images";

export const Route = createFileRoute("/solutions/cyber-security")({
  component: RouteComponent,
});

export function RouteComponent() {
  const testimonial: Testimonial = {
    content: `
    We sleep better knowing our trading systems are protected. More
    importantly, our team now understands security and maintains it
    themselves. Nexurion didn't just fix vulnerabilities—they built
    our security capability.
    `,
    name: "Zingi Mombasa",
    role: "CTO, West African Power Utility",
  };

  const stats: StatProps[] = [
    {
      value: "Zero high-risk findings",
      label: "Post-implementation security audit",
    },
    {
      value: "47 attacks blocked",
      label: "In first 3 months of monitoring",
    },
    {
      value: "Days → Minutes",
      label: "Compliance reporting time reduction",
    },

    {
      value: "100% uptime",
      label: "Secure Transformation",
    },
  ];
  return (
    <Fragment>
      <HeroSection
        title="Cybersecurity & Infrastructure Protection"
        subtitle="our solutions"
        bgImage={imgHeroCyber}
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
