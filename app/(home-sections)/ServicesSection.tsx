import React from "react";
import Image from "next/image";
import CloverImage from "../../public/CloverImage.png";
import "../../public/DoctorCard.css";
import Link from "next/link";
import { medicalServices } from "@/app/data";
import { ServiceType } from "@/app/types";
import { RightIcon } from "@/public/Icons";
import SectionWrapper from "../components/wrappers/SectionWrapper";

export default function ServicesSection() {
  return (
    <SectionWrapper>
      <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2 border-b-2 border-[#babaff]">
        <h2 className="w-full leading-2 text-start text-2xl font-medium text-[#babaff]">
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
        <p className="w-full text-center text-xl font-semibold text-slate-600 pt-10">
          {service.serviceTitle}
        </p>
        <p className="text-start w-full text-md md:text-lg font-normal text-slate-600 pt-8">
          {service.shortDescription}
        </p>
        <div className="flex items-center pt-12 gap-2 justify-end">
          <p className="text-start text-md lg:text-lg font-normal text-slate-500 pt-2">Learn More</p>
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