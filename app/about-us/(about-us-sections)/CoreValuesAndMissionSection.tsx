import React from "react";
import { coreValues, missionItems } from "@/app/data";

export default function CoreValuesAndMissionSection() {
  return (
    <section className="w-full flex flex-col gap-8 pb-8 px-7 md:px-16 lg:px-20 bg-white pt-12">
      <div className="flex flex-col items-center gap-2 relative">
        <p className="text-9xl text-slate-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          01
        </p>
        <div className="relative z-10 text-start text-2xl md:text-3xl lg:text-4xl text-[#2a2f31] font-semibold uppercase leading-2">
          Our Values
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
        {coreValues.map((value) => (
          <div className="flex flex-col rounded items-start bg-slate-500 shadow-lg bg-opacity-5 p-4 hover:scale-105 hover:bg-slate-300 hover:text-white duration-300">
            {value.icon()}
            <h2 className="text-center text-md md:text-lg lg:text-xl text-black font-semibold pt-2">
              {value.value}
            </h2>
            <p className="text-start w-full text-sm md:text-md font-normal pt-2">
              {value.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-2 relative">
        <p className="text-9xl text-slate-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          02
        </p>
        <div className="relative z-10 text-start text-2xl md:text-3xl lg:text-4xl text-[#2a2f31] font-semibold uppercase leading-2">
          Our Mission
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
        {missionItems.map((value) => (
          <div className="flex flex-col rounded items-start bg-slate-500 shadow-lg bg-opacity-5 p-4 hover:scale-105 hover:bg-slate-300 hover:text-white duration-300">
            {value.icon()}
            <h2 className="text-center text-md md:text-lg lg:text-xl text-black font-semibold pt-2">
              {value.value}
            </h2>
            <p className="text-start w-full text-sm md:text-md font-normal pt-2">
              {value.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-8 pb-8">
        <button className="bg-slate-700/90 text-white px-6 py-3 rounded border-slate-500 border">
          Contact Us
        </button>
      </div>
    </section>
  );
}