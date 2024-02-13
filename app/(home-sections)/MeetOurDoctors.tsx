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
        <h2 className="text-center text-4xl font-bold text-slate-600">
          Meet Our Doctor Specialists
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 pt-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
      <div className="flex justify-center pt-8 px-6">
        <Link
          href="/our-team"
          className="bg-[#02aeef]/50 hover:bg-[#02aeef]/70 duration-100 text-white font-semibold px-8 py-3 rounded-md"
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
      <div className="relative group rounded overflow-hidden cursor-pointer shadow-md">
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
        <div className="absolute bottom-0 left-0 right-0 p-4 transition duration-300 ease-in-out bg-[#80d6f7] text-white opacity-0 group-hover:opacity-100">
          <div className="flex items-center gap-2 justify-end">
            <p className="text-white text-center font-medium text-lg xl:text-xl ">
              Meet Dr. {getFirstName(doctor.name)}
            </p>
            <div>
              <RightIcon
                width="30"
                height="30"
                iconFillColor="#ffffff"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-slate-500 text-start font-medium text-lg xl:text-xl w-full group-hover:text-white duration-100 pt-4">
        Dr. {doctor.name}
      </p>
      <p className="text-start w-full text-base xl:text-lg font-light text-slate-500 group-hover:text-white duration-100 pt-2">
        {doctor.specialisation}
      </p>
    </Link>
  );
};
