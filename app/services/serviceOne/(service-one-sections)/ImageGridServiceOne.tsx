import React from "react";
import Link from "next/link";
import Image from "next/image";
import TeamOfDoctors from "../../../../public/TeamOfDoctors.jpg";

export default function ImageGridServiceOne() {
  return (
      <section className="flex gap-2 h-full flex-col py-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <Image
            width={200}
            height={200}
            src={TeamOfDoctors}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
          <Image
            width={200}
            height={200}
            src={TeamOfDoctors}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
          <Image
            width={200}
            height={200}
            src={TeamOfDoctors}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
          <Image
            width={200}
            height={200}
            src={TeamOfDoctors}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
          <Image
            width={200}
            height={200}
            src={TeamOfDoctors}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
          <Image
            width={200}
            height={200}
            src={TeamOfDoctors}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
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