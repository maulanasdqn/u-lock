import { Fragment } from "react";
import { HeroSection } from "./hero-section";
import { CTASection } from "./cta-section";
import { SellingPointSection } from "./selling-point-section";
import { CheckSection } from "./check-section";

export const LandingModules = () => {
  return (
    <Fragment>
      <HeroSection />
      <CTASection />
      <CheckSection />
      <SellingPointSection />
    </Fragment>
  );
};
