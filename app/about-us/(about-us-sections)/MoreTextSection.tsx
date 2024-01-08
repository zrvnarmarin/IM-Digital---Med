import React from "react";
import Image from "next/image";
import TestImage from "../../../public/doctorOperating.jpg";
import HospitalImage from "../../../public/HospitalImage.jpg";

export default function MoreTextSection() {
  return (
    <section className="w-full flex flex-col gap-6 pb-8 px-7 md:px-16 lg:px-20 bg-white pt-8">
        <div className="flex flex-col items-center gap-2 relative">
        <p className="text-9xl text-slate-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          07
        </p>
        <div className="relative z-10 text-start text-2xl md:text-3xl lg:text-4xl text-[#2a2f31] font-semibold uppercase leading-2">
          Lorem Ipsum Dolor Sit
        </div>
      </div>
      <div>
        <h2 className="text-start text-md md:text-lg lg:text-xl text-black font-semibold pt-2">
          Lorem Ipsum Dolor Sit
        </h2>
        <p className="text-start w-full text-sm md:text-md font-normal bg-slate-100 p-4 border border-slate-200 rounded-md mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
          expedita eveniet doloribus quia dolorem hic nulla nihil, odio nisi
          fugiat ipsam aut, ducimus deserunt quisquam nostrum vitae sequi amet
          recusandae tempore! Atque minus quo eligendi?
        </p>
      </div>
      <div>
        <h2 className="text-start text-md md:text-lg lg:text-xl text-black font-semibold pt-2">
          Lorem Ipsum Dolor Sit
        </h2>
        <p className="text-start w-full text-sm md:text-md font-normal bg-slate-100 p-4 border border-slate-200 mt-4 rounded-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
          expedita eveniet doloribus quia dolorem hic nulla nihil, odio nisi
          fugiat ipsam aut, ducimus deserunt quisquam nostrum vitae sequi amet
          recusandae tempore! Atque minus quo eligendi? Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Unde expedita eveniet doloribus
          quia dolorem hic nulla nihil, odio nisi fugiat ipsam aut, ducimus
          deserunt quisquam nostrum vitae sequi amet recusandae tempore! Atque
          minus quo eligendi?
        </p>
      </div>
      <div className="flex flex-col gap-8 pt-4">
        <p className="text-center text-md md:text-lg lg:text-xl text-black font-semibold">
          Lorem Ipsum Dolor Sit
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
    </section>
  );
}
