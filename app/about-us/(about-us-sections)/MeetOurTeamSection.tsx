import React from "react";
import Link from "next/link";
import Image from "next/image";
import { doctors } from "@/app/data";
import TestImage from "../../../public/doctor-operating.avif";

export default function MeetOurTeamSection() {
  return (
    <section className="flex gap-4 h-full flex-col lg:flex-col pb-12 px-7 md:px-20 lg:px-24 pt-8">
      <div className="flex flex-col items-center gap-2 relative">
        <p className="text-9xl text-slate-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          04
        </p>
        <div className="relative z-10 text-start text-2xl md:text-3xl lg:text-4xl text-[#2a2f31] font-semibold uppercase leading-2">
          Meet Our Team
        </div>
      </div>

      <p className="text-sm md:text-md font-normal pt-12">
        We are very proud of our team that has a shared vision of delivering the
        high-quality results, as well as ensuring the overall positive working
        atmosphere.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {doctors.map((doctor) => (
          <Card
            key={doctor.id}
            doctorHref={doctor.href}
            doctorName={doctor.name}
            doctorSpecialisation={doctor.specialisation}
          />
        ))}
      </div>

      <div className="flex justify-center pt-8 pb-8">
        <button className="bg-slate-700/90 text-white px-6 py-3 rounded border-slate-500 border">
          Meet The Rest 
        </button>
      </div>
    </section>
  );
}

const Card = ({ doctorName, doctorSpecialisation, doctorHref } : { doctorName: string, doctorSpecialisation: string, doctorHref: string }) => {
  return (
    <Link href={`/our-team/${doctorHref}`}>
      <div className="relative group rounded overflow-hidden cursor-pointer">
        {/* Background Image */}
        <Image
          className="object-cover w-full h-54 md:h-72 lg:h-80 xl:h-96 transition duration-300 ease-in-out transform group-hover:scale-105"
          src={TestImage}
          alt="Card Background"
          width={0}
          height={0}
        />
        {/* Text Container */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 text-white p-4 transition duration-300 ease-in-out">
          {/* Paragraph 1 */}
          {/* Paragraph 2 */}
          <p className="text-xs md:text-sm lg:text-base xl:text-lg">
            {doctorName}
          </p>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            {doctorSpecialisation}
          </p>
        </div>
      </div>
    </Link>
  );
};
