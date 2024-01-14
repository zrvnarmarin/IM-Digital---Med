import React from "react";
import Link from "next/link";

export default function LastSectionServiceTwo() {
  return (
      <section className="w-full flex flex-col gap-4 mt-4 mb-12 py-4 px-7 md:px-16 lg:px-20 bg-slate-100 border border-slate-200">
        <div className="flex flex-col gap-2 pt-8">
          <p className="text-center text-md md:text-lg lg:text-xl text-black font-semibold">
            Your health is our main priority
          </p>
          <p className="text-center w-full text-xs md:text-sm font-normal">
            Ovo je neka deskripcija koja ima neko znacenje
          </p>
          <p className="text-center w-full text-xs md:text-sm font-normal">
            Ovo je neka deskripcija
          </p>
        </div>
        <div className="flex justify-center py-4">
          <Link
            href={`/contact`}
            className="bg-slate-700/90 text-white px-6 py-3 rounded border-slate-500 border"
          >
            Contact Us
          </Link>
        </div>
      </section>
  );
}