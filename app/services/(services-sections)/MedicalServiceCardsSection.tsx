import React from "react";
import Link from "next/link";
import { TestSVG } from "@/app/(home-sections)/WhyPeopleChooseUs";
import { ArrowUp, MagnifierIcon, RightIcon } from "@/public/Icons";
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
        <div className="flex flex-row">
          <div className="bg-[#02aeef]/50 shadow-lg duration-100 text-white font-semibold px-8 py-3 rounded-l-md">
            <MagnifierIcon width="30px" height="30px" />
          </div>
          <input
            type="text"
            id="email"
            placeholder="Pretražite usluge"
            className="text-md md:text-lg border border-[#80d6f7] rounded-r-md w-full md:w-fit text-base xl:text-lg font-light text-slate-500 px-6 py-3"
          />
        </div>
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
      className="card rounded-md bg-[#02aeef]/5 shadow-md p-4 hover:scale-105 duration-300 group flex items-center justify-between gap-4"
    >
      <div className="flex flex-row items-center gap-6">
        <div className="">
          <TestSVG iconFill="#ffffff" backgroundFill="#80d6f7" />
        </div>
        <p className="text-center text-slate-500 group-hover:text-[#80d6f7] font-normal text-xl xl:text-2xl duration-300">
          {serviceCategory.name}
        </p>
      </div>

      <div className="hidden duration-300 group-hover:flex items-center gap-2 justify-end">
        <div className="rotate-90">
          <ArrowUp />
        </div>
      </div>
    </Link>
  );
}
