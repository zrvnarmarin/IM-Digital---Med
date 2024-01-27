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
        <h2 className="text-center text-2xl xs:text-4xl font-medium text-slate-600 underline-offset-8 decoration-1 underline decoration-[#babaff]">
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
          <TestSVG />
        </div>
        <p className="w-full text-center text-slate-500 font-normal text-xl xl:text-2xl group-hover:text-white duration-300 pt-6">
          {service.serviceTitle}
        </p>
        <p className="text-center w-full text-base xl:text-lg font-light text-slate-500 group-hover:text-white duration-100 pt-8">
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
