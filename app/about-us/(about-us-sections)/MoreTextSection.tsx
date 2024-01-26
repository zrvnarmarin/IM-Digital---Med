import React from "react";
import Image from "next/image";
import TestImage from "../../../public/doctorOperating.jpg";
import HospitalImage from "../../../public/HospitalImage.jpg";
import Testimonials from "@/app/components/Testimonials";
import Link from "next/link";

export default function MoreTextSection() {
  return (
    <section className="flex flex-col gap-10 pt-10 sm:pt-12 md:pt-16 lg:pt-28 px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32 bg-white">
      <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2">
        <h2 className="w-full leading-2 text-start text-2xl lg:text-4xl font-bold text-slate-600">
          Lorem ipsum
        </h2>
      </div>

      <div>
        <p className="text-start w-full text-sm md:text-md 2xl:text-lg bg-[#babaff]/10 rounded font-medium text-slate-500 p-4">
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

      {/* TO DO: na sliku staviti link kao na slici od hero sekcije na galeriju slika prije/poslije */}
      <Link href="/before-after" className="block mt-4 relative group">
        <div className="overflow-hidden rounded-md aspect-w-2 aspect-h-1 hover:opacity-75 transition duration-300">
          <div className="flex gap-4">
            <Image
              className="flex-1 object-cover rounded-md"
              src={HospitalImage}
              width={0}
              height={0}
              alt="hospital1"
            />
            <Image
              className="flex-1 object-cover rounded-md"
              src={HospitalImage}
              width={0}
              height={0}
              alt="hospital2"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <p className="text-white text-xl font-bold">View Before/After</p>
        </div>
      </Link>

      <Testimonials />
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
