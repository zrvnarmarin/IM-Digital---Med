import React from "react";
import { coreValues, missionItems } from "@/app/data";
import { ShieldIcon } from "@/public/Icons";
import { CoreValueType, MissionItemType } from "@/app/types";
import Link from "next/link";

export default function CoreValuesAndMissionSection() {
  return (
    <section className="flex flex-col gap-10 pt-10 sm:pt-12 md:pt-16 lg:pt-28 px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32 bg-white">
      <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2">
        <h2 className="w-full leading-2 text-start text-2xl lg:text-4xl font-bold text-slate-600">
          Our Values
        </h2>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pb-8 lg:pb-12">
        {coreValues.map((value) => (
          <CoreValueCard key={value.id} value={value} />
        ))}
      </ul>

      <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2">
        <h2 className="w-full leading-2 text-start text-2xl lg:text-4xl font-bold text-slate-600">
          Our Mission
        </h2>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {missionItems.map((missionItem) => (
          <MissionItemCard key={missionItem.id} missionItem={missionItem} />
        ))}
      </ul>

      <div className="flex justify-center pt-8 px-6">
        <Link
          href="/contact"
          className="bg-[#babaff]/50 text-white font-semibold px-6 py-3 uppercase"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}

export function MissionItemCard({
  missionItem,
}: {
  missionItem: MissionItemType;
}) {
  return (
    <div
      key={missionItem.id}
      className={`group flex flex-col rounded items-center bg-[#babaff]/10 p-4 md:p-6 lg:p-8 hover:scale-105 hover:bg-[#babaff] hover:text-white duration-300`}
    >
      <div>
        <ShieldIcon />
      </div>
      <h2 className="w-full text-center text-md font-semibold lg:font-semibold text-slate-600 pt-6">
        {missionItem.value}
      </h2>
      <p className="text-center w-full text-sm md:text-md 2xl:text-lg font-medium text-slate-500 pt-4">
        {missionItem.description}
      </p>
    </div>
  );
}

export function CoreValueCard({ value }: { value: CoreValueType }) {
  return (
    <div
      key={value.id}
      className={`group flex flex-col rounded items-center bg-[#babaff]/10 p-4 md:p-6 lg:p-8 hover:scale-105 hover:bg-[#babaff] hover:text-white duration-300`}
    >
      <div>
        <ShieldIcon />
      </div>
      <h2 className="w-full text-center text-md font-semibold lg:font-semibold text-slate-600 pt-6">
        {value.value}
      </h2>
      <p className="text-center w-full text-sm md:text-md 2xl:text-lg font-medium text-slate-500 pt-4">
        {value.description}
      </p>
    </div>
  );
}