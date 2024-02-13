import React from "react";
import Image from "next/image";
import Link from "next/link";
import SomeDoctorImage from "../../../../public/doctorSmallImage.webp";

export default function HeroSection({
  doctorName,
  doctorSpecialisation,
}: {
  doctorName: string;
  doctorSpecialisation: string;
}) {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 bg-[#02aeef]/5">
      <div className="bg-[#02aeef]/5 py-8 px-6 lg:bottom-4 left-0 right-0 w-full flex flex-col gap-2 text-white text-center">
        <Link
          href="our-team"
          className="text-start w-full text-lg xl:text-xl leading-2 font-medium text-slate-500 hover:text-[#80d6f7] duration-100 pt-2 uppercase py-4"
        >
          {`<<`} Our Team
        </Link>

        <h1 className="text-start text-4xl font-bold text-slate-600">
          {doctorName}, dr.med.
        </h1>

        <h1 className="text-start w-full text-base xl:text-lg font-normal text-slate-500 uppercase">
          {doctorSpecialisation}
        </h1>
      </div>

      <div className="bg-[#02aeef]/5 p-4">
        <div className="flex flex-col gap-4">
          <Image
            width={0}
            height={250}
            src={SomeDoctorImage}
            alt="Hero Image"
            className="object-cover w-full h-32 md:h-auto opacity-60 bg-black rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
