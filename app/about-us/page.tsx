import React from "react";
import Image from "next/image";
import Navbar from "../(home-sections)/Navbar";
import HeroSection from "./(about-us-sections)/HeroSection";
import CoreValuesSection from "./(about-us-sections)/CoreValuesSection";
import Footer from "../components/Footer";
import OurFoundingStory from "./(about-us-sections)/OurFoundingStorySection";
import MeetOurTeamSection from "./(about-us-sections)/MeetOurTeamSection";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#FFFFFF]">
      <Navbar />
      <HeroSection />
      <CoreValuesSection />
      <OurFoundingStory />
      <MeetOurTeamSection />
      {/* Neki testimonialsi */}
      <Footer />
    </main>
  );
}

