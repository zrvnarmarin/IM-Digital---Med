import React from "react";
import Navbar from "@/app/(home-sections)/Navbar";
import Footer from "@/app/components/Footer";
import HeroSection from "./(service-one-sections)/HeroSection";
import FirstSection from "./(service-one-sections)/FirstSection";
import SecondSection from "./(service-one-sections)/SecondSection";
import ThirdSection from "./(service-one-sections)/ThirdSection";
import FourthSection from "./(service-one-sections)/FourthSection";
import FifthSection from "./(service-one-sections)/FifthSection";
import SixthSection from "./(service-one-sections)/SixthSection";
import MainSloganSection from "./(service-one-sections)/MainSloganSection";
import ListSectionServiceOne from "./(service-one-sections)/ListSectionServiceOne";
import ParagraphSectionServiceOne from "./(service-one-sections)/ParagraphSectionServiceOne";
import ImageGridServiceOne from "./(service-one-sections)/ImageGridServiceOne";
import SecondParagraphSectionServiceOne from "./(service-one-sections)/SecondPAragraphSectionServiceOne";
import FaqSectionServiceOne from "./(service-one-sections)/FaqSectionServiceOne";
import LastSectionServiceOne from "./(service-one-sections)/LastSectionServiceOne";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#FFFFFF]">
      <Navbar />
      <HeroSection
        serviceTitle="Service Title Number One"
        shortServiceDescription="This is service one description"
      />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <MainSloganSection />
      <ListSectionServiceOne />
      <ParagraphSectionServiceOne />
      <ImageGridServiceOne />
      <SecondParagraphSectionServiceOne />
      <FaqSectionServiceOne />
      <LastSectionServiceOne />
      <Footer />
    </main>
  );
}

