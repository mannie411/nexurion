import { Fragment, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

import {
  ContactForm,
  GlobalContactDetails,
} from "../components/pages/contact-us";
import { HeroSection } from "@/components/shared/blocks";
import { imgContactBG } from "@/assets/images";

export const Route = createFileRoute("/contact-us")({
  component: RouteComponent,
});

export function RouteComponent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <HeroSection title="Contact Us" bgImage={imgContactBG} />
      <ContactForm />
      <GlobalContactDetails />=
    </Fragment>
  );
}
