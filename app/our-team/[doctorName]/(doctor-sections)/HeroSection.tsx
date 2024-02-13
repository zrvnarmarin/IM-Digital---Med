import React from "react";
import Image from "next/image";
import Link from "next/link";
import SomeDoctorImage from "../../../../public/doctorSmallImage.webp";
import DoctorPageWrapper from "@/app/components/wrappers/DoctorPageWrapper";

export default function HeroSection({
  doctorName,
  doctorSpecialisation,
}: {
  doctorName: string;
  doctorSpecialisation: string;
}) {
  return (
      <DoctorPageWrapper>
        <div className="w-full flex flex-col gap-4 text-white text-center">
          <Link
            href="our-team"
            className="text-start w-full text-lg xl:text-xl leading-2 font-medium hover:text-slate-600 text-[#80d6f7] duration-100 pt-2 uppercase py-4"
          >
            {`<<`} Our Team
          </Link>
          <h1 className="text-start text-4xl font-bold text-slate-600">
            {doctorName}, dr.med.
          </h1>
          <h1 className="text-start text-lg xl:text-xl leading-2 font-medium text-slate-600 duration-100 uppercase pt-2">
            {doctorSpecialisation}
          </h1>
          <p className="text-start w-full text-base xl:text-lg font-light text-slate-500 pt-2">
            Hehe Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            maiores in odio vero quaerat itaque error Hehe Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            maiores in odio vero quaerat itaque error.
          </p>

          <div className="flex flex-row flex-wrap items-center gap-8 lg:gap-166 pt-8">
            <Link
              href="#education"
              className="text-lg xl:text-xl leading-2 font-medium hover:text-slate-500 text-[#80d6f7] duration-100"
            >
              Education
            </Link>
            <Link
              href="#achievements"
              className="text-lg xl:text-xl leading-2 font-medium hover:text-slate-500 text-[#80d6f7] duration-100"
            >
              Achievements
            </Link>Lin
            <Link
              href="/contact"
              className="bg-[#02aeef]/50 hover:bg-[#02aeef]/70 duration-100 shadow-lg text-white font-semibold rounded-md px-8 py-3"
            >
              Narucite se
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Image
            width={0}
            height={250}
            src={SomeDoctorImage}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
        </div>
      </DoctorPageWrapper>
  );
}