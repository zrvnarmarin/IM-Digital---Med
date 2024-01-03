import React from "react";
import { doctors } from "@/app/data";
import Navbar from "@/app/(home-sections)/Navbar";
import Footer from "@/app/components/Footer";
import HeroSection from "./(doctor-sections)/HeroSection";
import DescriptionSection from "./(doctor-sections)/DescriptionSection";

export default function Page({ params }: { params: { doctorName: string } }) {
  const doctor = doctors.find((doctor) => doctor.href === params.doctorName);

  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-white">
      <Navbar />
      {doctor ? (
        <section className="h-full grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 px-8 md:px-12 lg:px-24 bg-white">
          <HeroSection
            doctorName={doctor.name}
            doctorSpecialisation={doctor.specialisation}
          />
          <DescriptionSection doctor={doctor} />
        </section>
      ) : (
        <p>Doctor not found</p>
      )}
      <Footer />
    </main>
  );
}
