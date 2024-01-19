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
      <h1 className="font-bold text-start text-xl lg:text-3xl text-slate-600 leading-2">
        Choose our services
      </h1>
      <p className="text-start w-full text-md md:text-lg font-normal text-slate-600">
        Our doctor make the <span className="font-bold">health workj for you</span>. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Incidunt aspernatur exercitationem dolorum
        maiores sint sequi ut, vero natus sapiente magnam!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-12">
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
    </section>
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
        <p className="leading-2 text-center text-lg md:text-xl font-semibold text-slate-600 duration-200 pt-6">
          {service.serviceTitle}
        </p>
        <p className="text-center w-full text-md md:text-lg font-normal text-slate-600 pt-6">
          {service.shortDescription}
        </p>
        <div className="flex items-center pt-12 gap-2 justify-end">
          <p className="text-md md:text-lg font-normal text-slate-600">Learn More</p>
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