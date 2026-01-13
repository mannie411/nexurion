import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  MissionValuesSection,
  OurStorySection,
  TeamSection,
  WhyChooseNexurionSection,
} from "@/components/pages/about-us";
import {
  ApproachSection,
  CaseStudySlidesSection,
  CoreServiceSection,
  HeroSection,
  InsightsSection,
  PartnerSection,
  StatsSection,
} from "@/components/shared/blocks";
import {
  imgAboutBG,
  imgMission,
  imgTeam1,
  imgTeam2,
  imgTeam3,
  imgTeam4,
  imgTeam5,
  imgTeam6,
  imgValues,
  imgWhyChoose,
} from "@/assets/images";

export const Route = createFileRoute("/about-us")({
  component: RouteComponent,
});

export function RouteComponent() {
  const teamMembers = [
    {
      name: "Chidi Okafor",
      role: "Founder & Chief Executive Officer",
      location: "Lagos, Nigeria",
      imageSrc: imgTeam1,
    },
    {
      name: "Sarah Mitchell",
      role: "Chief Technology Officer",
      location: "Houston, United States",
      imageSrc: imgTeam2,
    },
    {
      name: "Amara Nwosu",
      role: "Head of Implementation",
      location: "Lagos, Nigeria",
      imageSrc: imgTeam3,
    },
    {
      name: "Folake Adeleke",
      role: "Lead Solutions Architect",
      location: "Dubai, UAE",
      imageSrc: imgTeam4,
    },
    {
      name: "Rajesh Kumar",
      role: "Cybersecurity Director",
      location: "Dubai, UAE",
      imageSrc: imgTeam5,
    },
    {
      name: "Tunde Adesanya",
      role: "Head of Client Success",
      location: "Lagos, Nigeria",
      imageSrc: imgTeam6,
    },
  ];
  return (
    <Fragment>
      <HeroSection title="Who We Are" bgImage={imgAboutBG} />
      <OurStorySection />
      <MissionValuesSection missionImage={imgMission} valuesImage={imgValues} />
      <CoreServiceSection />
      <WhyChooseNexurionSection imageSrc={imgWhyChoose} />
      <ApproachSection />
      <TeamSection teamMembers={teamMembers} />
      <PartnerSection />
      <StatsSection />
      <CaseStudySlidesSection />
      <InsightsSection />
    </Fragment>
  );
}
