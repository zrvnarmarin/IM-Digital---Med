import React from "react";
import Image from "next/image";
import { IconsEightTestIcon } from "@/public/Icons";
import RightArrowImage from '../../public/RightIcon.png'
import { WhyChooseUsPoint } from "../types";
import { whyChooseUsPoints } from "../data";

export default function WhyPeopleChooseUs() {
  return (
    <section className="flex flex-col gap-8 py-16 px-8 bg-white">
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-start text-xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2a2f31] leading-2">
          Why your health is safe at our hands
        </h1>
        <p className="text-[#555f60] text-start text-sm sm:text-md leading-2 pt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          doloremque at placeat ducimus alias ad quis optio necessitatibus,
          deleniti voluptates veritatis aspernatur similique.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-10">
          {whyChooseUsPoints.map((point) => (
            <ServiceCard key={point.point} point={point} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({ point }: { point: WhyChooseUsPoint }) {
  return (
    <div
      key={point.id}
      className={`flex flex-col rounded sm:flex-row items-center bg-slate-500 shadow-lg bg-opacity-5 p-4 hover:cursor-pointer hover:scale-105 hover:bg-slate-500 hover:text-white duration-300`}
    >
      <div
        className={`flex items-center justify-center  w-fit h-fit p-2 rounded-full bg-slate-300 duration-300`}
      >
        {point?.icon()}
      </div>
      <h2 className="w-full text-start text-md md:text-lg lg:text-xl font-semibold pt-2">
        {point.point}
      </h2>
      <p className="text-start w-full text-sm md:text-md lg:text-lg font-normal ">
        {point.description}
      </p>
      <div className="w-full flex items-center pt-6 gap-2 justify-end">
        <p className="text-slate-700 text-end text-sm">Learn More</p>
        <Image src={RightArrowImage} alt="clover" width={15} height={15} />
      </div>
    </div>
  );
}
