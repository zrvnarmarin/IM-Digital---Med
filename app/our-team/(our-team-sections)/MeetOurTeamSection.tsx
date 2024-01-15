import React from "react";
import Link from "next/link";
import Image from "next/image";
import CloverImage from "../../../public/CloverImage.png";
import { doctors } from "@/app/data";
import { DoctorType } from "@/app/types";
import { generateUrlFromFullName } from "@/app/utils";
import { RightIcon } from "@/public/Icons";
import "../../../public/DoctorCard.css";
import Testimonials from "@/app/components/Testimonials";
import TestImage from "../../../public/HospitalImage.jpg";

export default function MeetOurTeamSection() {
  return (
    <section className="flex gap-2 h-full flex-col md:flex-col py-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
      <h1 className="font-bold text-start text-lg lg:text-3xl text-[#2a2f31] leading-10">
        Meet Our Team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <p className="text-[#555f60] text-start text-sm pt-4">
          Your health is our top priority. Meet our dedicated team of medical
          professionals who will guide you on your journey to health and
          well-being. Explore the expertise and compassion embodied by our best
          doctors. At the heart of our mission is your well-being, and we
          prioritize your health above all.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
        {doctors.map((doctor) => (
          <DoctorCard doctor={doctor} key={doctor.name} />
        ))}
      </div>
      <Testimonials />
    </section>
  );
}

export function DoctorCard({ doctor }: { doctor: DoctorType }) {
  const lowerCaseDoctorName = generateUrlFromFullName(doctor.name);

  return (
    <Link
      href={`/our-team/${lowerCaseDoctorName}`}
      className="card bg-slate-500/5"
    >
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
        <div className="flex flex-row items-center justify-center pt-4">
          <div className="text-xs flex items-start">
            <span>
              <Image src={CloverImage} alt="clover" width={20} height={20} />
            </span>
            <p>&ldquo;Health is always worth fighting for.&ldquo;</p>
          </div>
        </div>
        <div className="flex items-center pt-10 gap-2 justify-end">
          <p className="text-slate-700 text-end text-sm">Meet Dr. Olga</p>
          <RightIcon />
        </div>
      </div>
    </Link>
  );
}
