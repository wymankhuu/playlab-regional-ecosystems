import { AppCollectionCallout } from "@/components/app-collection-callout";
import { BuildingYourEcosystem } from "@/components/building-your-ecosystem";
import { ComponentsGrid } from "@/components/components-grid";
import { CTABar } from "@/components/cta-bar";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Opportunity } from "@/components/opportunity";
import { WhatIsEcosystem } from "@/components/what-is-ecosystem";
import { WhyPlaylab } from "@/components/why-playlab";

export default function Page() {
  return (
    <>
      <Hero />
      <CTABar />
      <Opportunity />
      <WhatIsEcosystem />
      <ComponentsGrid />
      <AppCollectionCallout />
      <BuildingYourEcosystem />
      <WhyPlaylab />
      <FinalCTA />
      <Footer />
    </>
  );
}
