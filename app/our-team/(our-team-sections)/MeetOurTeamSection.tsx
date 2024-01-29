import Image from "next/image";
import React from "react";
import Link from "next/link";
import "../../../public/DoctorCard.css";
import { doctors } from "../../data";
import { DoctorType } from "../../types";
import { generateUrlFromFullName, getFirstName } from "../../utils";
import TestImage from "../../../public/someDoctorImage.avif";
import { RightIcon } from "@/public/Icons";

export default function MeetOurDoctors() {
  return (
    <section className="w-full flex flex-col gap-8 pt-10 sm:pt-12 md:pt-16 lg:pt-28 px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32 bg-white">
      <h2 className="text-start text-2xl xs:text-4xl font-medium text-slate-600 underline-offset-8 decoration-1 underline decoration-[#babaff]">
        Meet our doctor specialists
      </h2>
      <p className="text-start w-full text-base xl:text-lg font-light text-slate-500 pt-2">
        <span className="text-[#babaff]">Clinical Research Training </span> and
          Medical Education Critical Care 
        <span className="text-[#babaff]">
           {" "}Medicine Additional NIH Doctors/Researchers 
        </span>
          {" "}nical Research Training and Medical Education · Critical Care Medicine
          Additional NIH Doctors/Researchers
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-12">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
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
      <p className="text-start w-full text-base xl:text-lg font-normal text-slate-500 group-hover:text-white duration-100 pt-4">
        Dr. {doctor.name}
      </p>
      <p className="text-start w-full text-sm xl:text-md font-light text-slate-500 group-hover:text-white duration-100 pt-2">
        {doctor.specialisation}
      </p>
    </Link>
  );
};
