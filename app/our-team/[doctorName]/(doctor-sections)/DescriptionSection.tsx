import React from "react";
import Link from "next/link";
import { DoctorType } from "@/app/types";
import { BookIcon, SthetoscopeIcon } from "@/public/Icons";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import { TestSVG } from "@/app/(home-sections)/WhyPeopleChooseUs";

export default function DescriptionSection({ doctor }: { doctor: DoctorType }) {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4">
        <h2 className="text-start text-2xl xs:text-4xl font-medium text-slate-600 underline-offset-8 decoration-1 underline decoration-[#babaff]">
          {doctor.name}, dr.med
        </h2>

        <p className="text-start w-full text-base xl:text-lg font-light text-slate-500 pt-2">
          {doctor.description}
        </p>

        <h3 className="text-start w-full text-slate-500 font-normal text-lg xl:text-xl uppercase">
          Achievements:{" "}
        </h3>
        <ul>
          {doctor.achievements.map((achievement) => (
            <li
              key={achievement}
              className="flex flex-row gap-4 items-center text-base xl:text-lg font-light text-slate-500 pt-4"
            >
              <TestSVG />
              {achievement}
            </li>
          ))}
        </ul>

        <h2 className="text-start w-full text-slate-500 font-normal text-lg xl:text-xl uppercase pt-4">
          Education:{" "}
        </h2>

        <div className="flex flex-row md:flex-col gap-4 pt-4">
          <div className="flex flex-row gap-4 items-center text-base xl:text-lg font-light text-slate-500">
            <TestSVG />
            <p className="text-start w-full text-base xl:text-lg font-light text-slate-500">
              {doctor.education}
            </p>
          </div>
        </div>

      </div>
      <Link
        href={`/contact`}
        className="bg-slate-700/90 text-white px-6 py-3 rounded border-slate-500 border"
      >
        Contact Us
      </Link>
    </SectionWrapper>
  );
}
