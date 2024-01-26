import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RightIcon } from "@/public/Icons";
import { DoctorType } from "@/app/types";
import { doctors } from "@/app/data";
import { generateUrlFromFullName, getFirstName } from "@/app/utils";
import TestImage from "../../../public/someDoctorImage.avif";

export default function OurFoundingStorySection() {
  return (
    <section>
      <div className="flex flex-col gap-10 pt-10 sm:pt-12 md:pt-16 lg:pt-28 px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32 bg-white">
        <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2">
          <h2 className="w-full leading-2 text-start text-2xl lg:text-4xl font-bold text-slate-600">
            Meet our team
          </h2>
        </div>

        <p className="text-start w-full text-sm md:text-md 2xl:text-lg font-medium text-slate-500">
          <span className="font-bold">Clinical Research Training</span> and
          Medical Education · Critical Care
          <span className="font-bold">
            {" "}
            Medicine Additional NIH Doctors/Researchers
          </span>{" "}
          nical Research Training and Medical Education · Critical Care Medicine
          Additional NIH Doctors/Researchers
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
        <div className="flex justify-center py-10 px-6">
          <button className="bg-[#babaff]/50 text-white font-semibold px-6 py-3 uppercase">
            Meet The rest
          </button>
        </div>
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
            <RightIcon
              width="30"
              height="30"
              backgroundFillColor="#babaffcc"
              iconFillColor="#ffffff"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
