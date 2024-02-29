/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/



import {
  AboutUs,
  BenefitsSection,
  CusDetailsSection,
  FeaturesSection,
  HeroSection,
  HowSection,
  ImgSection,
  SliderSection,
  WhyBullionSection,
} from "@/components";
import SubscribecSec from "@/components/SubscribecSec";

export default function Home() {

  return (
    <main>
      <HeroSection />
      <CusDetailsSection />
      <BenefitsSection />
      <WhyBullionSection />
      <FeaturesSection />
      <AboutUs />
      <SliderSection />
      <ImgSection />
      <HowSection/>
      <SubscribecSec/>
    </main>
  );
}
