import React from "react";
import Image from "next/image";
import Link from "next/link";
import SomeDoctorImage from "../../../../public/doctorSmallImage.webp";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";

export default function HeroSection({
  doctorName,
  doctorSpecialisation,
}: {
  doctorName: string;
  doctorSpecialisation: string;
}) {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 bg-[#babaff]/10">
      <div className="bg-[#babaff]/10 py-8 px-6 lg:bottom-4 left-0 right-0 w-full flex flex-col gap-2 text-white text-center">
        <Link
          href="our-team"
          className="text-start w-full text-slate-500 font-normal text-lg xl:text-xl uppercase py-4"
        >
          {`<<`} Our Team
        </Link>

        <h1 className="text-start w-full text-2xl xs:text-4xl font-medium text-slate-500">
          {doctorName}, dr.med.
        </h1>

        <h1 className="text-start w-full text-slate-500 font-normal text-lg xl:text-xl uppercase">
          {doctorSpecialisation}
        </h1>
      </div>

      <div className="bg-[#babaff]/10 p-4">
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
