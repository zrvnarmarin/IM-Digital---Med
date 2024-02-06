import React from "react";
import { stats } from "../data";
import { StatType } from "../types";

export default function StatsSection() {
  return (
    <section className="w-full flex flex-col gap-8 pt-10 sm:pt-12 md:pt-16 lg:pt-28  bg-white">
      <ul className="bg-[#80d6f7] grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-10 place-items-center px-8 py-8">
        {stats.map((stat) => (
          <StatElement key={stat.id} stat={stat} />
        ))}
      </ul>
    </section>
  );
}

function StatElement({ stat }: { stat: StatType }) {
  return (
    <li>
      <h2 className="font-bold text-center text-7xl xl:text-9xl text-white">
        {stat.statNumber}
      </h2>
      <p className="font-semibold text-center text-2xl text-white">{stat.statText}</p>
    </li>
  );
}
