import React from "react";
import { WhyChooseUsPointType } from "../types";
import { whyChooseUsPoints } from "../data";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import { ShieldIcon } from "@/public/Icons";

export default function WhyPeopleChooseUs() {
  return (
    <SectionWrapper>
      <div className="flex flex-col justify-center">
        <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2">
          <h2 className="w-full leading-2 text-start text-2xl lg:text-4xl font-bold text-slate-600">
            Why is your health safe
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 pt-8 lg:pt-12">
          {whyChooseUsPoints.map((point) => (
            <WhyPeopleChoosePointCard key={point.point} point={point} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export function WhyPeopleChoosePointCard({
  point,
}: {
  point: WhyChooseUsPointType;
}) {
  return (
    <div
      key={point.id}
      className={`group flex flex-col rounded items-center bg-[#babaff]/10 p-4 md:p-6 lg:p-8 hover:scale-105 hover:bg-[#babaff] hover:text-white duration-300`}
    >
      <div>
        <ShieldIcon />
      </div>
      <h2 className="w-full text-center text-base font-semibold lg:font-semibold text-slate-600 pt-6">
        {point.point}
      </h2>
      <p className="text-center w-full text-sm md:text-sm 2xl:text-lg font-medium text-slate-500 pt-4">
        {point.description}
      </p>
    </div>
  );
}
