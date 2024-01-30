import React from "react";
import { doctors } from "@/app/data";
import Navbar from "@/app/(home-sections)/Navbar";
import Footer from "@/app/components/Footer";
import HeroSection from "./(doctor-sections)/HeroSection";
import DescriptionSection from "./(doctor-sections)/DescriptionSection";

export default function Page({ params }: { params: { doctorName: string } }) {
  const doctor = doctors.find((doctor) => doctor.href === params.doctorName);

  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Navbar />
      {doctor ? (
        <main className="flex min-h-screen flex-col items-center bg-[#FFFFFF]">
          <HeroSection
            doctorName={doctor.name}
            doctorSpecialisation={doctor.specialisation}
          />
          <DescriptionSection doctor={doctor} />
        </main>
      ) : (
        <p>Doctor not found</p>
      )}
      <Footer />
    </main>
  );
}
