import React from "react";

export default function ParagraphSectionServiceOne() {
  return (
      <section className="flex gap-2 w-full flex-col md:flex-col pb-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
        <p className="text-start text-md md:text-lg lg:text-xl text-black font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
          vitae
        </p>
        <p className="text-start w-full text-sm md:text-md font-normal">
          Lorem, ipsum dolor{" "}
          <span className="font-bold">sit amet consectetur</span> adipisicing
          elit. Fuga, cum! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Fuga, cum!
        </p>
        <p className="text-start w-full text-sm md:text-md font-normal">
          Lorem, ipsum dolor sit amet consectetur{" "}
          <span className="font-bold">adipisicing elit</span>. Fuga, cum! Lorem,
          ipsum dolor sit amet consectetur Fuga, cum! Lorem, ipsum dolor{" "}
          <span className="font-bold">
            sit amet consectetur adipisicing elim
          </span>
          . Fuga, cum!
        </p>
      </section>
  );
}