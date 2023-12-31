import React from "react";
import Image from "next/image";
import Navbar from "../(home-sections)/Navbar";
import HeroSection from "./(about-us-sections)/HeroSection";
import CoreValuesAndMissionSection from "./(about-us-sections)/CoreValuesAndMissionSection";
import Footer from "../components/Footer";
import OurFoundingStory from "./(about-us-sections)/OurFoundingStorySection";
import MeetOurTeamSection from "./(about-us-sections)/MeetOurTeamSection";
import AdvantagesSection from "./(about-us-sections)/AdvantagesSection";
import MoreTextSection from "./(about-us-sections)/MoreTextSection";
import FinalSection from "./(about-us-sections)/FinalSection";
import ClientReviews from "./(about-us-sections)/ClientReviews";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#FFFFFF]">
      <Navbar />
      <HeroSection />
      <CoreValuesAndMissionSection />
      <OurFoundingStory />
      <MeetOurTeamSection />
      <AdvantagesSection />
      <ClientReviews />
      <MoreTextSection />
      <FinalSection />
      <Footer />
    </main>
  );
}

