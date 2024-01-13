import React from "react";
import Link from "next/link";
import Image from "next/image";
import ElectricityIcon from "../../../../public/ElectricityIcon.png";

export default function ThirdSection() {
  return (
      <section className="flex gap-2 w-full flex-col md:flex-col pb-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="w-fit h-fit bg-slate-700/90 text-white px-6 py-3 rounded border-slate-500 border"
          >
            Contact Us
          </Link>
        </div>
        <p className="text-start text-md md:text-lg lg:text-xl text-black font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
          vitae!
        </p>
        <p className="text-start w-full text-sm md:text-md font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum!
        </p>
        <p className="text-start w-full text-sm md:text-md font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum!
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((listItem) => (
            <li key={listItem} className="flex gap-4 items-center text-sm">
              <div className="h-full flex items-center"></div>
              <div className="flex flex-col gap-2 py-4 px-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={ElectricityIcon}
                    alt="icon"
                    width={15}
                    height={15}
                  />
                </div>
                <p className="text-start w-full text-xs md:text-sm font-normal">
                  Ovo je neka deskripcija koja ima neko znacenje
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

  );
}