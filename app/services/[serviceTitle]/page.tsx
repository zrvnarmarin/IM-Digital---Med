import React from "react";
import Navbar from "@/app/(home-sections)/Navbar";
import Footer from "@/app/components/Footer";
import { medicalServices, homePageFAQ } from "@/app/data";
import { Accordion } from "@/app/components/Accordion";
import HeroSection from "./(service-sections)/HeroSection";
import IntroductorySection from "./(service-sections)/IntroductorySection";
import MoreToKnowSection from "./(service-sections)/MoreToKnowSection";
import MoreAboutServiceSection from "./(service-sections)/MoreAboutServiceSection";
import FinalSection from "@/app/about-us/(about-us-sections)/FinalSection";

export default function Page({ params }: { params: { serviceTitle: string } }) {
  const service = medicalServices.find(
    (service) => service.href === params.serviceTitle
  );

  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-white">
      <Navbar />
      {service ? (
        <main className="h-full bg-white">
          <HeroSection
            serviceTitle={service.serviceTitle}
            shortServiceDescription={service.shortDescription}
          />
            <IntroductorySection serviceShortDescription={service.shortDescription} />
            <MoreAboutServiceSection />
            <MoreToKnowSection />
            <div className="px-6 md:px-8 lg:px-24">
              <Accordion faq={homePageFAQ} />
            </div>
            <FinalSection />
        </main>
      ) : (
        <p>Service not found</p>
      )}
      <Footer />
    </main>
  );
}


