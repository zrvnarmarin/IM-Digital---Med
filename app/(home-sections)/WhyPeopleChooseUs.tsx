import React from "react";
import Image from "next/image";
import RightArrowImage from "../../public/RightIcon.png";
import { WhyChooseUsPoint } from "../types";
import { whyChooseUsPoints } from "../data";

export default function WhyPeopleChooseUs() {
  return (
    <section className="flex flex-col gap-8 py-16 px-7 md:px-10 lg:px-20 bg-white">
      <div className="flex flex-col justify-center">
        <h1 className="text-start text-2xl md:text-3xl lg:text-4xl  text-[#2a2f31] font-semibold leading-2">
          Why your health is safe at our hands
        </h1>
        <p className="text-[#555f60] text-start text-base md:text-base lg:text-lg leading-2 pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          doloremque at placeat
          <span className="font-bold"> ducimus alias ad quis </span>
          optio necessitatibus, deleniti voluptates veritatis aspernatur
          similique.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
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
      className={`flex flex-col rounded items-center bg-slate-500 shadow-lg bg-opacity-5 p-4 hover:scale-105 hover:bg-slate-300 hover:text-white duration-300`}
    >
      <div
        className={`flex items-center justify-center  w-fit h-fit p-2 rounded-full bg-slate-300 duration-300`}
      >
        {point?.icon()}
      </div>
      <h2 className="w-full text-center text-md md:text-lg font-semibold pt-4">
        {point.point}
      </h2>
      <p className="text-start w-full text-sm md:text-md font-normal pt-2">
        {point.description}
      </p>
      <div className="w-full flex items-center pt-8 gap-2 justify-end">
        <p className="text-slate-700 text-end text-sm">Learn More</p>
        <Image src={RightArrowImage} alt="clover" width={15} height={15} />
      </div>
    </div>
  );
}
