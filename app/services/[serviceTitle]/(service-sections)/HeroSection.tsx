import React from "react";
import Image from "next/image";
import TeamOfDoctors from '../../../../public/TeamOfDoctors.jpg'

export default function HeroSection({
  serviceTitle,
  shortServiceDescription,
}: {
  serviceTitle: string;
  shortServiceDescription: string;
}) {
  return (
    <section className="relative w-full h-screen">
      <Image
        src={TeamOfDoctors}
        alt="Hero Image"
        className="object-cover w-full h-full"
      />

      <div className="absolute bottom-4 lg:bottom-4 left-0 right-0 w-full flex flex-col items-center justify-center text-white text-center">
        <p className="text-xs italic pb-4 px-4 text-start w-full">
        {shortServiceDescription}
        </p>
        <div className="bg-slate-700/90 text-3xl text-start font-bold mb-4 px-4 w-full py-3 border-slate-500 border-y-[1px]">
          <h1>{serviceTitle}</h1>
        </div>
      </div>
      
    </section>
  );
};