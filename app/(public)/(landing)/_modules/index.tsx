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
      <footer className="bg-sky-200 w-full flex items-center justify-center h-[100px]">
        <h1>Made with ❤️ by U-Lock</h1>
      </footer>
    </Fragment>
  );
};
