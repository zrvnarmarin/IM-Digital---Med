import React from "react";
import { doctors } from "@/app/data";
import Footer from "@/app/components/Footer";
import HeroSection from "./(doctor-sections)/HeroSection";
import DescriptionSection from "./(doctor-sections)/DescriptionSection";
import GetAppointmentSection from "./(doctor-sections)/GetAppointmentSection";

export default function Page({ params }: { params: { doctorName: string } }) {
  const doctor = doctors.find((doctor) => doctor.href === params.doctorName);

  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      {doctor ? (
        <main className="flex min-h-screen flex-col items-center bg-[#FFFFFF]">
          <HeroSection
            doctorName={doctor.name}
            doctorSpecialisation={doctor.specialisation}
          />
          <DescriptionSection doctor={doctor} />
          <GetAppointmentSection />
        </main>
      ) : (
        <p>Doctor not found</p>
      )}
      <Footer />
    </main>
  );
}