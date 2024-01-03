import React from "react";
import Link from "next/link";
import { DoctorType } from "@/app/types";
import { BookIcon, SthetoscopeIcon } from "@/public/Icons";

export default function DescriptionSection({ doctor }: { doctor: DoctorType }) {
  return (
    <section className="flex flex-col items-center justify-center gap-24 lg:pt-4 md:px-8 lg:px-24 pb-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#333333] font-medium text-2xl lg:text-5xl">
          {doctor.name}, dr.med.dent.
        </h1>
        <div className="flex items-center gap-2">
          <p className="text-[#656666] text-md font-semibold lg:text-lg">
            {doctor.specialisation}
          </p>
        </div>
        <p className="text-[#656666]  lg:text-lg">{doctor.description}</p>
        <h3 className="text-[#656666] text-md font-semibold lg:text-lg">
          Achievements:{" "}
        </h3>
        <ul>
          {doctor.achievements.map((achievement) => (
            <li
              key={achievement}
              className="text-[#656666] flex flex-row gap-2 lg:text-xl"
            >
              <span className="font-bold text-2xl text-[#3CAEAA] pt-2">
                {SthetoscopeIcon()}
              </span>
              {achievement} <br /> <br />
            </li>
          ))}
        </ul>
        <h3 className="text-[#656666] text-md font-semibold lg:text-lg">
          Education:{" "}
        </h3>
        <div className="flex flex-row gap-2">
          <p className="text-[#656666] flex flex-row gap-2 lg:text-xl">
            <span className="font-bold text-2xl text-[#3CAEAA] pt-2">
              {BookIcon()}
            </span>
            {doctor.education}
          </p>
        </div>
      </div>
      <Link href={`/contact`} className="bg-slate-700/90 text-white px-6 py-3 rounded border-slate-500 border">Contact Us</Link>

    </section>
  );
}
