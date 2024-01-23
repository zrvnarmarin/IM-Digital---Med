import React from "react";
import { WhyChooseUsPointType } from "../types";
import { whyChooseUsPoints } from "../data";
import { RightIcon } from "@/public/Icons";

export default function WhyPeopleChooseUs() {
  return (
    <section className="flex flex-col gap-8 pt-10 sm:pt-12 md:pt-16 lg:pt-28 px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32 bg-white">
      <div className="flex flex-col justify-center">
        <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2 border-b-2 border-[#babaff]">
          <h2 className="w-full leading-2 text-start text-lg md:text-lg lg:text-xl font-medium text-[#babaff]">
            Why is your health safe
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-8 lg:pt-12">
          {whyChooseUsPoints.map((point) => (
            <WhyPeopleChoosePointCard key={point.point} point={point} />
          ))}
        </div>
      </div>
    </section>
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
        <RightIcon
          width="50"
          height="50"
          backgroundFillColor="#babaff"
          iconFillColor="#ffffff"
        />
      </div>
      <h2 className="w-full leading-2 text-center text-md md:text-lg lg:text-xl font-semibold text-slate-600 duration-200 pt-6">
        {point.point}
      </h2>
      <p className="text-center w-full text-md md:text-lg font-normal text-slate-600 pt-3">
        {point.description}
      </p>
    </div>
  );
}
