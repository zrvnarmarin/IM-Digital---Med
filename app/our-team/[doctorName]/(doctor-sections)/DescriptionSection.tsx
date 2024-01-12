import React from "react";
import Link from "next/link";
import { DoctorType } from "@/app/types";
import { BookIcon, SthetoscopeIcon } from "@/public/Icons";

export default function DescriptionSection({ doctor }: { doctor: DoctorType }) {
  return (
    <section className="flex flex-col items-center justify-center gap-24 pb-12 px-6 xs:px-12 sm:px-16 md:px-28 lg:px-48">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#2a2f31] font-semibold leading-2">
          {doctor.name}, dr.med.dent.
        </h1>
        <div className="flex items-center gap-2">
          <p className="text-center text-md md:text-lg lg:text-xl text-black font-semibold pt-2">
            {doctor.specialisation}
          </p>
        </div>
        <p className="text-start w-full text-sm md:text-md font-normal">
          {doctor.description}
        </p>
        <h3 className="text-start text-md md:text-lg lg:text-xl text-black font-semibold pt-2">
          Achievements:{" "}
        </h3>
        <ul>
          {doctor.achievements.map((achievement) => (
            <li
              key={achievement}
              className="flex flex-row gap-4 text-start w-full text-sm md:text-md font-normal"
            >
              <span className="font-bold text-2xl text-[#3CAEAA] pt-2">
                {SthetoscopeIcon()}
              </span>
              {achievement} <br /> <br />
            </li>
          ))}
        </ul>
        <h3 className="text-start text-md md:text-lg lg:text-xl text-black font-semibold pt-2">
          Education:{" "}
        </h3>
        <div className="flex flex-row md:flex-col gap-4 pt-4">
          <div className="flex flex-row md:flex-col gap-4 text-start w-full text-sm md:text-md font-normal">
            <span className="font-bold text-2xl text-[#3CAEAA] pt-2">
              {BookIcon()}
            </span>
            <p>{doctor.education}</p>
          </div>
        </div>
      </div>
      <Link
        href={`/contact`}
        className="bg-slate-700/90 text-white px-6 py-3 rounded border-slate-500 border"
      >
        Contact Us
      </Link>
    </section>
  );
}
