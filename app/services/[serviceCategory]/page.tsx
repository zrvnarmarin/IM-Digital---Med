import React from "react";
import Image from "next/image";
import { serviceCategories } from "@/app/data";
import Navbar from "@/app/(home-sections)/Navbar";
import Footer from "@/app/components/Footer";
import HeroImage from "../../../public/DoctorSmiling.jpg";
import Link from "next/link";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";

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
      <Navbar />
      {serviceCategory ? (
        <main className="flex min-h-screen flex-col items-center bg-[#FFFFFF]">
          <HeroSection
            serviceCategory={serviceCategory.href}
            serviceCategoryName={serviceCategory.name}
            serviceCategoryDescription={serviceCategory.description}
          />
          <Services serviceCategoryName={serviceCategory.name} />
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
    <section className="w-full grid grid-cols-1 md:grid-cols-2 bg-[#babaff]/10">
      <div className="bg-[#babaff]/10 py-8 px-6 lg:bottom-4 left-0 right-0 w-full flex flex-col gap-2 text-white text-center">
        <Link
          href={`/services`}
          className="text-start w-full text-slate-500 font-normal text-lg xl:text-xl uppercase py-4"
        >
          {`<<`} Services
        </Link>

        <h1 className="text-start w-full text-2xl xs:text-4xl font-medium text-slate-500">
          {serviceCategoryName}
        </h1>

        <h1 className="text-start w-full text-slate-500 font-normal text-lg xl:text-xl">
          {serviceCategoryDescription} hehe Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Sint maiores in odio vero quaerat itaque
          error, facere ipsam officiis, repellat sunt incidunt vitae vel? Ex
          consequatur nihil rerum qui laboriosam. Tenetur pariatur expedita
          mollitia enim tempore distinctio impedit recusandae reprehenderit
          sapiente voluptates iusto
        </h1>
      </div>

      <div className="bg-[#babaff]/10 p-4">
        <div className="flex flex-col gap-4">
          <Image
            width={0}
            height={250}
            src={HeroImage}
            alt="Hero Image"
            className="object-cover w-full h-32 md:h-auto opacity-60 bg-black rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

export const Services = ({ serviceCategoryName } : { serviceCategoryName: string }) => {
  const services = serviceCategories
    .filter(serviceCategory => serviceCategory.name === serviceCategoryName)
    .map(filteredServiceCategory => filteredServiceCategory.services)
  
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 md:flex-row justify-between items-start md:items-center">
        <h2 className="text-start text-2xl xs:text-4xl font-medium text-slate-600 underline-offset-8 decoration-1 underline decoration-[#babaff]">
          Services {serviceCategoryName}
        </h2>
        <input
          type="text"
          id="email"
          placeholder="Pretražite usluge"
          className="rounded-md text-md md:text-lg border border-[#babaff] w-full md:w-fit text-base xl:text-lg font-light text-slate-500 px-6 py-3"
        />
        {JSON.stringify(services)}
        {/* {services.map(service =>

        )} */}
      </div>
    </SectionWrapper>
  );
};
