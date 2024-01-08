import React from "react";
import Image from "next/image";
import CloverImage from "../../../public/CloverImage.png";
import RightArrowImage from "../../../public/RightIcon.png";
import "../../../public/DoctorCard.css";
import Link from "next/link";
import { medicalServices } from "@/app/data";
import { ServiceType } from "@/app/types";

export default function MeetOurTeamSection() {
  return (
    <section className="flex gap-2 h-full flex-col md:flex-col py-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
      <h1 className="font-bold text-start text-lg lg:text-3xl text-[#2a2f31] leading-10">
        Choose our services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <p className="text-[#555f60] text-start text-sm pt-4">
          Our doctor make the health workj for you. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Incidunt aspernatur exercitationem dolorum maiores sint sequi ut, vero natus sapiente magnam!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
        {medicalServices.map((service) => (
          <DoctorCard service={service} key={service.id} />
        ))}
      </div>
    </section>
  );
}

export function DoctorCard({ service }: { service: ServiceType }) {

  return (
    <Link href={`/services/${service.href}`} className="card bg-slate-500/5">
      <div className="layer"></div>
      <div className="content">
        <div className="image">
          <Image
            layout="full"
            src={CloverImage}
            alt={`${service.serviceTitle} service`}
          />
        </div>
        <p className="text-center text-md md:text-lg lg:text-xl text-black font-semibold pt-2">
          {service.serviceTitle}
        </p>
        <p className="text-[#555f60] text-start text-sm pt-4">
          {service.shortDescription}
        </p>
        <div className="flex items-center pt-10 gap-2 justify-end">
          <p className="text-slate-700 text-end text-sm">Learn More</p>
          <Image src={RightArrowImage} alt="clover" width={15} height={15} />
        </div>
      </div>
    </Link>
  );
}
