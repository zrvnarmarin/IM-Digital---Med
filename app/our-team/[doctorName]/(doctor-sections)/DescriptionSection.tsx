import React from "react";
import Link from "next/link";
import { DoctorType } from "@/app/types";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import { TestSVG } from "@/app/(home-sections)/WhyPeopleChooseUs";

//TO DO: put break somewhere in the description tag in data, like its on aviva doctor route

export default function DescriptionSection({ doctor }: { doctor: DoctorType }) {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-10">
        <h2 className="hidden md:block text-start text-4xl font-bold text-slate-600">
          {doctor.name}, dr.med
        </h2>
        <p className="text-start w-full text-base xl:text-lg font-light text-slate-500 pt-2">
          {doctor.description}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <h3 className="col-span-1 flex items-center text-slate-500 font-medium text-lg xl:text-xl leading-2 uppercase">
            Education:{" "}
          </h3>
          <div className="col-span-3 flex flex-row gap-4 px-4 items-center text-base xl:text-lg font-light text-slate-500">
            <TestSVG iconFill="#ffffff" backgroundFill="#80d6f7" />
            <p className="text-start w-full text-base xl:text-lg font-light text-slate-500">
              {doctor.education}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <h3 className="col-span-1 text-slate-500 font-medium text-lg xl:text-xl leading-2 uppercase">
            Achievements:{" "}
          </h3>
          <ul className="col-span-3 flex flex-col gap-6 border border-slate-200 p-4 rounded-md bg-[#02aeef]/5">
            {doctor.achievements.map((achievement) => (
              <li
                key={achievement}
                className="flex flex-row gap-4 items-center text-base xl:text-lg font-light text-slate-500"
              >
                <TestSVG iconFill="#ffffff" backgroundFill="#80d6f7" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
