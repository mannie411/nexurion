import { imgPlaceholder } from "@/assets/images";
import ApproachSection from "./ApproachSection";
import ImpactSection from "./ImpactSection";
import IntroSection from "./IntroSection";
import MethodologySection from "./MethodologySection";
import OtherSolutionsSection from "./OtherSolutionsSection";
import SolutionsListSection from "./SolutionsListSection";
import type { ResourceCardProps } from "@/components/shared/blocks";

export * from "./ImpactSection";
export * from "./OtherSolutionsSection";

export {
  ImpactSection,
  ApproachSection,
  IntroSection,
  MethodologySection,
  OtherSolutionsSection,
  SolutionsListSection,
};

export const solutions: ResourceCardProps[] = [
  {
    image: imgPlaceholder,
    title: "ETRM/CTRM Implementation",
    description:
      "Seamlessly capture and manage trades, from deal entry to settlement, in a single, trusted platform.",
    link: {
      title: "",
      path: "",
    },
    label: "",
    type: "default",
  },
  {
    type: "default",
    link: {
      title: "",
      path: "",
    },
    image: imgPlaceholder,
    title: "Cybersecurity & Infrastructure Protection",
    description:
      "Seamlessly capture and manage trades, from deal entry to settlement, in a single, trusted platform.",
  },
  {
    type: "default",
    link: {
      title: "",
      path: "",
    },
    image: imgPlaceholder,
    title: "IT Project Delivery & Digital Transformation",
    description:
      "Seamlessly capture and manage trades, from deal entry to settlement, in a single, trusted platform.",
  },
];
