import React from "react";
import { IconsEightTestIcon } from "@/public/Icons";
import "../../public/CardHoverEffect.css";

//TO DO: put mouse out color animations on cards

export default function WhyPeopleChooseUs() {
  return (
    <section className="flex flex-col gap-8 py-16 px-8 bg-white">
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-start text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2a2f31] leading-10">
          Lorem ipsum dolor sit
        </h1>
        <p className="text-[#555f60] text-start text-md sm:text-lg leading-7 pt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          doloremque at placeat ducimus alias ad quis optio necessitatibus,
          deleniti voluptates veritatis aspernatur similique.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
      {/* <div className='flex items-center justify-center border-2 border-black h-full'>
            <Image src={DocImage} alt='g' height={0} width={0} />
        </div> */}
    </section>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      key={service.title}
      className={`flex flex-col sm:flex-row items-center gap-4 bg-blue-500 shadow-lg bg-opacity-5 p-4 hover:cursor-pointer`}
    >
      <div
        className={`flex items-center justify-center  w-fit h-fit p-2 rounded-lg`}
      >
        {service?.icon()}
      </div>
      <p className="text-center text-sm md:text-lg lg:text-xl text-[#333333] font-semibold">
        {service.title}
      </p>
    </div>
  );
}

type Service = {
  icon: () => JSX.Element;
  iconBackground: string;
  title: string;
};

const services = [
  {
    icon: IconsEightTestIcon,
    iconBackground: "bg-white",
    title: "Lorem ipsum Dolor sit",
  },
  {
    icon: IconsEightTestIcon,
    iconBackground: "bg-white",
    title: "Lorem ipsum Dolor siti",
  },
  {
    icon: IconsEightTestIcon,
    iconBackground: "bg-white",
    title: "Lorem ipsum Dolor sitin",
  },
  {
    icon: IconsEightTestIcon,
    iconBackground: "bg-white",
    title: "Lorem ipsum Dolor siting",
  },
];
