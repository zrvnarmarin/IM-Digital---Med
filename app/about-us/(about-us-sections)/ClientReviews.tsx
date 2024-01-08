import React from "react";
import Image from "next/image";
import TestImage from "../../../public/doctorOperating.jpg";
import HospitalImage from "../../../public/HospitalImage.jpg";

export default function ClientReviews() {
  return (
    <section className="w-full flex flex-col gap-6 pb-8 px-7 md:px-16 lg:px-20 bg-white pt-8">
      <div className="flex flex-col items-center gap-2 relative">
        <p className="text-9xl text-slate-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          06
        </p>
        <div className="relative z-10 text-start text-2xl md:text-3xl lg:text-4xl text-[#2a2f31] font-semibold uppercase leading-2">
          Client Reviews
        </div>
      </div>
    </section>
  );
}
