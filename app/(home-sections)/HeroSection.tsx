import React from "react";
import Link from "next/link";
import Image from "next/image";
import TeamOfDoctors from "../../public/usman-yousaf-SakqLf78KVo-unsplash.jpg";
import { RightIcon } from "@/public/Icons";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      <div className="w-full h-full flex bg-red-400/10">
        {/* <div className="absolute inset-0 bg-black/10"></div> */}
        <Image
          src={TeamOfDoctors}
          alt="Hero Image"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between items-center text-white text-center">
        {/* Element at the very top */}
        <div className="w-full lg:w-1/2 flex flex-col text-center pt-60 px-4 gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-5xl sm:text-4xl text leading-10 font-medium italic uppercase md:text-3xl text-white">
              Sinergy
            </h1>
            <p className="text-center text-lg sm:text-4xl text leading-2 font-medium tracking-widest italic md:text-3xl text-white">
              Where expertise meets the results
            </p>
          </div>
          <div className="flex justify-center pt-8 p-6">
            <Link
              href="/contact"
              className="bg-[#babaff]/50 text-white font-semibold px-6 py-3 uppercase"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Element at the very bottom */}
        <div className="bg-[#babaff]/90 text-3xl text-center font-bold px-4 w-full py-3">
          <h1 className="text-center text-2xl xs:text-4xl font-bold text-white p-6 uppercase">
            Zdravlje je na drugom mjestu
          </h1>
          <div className="w-full flex justify-center rotate-90 duration-200 animate-bounce cursor-pointer">
            <Link href="#why-us-points-section">
              <RightIcon
                width="24px"
                height="24ox"
                backgroundFillColor="#ffffff"
                iconFillColor="#babaff"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
