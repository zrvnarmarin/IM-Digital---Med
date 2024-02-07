import React from "react";
import Image from "next/image";
import "../../public/DoctorCard.css";
import Link from "next/link";
import { medicalServices } from "@/app/data";
import { ServiceType } from "@/app/types";
import { RightIcon, ShieldIcon } from "@/public/Icons";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import { TestSVG } from "./WhyPeopleChooseUs";

export default function ServicesSection() {
  return (
    <SectionWrapper>
      <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2">
        <h2 className="text-center text-4xl font-bold text-slate-600">
          Choose our services
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 pt-6">
        {medicalServices.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </div>
      <div className="flex justify-center pt-8 px-6">
        <Link
          href="/services"
          className="bg-[#02aeef]/50 hover:bg-[#02aeef]/70 duration-100 rounded-md shadow-2xl text-white font-medium px-6 py-3"
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
      className="card bg-[#02aeef]/5 p-4 md:p-6 lg:p-8 hover:scale-105 duration-300 group drop-shadow-2xl"
    >
      <div className="layer"></div>
      <div className="content">
        <div className="w-full flex items-center justify-center pt-4">
          <TestSVG iconFill="#ffffff" backgroundFill= "#80d6f7" />
        </div>
        <p className="text-slate-500 text-center font-medium px-6 py-3 text-lg xl:text-xl lg:pt-4 group-hover:text-white duration-300 pt-6">
          {service.serviceTitle}
        </p>
        <p className="text-center w-full text-base xl:text-lg font-light text-slate-500 group-hover:text-white duration-100 pt-4">
          {service.shortDescription}
        </p>
        <div className="flex items-center pt-8 gap-2 justify-end">
          <p className="text-start w-fit text-sm md:text-md 2xl:text-lg font-medium group-hover:text-white duration-100 text-slate-500">
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
