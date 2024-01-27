import Image from "next/image";
import React from "react";
import Link from "next/link";
import "../../public/DoctorCard.css";
import { doctors } from "../data";
import { DoctorType } from "../types";
import { generateUrlFromFullName } from "../utils";
import TestImage from "../../public/someDoctorImage.avif";
import { RightIcon } from "@/public/Icons";
import { getFirstName } from "../utils";
import SectionWrapper from "../components/wrappers/SectionWrapper";

export default function MeetOurDoctors() {
  return (
    <SectionWrapper>
      <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2">
        <h2 className="text-center text-2xl xs:text-4xl font-medium text-slate-600 underline-offset-8 decoration-1 underline decoration-[#babaff]">
          Meet Our Doctor Specialists
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
      <div className="flex justify-center pt-8 px-6">
        <Link
          href="/our-team"
          className="bg-[#babaff]/50 text-white font-semibold px-6 py-3 uppercase"
        >
          Meet The Rest
        </Link>
      </div>
    </SectionWrapper>
  );
}

const DoctorCard = ({ doctor }: { doctor: DoctorType }) => {
  const lowerCaseDoctorName = generateUrlFromFullName(doctor.name);

  return (
    <Link href={`/our-team/${lowerCaseDoctorName}`}>
      <div className="relative group rounded overflow-hidden cursor-pointer">
        {/* Background Image */}
        <div className="group-hover:opacity-75 transition duration-300 ease-in-out">
          <Image
            className="object-cover w-full h-54 md:h-72 lg:h-80 xl:h-96 transform group-hover:scale-105 duration-300"
            src={TestImage}
            alt="Card Background"
            width={0}
            height={0}
          />
        </div>
        {/* Text Container */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transition duration-300 ease-in-out bg-[#babaff]/80 text-white opacity-0 group-hover:opacity-100">
          {/* Paragraph 1 */}
          <p className="text-md md:text-lg lg:text-xl xl:text-xl font-semibold">
            Dr. {doctor.name}
          </p>
          {/* Paragraph 2 */}
          <p className="text-base md:text-md lg:text-lg mb-2">
            {doctor.specialisation}
          </p>
          <div className="flex items-center pt-4 gap-2 justify-end">
            <p className="text-md md:text-lg font-normal text-white">
              Meet Dr. {getFirstName(doctor.name)}
            </p>
            <div>
              <RightIcon
                width="30"
                height="30"
                backgroundFillColor="#babaffcc"
                iconFillColor="#ffffff"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
