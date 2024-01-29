import React from "react";
import { medicalServices } from "@/app/data";
import { ServiceCard } from "@/app/(home-sections)/ServicesSection";
import "../../../public/DoctorCard.css";

export default function ServiceCardsSection() {
  return (
    <section className="flex flex-col gap-8 pt-10 sm:pt-12 md:pt-16 lg:pt-28 px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32 bg-white">
      <h1 className="text-start text-2xl xs:text-4xl font-medium text-slate-600 underline-offset-8 decoration-1 underline decoration-[#babaff]">
        Choose our services
      </h1>
      <p className="text-start w-full text-base xl:text-lg font-light text-slate-500 pt-2">
        Our doctor make the{" "}
        <span className="font-bold">health workj for you</span>. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Incidunt aspernatur
        exercitationem dolorum maiores sint sequi ut, vero natus sapiente
        magnam!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-12">
        {medicalServices.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </div>
    </section>
  );
}
