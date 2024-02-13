import React from "react";
import Link from "next/link";
import { TestSVG } from "@/app/(home-sections)/WhyPeopleChooseUs";
import { RightIcon } from "@/public/Icons";
import { serviceCategories } from "@/app/data";
import { ServiceCategoryType } from "@/app/types";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";

export default function ServiceCardsSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 md:flex-row justify-between items-start md:items-center">
        <h1 className="text-center text-4xl font-bold text-slate-600">
          Choose our services
        </h1>
        <input
          type="text"
          id="email"
          placeholder="Pretražite kategorije usluga"
          className="rounded-md text-md md:text-lg border border-[#80d6f7] w-full md:w-fit text-base xl:text-lg font-light text-slate-500 px-6 py-3"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {serviceCategories.map((serviceCategory) => (
          <ServiceCategoryCard
            serviceCategory={serviceCategory}
            key={serviceCategory.id}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export function ServiceCategoryCard({
  serviceCategory,
}: {
  serviceCategory: ServiceCategoryType;
}) {
  return (
    <Link
      href={`/services/${serviceCategory.href}`}
      className="card rounded-md bg-[#02aeef]/5 p-4 hover:scale-105 duration-300 group flex items-center justify-between gap-4"
    >
      <div className="flex flex-row items-center gap-6">
        <div className="">
          <TestSVG iconFill="#ffffff" backgroundFill="#80d6f7" />
        </div>
        <p className="text-center text-slate-500 font-normal text-xl xl:text-2xl duration-300">
          {serviceCategory.name}
        </p>
      </div>

      <div className="hidden duration-300 group-hover:flex items-center gap-2 justify-end">
        <div>
          <RightIcon
            width="40"
            height="40"
            backgroundFillColor="#babaff10"
            iconFillColor="#64748b"
          />
        </div>
      </div>
    </Link>
  );
}
