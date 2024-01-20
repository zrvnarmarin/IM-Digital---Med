import React from "react";
import { advantages } from "@/app/data";
import { AdvantageType } from "@/app/types";
import { RightIcon } from "@/public/Icons";

export default function AdvantagesSection() {
  return (
    <section className="flex flex-col gap-10 pt-10 sm:pt-12 md:pt-16 lg:pt-28 px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32 bg-white">

      <div className="bg-[#babaff]/50 flex flex-row items-center justify-between px-8 py-8 uppercase">
        <h2 className="font-bold text-center text-8xl text-white">5</h2>
        <h2 className="font-bold text-center text-8xl text-white">
          Advantages
        </h2>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {advantages.map((advantage) => (
          <CoreValueCard key={advantage.id} advantage={advantage} />
        ))}
      </ul>
    </section>
  );
}

export function CoreValueCard({ advantage }: { advantage: AdvantageType }) {
  return (
    <li
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
      <h2 className="w-full leading-2 text-center text-lg md:text-xl font-semibold text-slate-600 duration-200 pt-6">
        {advantage.value}
      </h2>
      <p className="text-center w-full text-md md:text-lg font-normal text-slate-600 pt-3">
        {advantage.description}
      </p>
    </li>
  );
}