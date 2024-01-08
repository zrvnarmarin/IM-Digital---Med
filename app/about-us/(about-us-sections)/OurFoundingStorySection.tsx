import React from "react";
import Image from "next/image";
import TestImage from "../../../public/doctorOperating.jpg";

export default function OurFoundingStorySection() {
  return (
    <section className="flex gap-4 h-full flex-col lg:flex-col pb-12 px-7 md:px-20 lg:px-28 pt-8">
      <div className="flex flex-col items-center gap-2 relative">
        <p className="text-9xl text-slate-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          03
        </p>
        <div className="relative z-10 text-start text-2xl md:text-3xl lg:text-4xl text-[#2a2f31] font-semibold uppercase leading-2">
          Our Founding Story
        </div>
      </div>
      <p className="text-sm md:text-md font-normal pt-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur
        explicabo qui?
      </p>
      <p className="text-sm md:text-md font-normal pt-1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde expedita
        eveniet doloribus quia dolorem hic nulla nihil, odio nisi fugiat ipsam
        aut, ducimus deserunt quisquam nostrum vitae sequi amet recusandae
        tempore! Atque minus quo eligendi?
      </p>
      <p className="text-sm md:text-md font-normal pt-1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde expedita
        eveniet doloribus quia dolorem hic nulla nihil, odio nisi fugiat ipsam
        aut, ducimus deserunt quisquam nostrum vitae sequi amet recusandae
        tempore! Atque minus quo eligendi?
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {[1, 2, 3, 4, 5, 6].map((__, key) => (
          <Card key={key} />
        ))}
      </div>
    </section>
  );
}

const Card = () => {
  return (
    <div className="relative group rounded overflow-hidden cursor-pointer">
      <Image
        className="object-cover w-full h-54 md:h-72 lg:h-80 xl:h-96 transition duration-300 ease-in-out transform group-hover:scale-105"
        src={TestImage}
        alt="Card Background"
        width={0}
        height={0}
      />
    </div>
  );
};
