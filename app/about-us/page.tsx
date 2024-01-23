import React from "react";
import Navbar from "../(home-sections)/Navbar";
import HeroSection from "./(about-us-sections)/HeroSection";
import CoreValuesAndMissionSection from "./(about-us-sections)/CoreValuesAndMissionSection";
import Footer from "../components/Footer";
import OurFoundingStory from "./(about-us-sections)/OurFoundingStorySection";
import MoreTextSection from "./(about-us-sections)/MoreTextSection";
import FinalSection from "./(about-us-sections)/FinalSection";
import OurTeamSection from "./(about-us-sections)/OurTeamSection";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#FFFFFF]">
      <Navbar />
      <HeroSection />
      <CoreValuesAndMissionSection />
      <OurFoundingStory />
      <OurTeamSection />
      <MoreTextSection />
      <FinalSection />
      <Footer />
    </main>
  );
}
