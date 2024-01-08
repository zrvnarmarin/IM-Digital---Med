import Image from "next/image";
import React from "react";
import Link from "next/link";
import "../../public/DoctorCard.css";
import CloverImage from "../../public/CloverImage.png";
import RightArrowImage from "../../public/RightIcon.png";
import { doctors } from "../data";
import { DoctorType } from "../types";
import { generateUrlFromFullName } from "../utils";

export default function MeetOurDoctors() {
  return (
    <section className="flex h-full flex-col lg:flex-col w-full pt-12 pb-16 px-7 bg-[#eff3fa]">
      <h2 className="font-bold text-start text-lg lg:text-3xl text-[#2a2f31] leading-10">
        Meet Our Doctor Specialists
      </h2>
      <p className="text-[#555f60] text-start text-sm pt-4">
        Clinical Research Training and Medical Education · Critical Care
        Medicine Additional NIH Doctors/Researchers
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
        {doctors.map((doctor) => (
          <DoctorCard doctor={doctor} key={doctor.name} />
        ))}
      </div>
      <div>
      <div className="flex justify-center pt-16">
        <Link href={`/our-team`} className="bg-slate-700/90 text-white px-6 py-3 rounded border-slate-500 border">Meet The Rest</Link>
      </div>
      </div>
    </section>
  );
}

export function DoctorCard({ doctor }: { doctor: DoctorType }) {
  const lowerCaseDoctorName = generateUrlFromFullName(doctor.name)

  return (
    <Link href={`/our-team/${lowerCaseDoctorName}`} className="card bg-slate-500/5 cursor-pointer">
      <div className="layer"></div>
      <div className="content">
        <div className="image">
          <img
            width="100%"
            src={`https://vignette.wikia.nocookie.net/supernatural-diaries/images/b/b2/Cara-delevingne-profile.jpg/revision/latest?cb=20140217060511`}
            alt={`j`}
          />
        </div>
        <p className="text-center text-md md:text-lg lg:text-xl font-semibold pt-2">
          {doctor.name}
        </p>
        <p className="text-center text-sm md:text-md lg:text-lg font-medium">
          {doctor.specialisation}
        </p>
        <div className="flex flex-row gap-2 items-center justify-center pt-4">
          <Image src={CloverImage} alt="clover" width={15} height={15} />
          <p className="text-xs ">&quot;Health is always worth fighting for.&quot;</p>
        </div>
        <div className="flex items-center pt-10 gap-2 justify-end">
          <p className="text-slate-700 text-end text-sm">Meet Dr. Olga</p>
          <Image src={RightArrowImage} alt="clover" width={15} height={15} />
        </div>
      </div>
    </Link>
  );
}