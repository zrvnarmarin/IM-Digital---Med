import React from "react";
import Navbar from "@/app/(home-sections)/Navbar";
import Footer from "@/app/components/Footer";
import HeroSection from './(service-three-sections)/HeroSection';
import IntroductorySection from "./(service-three-sections)/IntroductorySection";
import MoreAboutServiceSection from "./(service-three-sections)/MoreAboutServiceSection";
import MoreToKnowSection from "./(service-three-sections)/MoreToKnowSection";
import SemifinalSection from "./(service-three-sections)/SemifinalSection";
import AccordionSection from "./(service-three-sections)/AccordionSection";
import DescriptionSection from "./(service-three-sections)/DescriptionSection";
// import FinalSection from "./(service-three-sections)/SemifinalSection.tsx";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Navbar />
        <main className="h-full bg-white">
          <HeroSection />
          <IntroductorySection />
          <MoreAboutServiceSection />
          <MoreToKnowSection />
          <SemifinalSection />
          <AccordionSection />
          <DescriptionSection />
          {/* <FinalSection /> */}
        </main>
      <Footer />
    </main>
  );
}
