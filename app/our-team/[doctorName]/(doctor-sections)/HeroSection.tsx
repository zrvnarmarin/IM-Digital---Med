import React from "react";
import Image from "next/image";
import SomeDoctorImage from "../../../../public/someDoctorImage.avif";

export default function HeroSection({ doctorName, doctorSpecialisation } : { doctorName: string, doctorSpecialisation: string }) {
  return (
    <section className="relative w-full h-screen">
      <Image
        src={SomeDoctorImage}
        alt="Hero Image"
        className="object-cover w-full h-full"
      />

      <div className="absolute bottom-4 lg:bottom-4 left-0 right-0 w-full flex flex-col items-center justify-center text-white text-center">
        <p className="text-xs italic pb-4 px-4 text-start w-full">
        {doctorSpecialisation}
        </p>
        <div className="bg-slate-700/90 text-3xl text-start font-bold mb-4 px-4 w-full py-3 border-slate-500 border-y-[1px]">
        <h1>Dr. Med. {doctorName}</h1>
        </div>
      </div>
      
    </section>
  );
};