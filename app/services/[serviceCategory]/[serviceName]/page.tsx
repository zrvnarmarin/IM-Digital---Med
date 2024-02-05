import React from "react";
import Footer from "@/app/components/Footer";
import { services } from "@/app/data";
import HeroSection from "./service-sections/HeroSection";
import PageLinksSection from './service-sections/PageLinksSection'
import AboutTheProcedureSection from "./service-sections/AboutTheProcedureSection";
import HowToPrepareSection from "./service-sections/HowToPrepareSection";
import DuringTheProcedureSection from "./service-sections/DuringTheProcedureSection";
import RecoveryTimeSection from "./service-sections/RecoveryTimeSection";
import PrecautionsSection from "./service-sections/PrecautionsSection";

export default function Page({ params }: { params: { serviceName: string } }) {
  const serviceObject = services.find(
    (service) => service.href === params.serviceName
  );

  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <main className="flex min-h-screen flex-col items-center bg-[#FFFFFF]">
        <HeroSection serviceName={params.serviceName} />
        <PageLinksSection />
        <AboutTheProcedureSection
          aboutTheProcedure={serviceObject?.aboutTheProcedure}
        />
        <HowToPrepareSection howToPrepapre={serviceObject?.howToPrepare} />
        <DuringTheProcedureSection
          duringTheProcedure={serviceObject?.duringTheProcedure}
        />
        <RecoveryTimeSection recoveryTime={serviceObject?.recoveryTime} />
        <PrecautionsSection precautions={serviceObject?.precaution} />
      </main>
      <Footer />
    </main>
  );
}








