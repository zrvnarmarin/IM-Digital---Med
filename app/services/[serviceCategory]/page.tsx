import React from "react";
import Image from "next/image";
import { serviceCategories } from "@/app/data";
import Footer from "@/app/components/Footer";
import HeroImage from "../../../public/doctor_hero_section.avif";
import Link from "next/link";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import ServiceCategoryWrapper from "@/app/components/wrappers/ServiceCategoryWrapper";
import { TestSVG } from "@/app/(home-sections)/WhyPeopleChooseUs";
import { RightIcon } from "@/public/Icons";
import { generateUrlFromFullName } from "@/app/utils";

export default function Page({
  params,
}: {
  params: { serviceCategory: string };
}) {
  const serviceCategory = serviceCategories.find(
    (serviceCategory) => serviceCategory.href === params.serviceCategory
  );

  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      {serviceCategory ? (
        <main className="flex min-h-screen flex-col items-center bg-[#FFFFFF]">
          <HeroSection
            serviceCategory={serviceCategory.href}
            serviceCategoryName={serviceCategory.name}
            serviceCategoryDescription={serviceCategory.description}
          />
          <Services
            serviceCategory={serviceCategory.href}
            serviceCategoryName={serviceCategory.name}
          />
        </main>
      ) : (
        <p>Service Category Not Found</p>
      )}
      <Footer />
    </main>
  );
}

export function HeroSection({
  serviceCategory,
  serviceCategoryName,
  serviceCategoryDescription,
}: {
  serviceCategory: string;
  serviceCategoryName: string;
  serviceCategoryDescription: string;
}) {
  return (
    <section className="w-full  bg-[#02aeef]/5">
      <ServiceCategoryWrapper>
        <div className="flex flex-col gap-4">
          <Link
            href={`/services`}
            className="text-start w-full text-lg xl:text-xl leading-2 font-medium hover:text-slate-500 text-[#80d6f7] duration-100 pt-2 uppercase py-4"
          >
            {`<<`} Services
          </Link>
          <h1 className="text-start text-4xl font-bold text-slate-600">
            {serviceCategoryName}
          </h1>
          <h1 className="text-start w-full text-base xl:text-lg font-light text-slate-500 pt-2">
            {serviceCategoryDescription} hehe Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Sint maiores in odio vero quaerat
            itaque error, facere ipsam officiis, repellat sunt incidunt vitae
            vel? Ex consequatur nihil rerum qui laboriosam. Tenetur pariatur
            expedita mollitia enim tempore distinctio impedit recusandae
            reprehenderit sapiente voluptates iusto
          </h1>

          <div className="flex flex-row items-center gap-12 pt-8">
            <Link
              href="#services"
              className="text-lg xl:text-xl leading-2 font-medium hover:text-slate-500 text-[#80d6f7] duration-100"
            >
              Services
            </Link>
            <button className="bg-[#02aeef]/50 hover:bg-[#02aeef]/70 duration-100 text-white font-semibold rounded-md px-8 py-3">
              Narucite se
            </button>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-center gap-4 ">
          <Image
            width={0}
            height={250}
            src={HeroImage}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
        </div>
      </ServiceCategoryWrapper>
    </section>
  );
}

export const Services = ({
  serviceCategory,
  serviceCategoryName,
}: {
  serviceCategory: string;
  serviceCategoryName: string;
}) => {
  const servicesNames = serviceCategories
    .filter((serviceCategory) => serviceCategory.name === serviceCategoryName)
    .map((filteredServiceCategory) => filteredServiceCategory.services)
    .flat();

  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 md:flex-row justify-between items-start md:items-center">
        <h2 className="text-4xl font-bold text-slate-600">Services</h2>
        <input
          type="text"
          id="email"
          placeholder="Pretražite usluge"
          className="rounded-md text-md md:text-lg border-2 border-[#80d6f7] w-full md:w-fit text-base xl:text-lg font-light text-slate-500 px-6 py-3"
        />
      </div>
      {servicesNames.map((serviceName) => (
        <ServiceNameCard
          key={serviceName}
          serviceCategoryHref={serviceCategory}
          serviceName={serviceName}
        />
      ))}
    </SectionWrapper>
  );
};

export const ServiceNameCard = ({
  serviceCategoryHref,
  serviceName,
}: {
  serviceCategoryHref: string;
  serviceName: string;
}) => {
  const serviceHref = generateUrlFromFullName(serviceName);

  return (
    <Link
      href={`/services/${serviceCategoryHref}/${serviceHref}`}
      className="card rounded-md bg-[#02aeef]/5 py-3 px-5 duration-300 group flex items-center justify-between gap-4"
    >
      <div className="flex flex-row items-center gap-6">
        <div className="">
          <TestSVG iconFill="#ffffff" backgroundFill="#80d6f7" />
        </div>
        <p className="text-center text-slate-500 font-normal text-xl xl:text-2xl duration-200 group-hover:text-[#80d6f7]">
          {serviceName}
        </p>
      </div>

      <div className=" duration-300 items-center gap-2 justify-end">
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
};
