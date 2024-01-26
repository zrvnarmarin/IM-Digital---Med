import React from "react";
import Image from "next/image";
import CloverImage from "../../public/CloverImage.png";
import "../../public/DoctorCard.css";
import Link from "next/link";
import { medicalServices } from "@/app/data";
import { ServiceType } from "@/app/types";
import { RightIcon, ShieldIcon } from "@/public/Icons";
import SectionWrapper from "../components/wrappers/SectionWrapper";

export default function ServicesSection() {
  return (
    <SectionWrapper>
      <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2">
        <h2 className="w-full leading-2 text-start text-2xl lg:text-4xl font-bold text-slate-600">
          Choose our services
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-6">
        {medicalServices.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </div>
      <div className="flex justify-center pt-8 px-6">
        <Link
          href="/services"
          className="bg-[#babaff]/50 text-white font-semibold px-6 py-3 uppercase"
        >
          See all Services
        </Link>
      </div>
    </SectionWrapper>
  );
}

export function ServiceCard({ service }: { service: ServiceType }) {
  return (
    <Link
      href={`/services/${service.href}`}
      className="card bg-[#babaff]/10 p-4 md:p-6 lg:p-8 hover:scale-105 duration-300 group"
    >
      <div className="layer"></div>
      <div className="content">
        <div className="w-full flex items-center justify-center">
          <ShieldIcon />
        </div>
        <p className="text-center text-md font-semibold lg:font-semibold text-slate-600 group-hover:text-white duration-300 pt-6">
          {service.serviceTitle}
        </p>
        <p className="text-start w-full text-sm md:text-md 2xl:text-lg font-medium text-slate-500 pt-8">
          {service.shortDescription}
        </p>
        <div className="flex items-center pt-8 gap-2 justify-end">
          <p className="text-start w-fit text-sm md:text-md 2xl:text-lg font-medium text-slate-500">
            Learn More
          </p>
          <div>
            <RightIcon
              width="30"
              height="30"
              backgroundFillColor="#babaff10"
              iconFillColor="#64748b"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
