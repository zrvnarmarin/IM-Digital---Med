import React from "react";
import Footer from "@/app/components/Footer";
import HeroSection from "./(service-two-sections)/HeroSection";
import FirstSectionServiceTwo from "./(service-two-sections)/FirstSectionServiceTwo";
import CardsSectionServiceTwo from "./(service-two-sections)/CardsSectionServiceTwo";
import ImageCardAndParagraphSectionServiceTwo from "./(service-two-sections)/ImageCardAndParagraphSectionServiceTwo";
import ParagraphSectionServiceTwo from "./(service-two-sections)/ParagraphSectionServiceTwo";
import ImageGridSectionServiceTwo from "./(service-two-sections)/ImageGridSectionServiceTwo";
import ListSectionServiceTwo from "./(service-two-sections)/ListSectionServiceTwo";
import MainSloganSectionServiceTwo from "./(service-two-sections)/MainSloganSectionServiceTwo";
import FaqSectionServiceTwo from "./(service-two-sections)/FaqSectionServiceTwo";
import NumberedCardsServiceTwo from "./(service-two-sections)/NumberedCardsServiceTwo";
import LastSectionServiceTwo from "./(service-two-sections)/LastSectionServiceTwo";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#FFFFFF]">
      <HeroSection
        serviceTitle="Service Title Number Two"
        shortServiceDescription="This is service two description"
      />
      <FirstSectionServiceTwo />
      <CardsSectionServiceTwo />
      <ImageCardAndParagraphSectionServiceTwo />
      <ParagraphSectionServiceTwo />
      <ImageGridSectionServiceTwo />
      <ListSectionServiceTwo />
      <MainSloganSectionServiceTwo />
      <FaqSectionServiceTwo />
      <NumberedCardsServiceTwo />
      <LastSectionServiceTwo />
      <Footer />
    </main>
  );
}