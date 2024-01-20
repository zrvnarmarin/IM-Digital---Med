import React from "react";
import Image from "next/image";
import TestImage from "../../../public/doctorOperating.jpg";
import HospitalImage from "../../../public/HospitalImage.jpg";
import Testimonials from "@/app/components/Testimonials";

export default function MoreTextSection() {
  return (
    <section className="flex flex-col gap-10 pt-10 sm:pt-12 md:pt-16 lg:pt-28 px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32 bg-white">
      <div className="bg-[#babaff]/50 flex flex-row items-center justify-between px-8 py-8 uppercase">
        <h2 className="font-bold text-center text-8xl text-white">6</h2>
        <h2 className="font-bold text-center text-8xl text-white">
          Lorem Ipsum
        </h2>
      </div>

      <div className="w-fit bg-[#babaff]/50 flex flex-row items-center gap-4 px-2 py-2 uppercase">
        <h2 className="font-bold text-center text-xl text-white">6.1</h2>
        <h2 className="font-bold text-center text-xl text-white">
          Our Something
        </h2>
      </div>

      <div>
        <h2 className="font-bold text-start text-xl lg:text-3xl text-slate-600 leading-2">
          Lorem Ipsum Dolor Sit
        </h2>
        <p className="text-start w-full text-md md:text-lg font-normal text-slate-600 bg-[#babaff]/10 p-4 mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
          expedita eveniet doloribus quia dolorem hic nulla nihil, odio nisi
          fugiat ipsam aut, ducimus deserunt quisquam nostrum vitae sequi amet
          recusandae tempore! Atque minus quo eligendi?
        </p>
      </div>

      <div className="w-fit bg-[#babaff]/50 flex flex-row items-center gap-4 px-2 py-2 uppercase">
        <h2 className="font-bold text-center text-xl text-white">6.2</h2>
        <h2 className="font-bold text-center text-xl text-white">
          Our Something
        </h2>
      </div>

      <div>
        <h2 className="font-bold text-start text-xl lg:text-3xl text-slate-600 leading-2">
          Lorem Ipsum Dolor Sit
        </h2>
        <p className="text-start w-full text-md md:text-lg font-normal text-slate-600 bg-[#babaff]/10 p-4 mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
          expedita eveniet doloribus quia dolorem hic nulla nihil, odio nisi
          fugiat ipsam aut, ducimus deserunt quisquam nostrum vitae sequi amet
          recusandae tempore! Atque minus quo eligendi? Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Unde expedita eveniet doloribus
          quia dolorem hic nulla nihil, odio nisi fugiat ipsam aut, ducimus
          deserunt quisquam nostrum vitae sequi amet recusandae tempore! Atque
          minus quo eligendi? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Unde expedita eveniet doloribus quia dolorem hic
          nulla nihil, odio nisi fugiat ipsam aut, ducimus deserunt quisquam
          nostrum vitae sequi amet recusandae tempore! Atque minus quo eligendi?
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((__, key) => (
          <FounderCard key={key} />
        ))}
      </div>

      <div className="flex flex-col gap-8 pt-4">
        <p className="font-bold text-start text-xl lg:text-3xl text-slate-600 leading-2">
          Before and after
        </p>
        <p className="text-start w-full text-md md:text-lg font-normal  p-4 mt-4">
          Pogledajte slike before and after
        </p>
      </div>

      {/* TO DO: na sliku staviti link kao na slici od hero sekcije na galeriju slika prije/poslije */}
      <div className="mt-4 bg-slate-900 roundedn-md">
        <Image
          className="object-cover rounded-md opacity-50 w-full h-54 md:h-72 lg:h-80 xl:h-96 transition duration-300 ease-in-out transform group-hover:scale-105"
          src={HospitalImage}
          width={0}
          height={0}
          alt="hospital"
        />
      </div>
      <div>
        <Testimonials />
      </div>
    </section>
  );
}

const FounderCard = () => {
  return (
    <div className="relative group rounded overflow-hidden cursor-pointer">
      <Image
        className="object-cover w-full h-54 md:h-72 lg:h-80 xl:h-96 transition duration-300 ease-in-out transform"
        src={TestImage}
        alt="Card Background"
        width={0}
        height={0}
      />
    </div>
  );
};
