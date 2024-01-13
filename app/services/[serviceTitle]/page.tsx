import React from "react";
import Image from "next/image";
import Navbar from "@/app/(home-sections)/Navbar";
import Footer from "@/app/components/Footer";
import { medicalServices, homePageFAQ } from "@/app/data";
import { Accordion } from "@/app/components/Accordion";
import HeroSection from "./(service-sections)/HeroSection";
import IntroductorySection from "./(service-sections)/IntroductorySection";
import MoreToKnowSection from "./(service-sections)/MoreToKnowSection";
import MoreAboutServiceSection from "./(service-sections)/MoreAboutServiceSection";
import FinalSection from "@/app/about-us/(about-us-sections)/FinalSection";
import Link from "next/link";
import ElectricityIcon from "../../../public/ElectricityIcon.png";
import TeamOfDoctors from "../../../public/TeamOfDoctors.jpg";

export default function Page({ params }: { params: { serviceTitle: string } }) {
  const service = medicalServices.find(
    (service) => service.href === params.serviceTitle
  );

  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-white">
      <Navbar />
      {service ? (
        <main className="h-full bg-white">
          <HeroSection
            serviceTitle={service.serviceTitle}
            shortServiceDescription={service.shortDescription}
          />
          <IntroductorySection
            serviceShortDescription={service.shortDescription}
          />
          <MoreAboutServiceSection />
          <MoreToKnowSection />
          <section className="grid grid-cols-12 gap-8 pb-12 px-6 md:px-8 lg:px-24 bg-slate-100">
            <div className="hidden sm:block col-span-4 rounded-md p-2 border-[1px] border-slate-400">
              <div className="flex flex-col gap-4">
                <Image
                  width={0}
                  height={0}
                  src={TeamOfDoctors}
                  alt="Hero Image"
                  className="object-cover w-full h-full md:h-auto opacity-60 bg-black"
                />
              </div>
            </div>

            <div className="col-span-full sm:col-span-8 rounded-md p-2 border-[1px] border-slate-400 ">
              <h2 className="text-start text-md md:text-lg lg:text-xl text-black font-semibold">
                Database is te best toolset in world
              </h2>
              <p className="text-sm md:text-md font-normal pt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                architecto, est voluptate error possimus reprehenderit!
              </p>
              <div className="flex justify-start pb-10 pt-8">
                <Link
                  href={`/contact`}
                  className="bg-slate-700/90 text-white px-6 py-3 rounded border-slate-500 border"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col">
                  <h2 className="text-start w-full text-sm md:text-md font-semibold text-cyan-500 pb-2">
                    <div className="w-fit p-2">
                      <Image
                        src={ElectricityIcon}
                        alt="icon"
                        width={25}
                        height={25}
                      />
                    </div>
                    Lorem ipsum dolor sit amet.
                  </h2>
                  <p className="text-sm md:text-md font-normal pt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Porro architecto, est voluptate error possimus
                    reprehenderit!
                  </p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-start w-full text-sm md:text-md font-semibold text-cyan-500 pb-2">
                    <div className="w-fit p-2">
                      <Image
                        src={ElectricityIcon}
                        alt="icon"
                        width={25}
                        height={25}
                      />
                    </div>
                    Lorem ipsum dolor sit amet.
                  </h2>
                  <p className="text-sm md:text-md font-normal pt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Porro architecto, est voluptate error possimus
                    reprehenderit!
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="px-6 md:px-8 lg:px-24 py-12">
            <Accordion faq={homePageFAQ} />
          </div>
          <section className="flex gap-2 h-full flex-col md:flex-col pb-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
            <p className="text-start text-md md:text-lg lg:text-xl text-black font-semibold">
              <span className="font-bold text-cyan-500"></span>Service short
              description Service short
            </p>
            <p className="text-start w-full text-sm md:text-md font-normal bg-slate-100 p-4 border border-slate-200 rounded-md mt-4">
              Parodontoza je podmukla bolest desni koju je na početku lako
              ignorirati jer ne uzrokuje bol, ali zato vrlo brzo zbog izostanka
              odgovarajućeg parodontološkog tretmana preraste u Vaš problem br.1
              jer dolazi do nezaustavljivog gubitka tkiva koje podržava zube.
            </p>
            <p className="text-sm md:text-md font-normal pt-1">
              Pravom ste mjestu: naš specijalist parodontologije detaljno će
              pregledati Vaše zubno meso te u skladu s time dati preporuku za
              odgovarajući tretman. Uz redovite kontrole i našu specijalističku
              obradu parodontološke situacije.
            </p>
          </section>
          <FinalSection />
        </main>
      ) : (
        <p>Service not found</p>
      )}
      <Footer />
    </main>
  );
}
