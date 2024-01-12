import React from "react";
import Link from "next/link";
import Navbar from "@/app/(home-sections)/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import TeamOfDoctors from "../../../public/TeamOfDoctors.jpg";
import ElectricityIcon from "../../../public/ElectricityIcon.png";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#FFFFFF]">
      <Navbar />
      <HeroSection
        serviceTitle="Service Title Number One"
        shortServiceDescription="This is service one description"
      />

      <section className="flex gap-2 h-full flex-col py-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
        <p className="text-start text-md md:text-lg lg:text-xl text-black font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
          vitae!
        </p>
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-12">
          <Image
            width={0}
            height={0}
            src={TeamOfDoctors}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
          <Image
            width={0}
            height={0}
            src={TeamOfDoctors}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
        </div>
        <p className="text-start text-md md:text-lg lg:text-xl text-black font-semibold">
          Lorem ipsum, dolor sit amet consectetur
        </p>
      </section>

      <section className="flex gap-2 h-full flex-col md:flex-col pb-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
        <p className="text-start text-md md:text-lg lg:text-xl text-black font-semibold">
          Service short description
        </p>
        <p className="text-start w-full text-sm md:text-md font-normal bg-slate-100 p-4 border border-slate-200 rounded-md mt-4">
          Parodontoza je podmukla bolest desni koju je na početku lako
          ignorirati jer ne uzrokuje bol, ali zato vrlo brzo zbog izostanka
          odgovarajućeg parodontološkog tretmana preraste u Vaš problem br.1 jer
          dolazi do nezaustavljivog gubitka tkiva koje podržava zube.
        </p>
        <p className="text-sm md:text-md font-normal pt-1">
          Pravom ste mjestu: naš specijalist parodontologije detaljno će
          pregledati Vaše zubno meso te u skladu s time dati preporuku za
          odgovarajući tretman.
        </p>
      </section>

      <section className="flex gap-2 w-full flex-col md:flex-col pb-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
        <div className="flex flex-col sm:flex-row gap-12">
          <div className="flex-col gap-12">
            <div className="flex flex-col gap-4">
              <p className="text-start w-full text-sm md:text-md font-normal">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                cum!
              </p>
              <Image
                width={0}
                height={0}
                src={TeamOfDoctors}
                alt="Hero Image"
                className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
              />
            </div>
          </div>
          <div className="flex-col">
            <div className="flex flex-col gap-4">
              <p className="text-start w-full text-sm md:text-md font-normal">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                cum!
              </p>
              <Image
                width={0}
                height={0}
                src={TeamOfDoctors}
                alt="Hero Image"
                className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex gap-2 w-full flex-col md:flex-col pb-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
        <Link
          href="/contact"
          className="w-fit h-fit bg-slate-700/90 text-white px-6 py-3 rounded border-slate-500 border"
        >
          Contact Us
        </Link>
        <p className="text-start text-md md:text-lg lg:text-xl text-black font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
          vitae!
        </p>
        <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((listItem) => (
            <li key={listItem} className="flex gap-4 items-center text-sm">
              <div className="h-full flex items-center"></div>
              <div className="flex flex-col gap-2 py-4 px-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={ElectricityIcon}
                    alt="icon"
                    width={15}
                    height={15}
                  />
                </div>
                <p className="text-start w-full text-xs md:text-sm font-normal">
                  Ovo je neka deskripcija koja ima neko znacenje
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  );
}

function HeroSection({
  serviceTitle,
  shortServiceDescription,
}: {
  serviceTitle: string;
  shortServiceDescription: string;
}) {
  return (
    <section className="flex flex-col items-center justify-center pb-4">
      <section className="flex">
        <div className="min-h-screen w-full">
          {/* Hero Section */}
          <div className="relative h-screen md:h-auto bg-black">
            <Image
              width={0}
              height={0}
              src={TeamOfDoctors}
              alt="Hero Image"
              className="object-cover w-full h-full md:h-auto opacity-60 bg-black"
            />
            {/* Hero Content (Add your text and buttons here) */}
            <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-center pt-64">
              <p className="text-xs italic pb-4 px-4 text-start w-full">
                {shortServiceDescription}
              </p>
              <div className="bg-slate-700/90 text-3xl text-start font-bold mb-4 px-4 w-full py-3 border-slate-500 border">
                <h1>{serviceTitle}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
