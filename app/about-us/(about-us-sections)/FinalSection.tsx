import React from "react";
import Link from "next/link";

export default function FinalSection() {
  return (
    <section className="w-full flex flex-col gap-4 mt-12 mb-12 py-4 px-7 md:px-16 lg:px-20 bg-[#babaff]/10 border border-slate-200">
      <div className="flex flex-col gap-2 pt-8">
        <p className="text-center text-md md:text-lg lg:text-xl text-black font-semibold">
          Your health is our main priority
        </p>
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl text-[#000000] font-semibold leading-2">
          Place your trust in our experts
        </h2>
      </div>
      <div className="flex justify-center text-center pt-8 px-6">
        <Link
          href="/contact-us"
          className="bg-[#babaff]/50 text-white font-semibold px-6 py-3 uppercase"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
