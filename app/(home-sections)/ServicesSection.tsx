import React from "react";
import Image from "next/image";
import CloverImage from "../../public/CloverImage.png";
import "../../public/DoctorCard.css";
import Link from "next/link";
import { medicalServices } from "@/app/data";
import { ServiceType } from "@/app/types";
import { RightIcon } from "@/public/Icons";

export default function ServicesSection() {
  return (
    <section className="flex flex-col gap-8 pt-10 sm:pt-12 md:pt-16 lg:pt-28 px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32 bg-white">
      <h1 className="font-bold text-start text-lg lg:text-3xl text-[#2a2f31] leading-10">
        Choose our services
      </h1>
      <p className="text-[#555f60] text-start text-base md:text-base lg:text-lg leading-2">
        Our doctor make the health workj for you. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Incidunt aspernatur exercitationem dolorum
        maiores sint sequi ut, vero natus sapiente magnam!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
        {medicalServices.map((service) => (
          <DoctorCard service={service} key={service.id} />
        ))}
      </div>
      <div className="flex flex-col gap-2 items-center pt-12">
        <Link
          href="/contact"
          className="bg-slate-700/90 text-white px-6 py-3 rounded border-slate-500 border"
        >
          See All Services
        </Link>
      </div>
    </section>
  );
}

export function DoctorCard({ service }: { service: ServiceType }) {
  return (
    <Link
      href={`/services/${service.href}`}
      className="card bg-[#babaff]/10 p-4 md:p-6 lg:p-8 hover:scale-105 duration-300"
    >
      <div className="layer"></div>
      <div className="content">
        <div className="image">
          <Image
            layout="full"
            src={CloverImage}
            alt={`${service.serviceTitle} service`}
          />
        </div>
        <p className="leading-2 text-center text-lg md:text-xl font-semibold text-slate-600 duration-200 pt-6">
          {service.serviceTitle}
        </p>
        <p className="text-[#555f60] text-start text-sm pt-4">
          {service.shortDescription}
        </p>
        <div className="flex items-center pt-10 gap-2 justify-end">
          <p className="text-slate-700 text-end text-sm">Learn More</p>
          <RightIcon
            width="50"
            height="50"
            backgroundFillColor="#babaff"
            iconFillColor="#ffffff"
          />
        </div>
      </div>
    </Link>
  );
}