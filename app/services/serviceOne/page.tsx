import React from "react";
import Link from "next/link";
import Navbar from "@/app/(home-sections)/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import TeamOfDoctors from "../../../public/TeamOfDoctors.jpg";
import ElectricityIcon from "../../../public/ElectricityIcon.png";
import { ListItemType } from "@/app/types";
import { listItems } from "@/app/data";
import ListTestImage from "../../../public/listSectionIMageTest.avif";
import { Accordion } from "@/app/components/Accordion";
import { homePageFAQ } from "@/app/data";
import FirstSection from "./(service-one-sections)/FirstSection";
import SecondSection from "./(service-one-sections)/SecondSection";
import ThirdSection from "./(service-one-sections)/ThirdSection";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#FFFFFF]">
      <Navbar />
      <HeroSection
        serviceTitle="Service Title Number One"
        shortServiceDescription="This is service one description"
      />
      <FirstSection />
      <SecondSection />
      <ThirdSection />

      <section className="flex gap-2 w-full flex-col md:flex-col pb-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="w-fit h-fit bg-slate-700/90 text-white px-6 py-3 rounded border-slate-500 border"
          >
            Contact Us
          </Link>
        </div>
        <p className="text-start text-md md:text-lg lg:text-xl text-black font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
          vitae!
        </p>
        <p className="text-start w-full text-sm md:text-md font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum!
        </p>
        <p className="text-start w-full text-sm md:text-md font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum!
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
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

      <section className="flex flex-col gap-8 pb-16 px-7 md:px-16 lg:px-20 bg-white">
        <h1 className="text-start text-md md:text-lg lg:text-xl text-black font-semibold">
          Lorem Ipsum Dolor Sit Garum
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ul className="flex flex-col gap-4">
            {listItems.map((listItem) => (
              <ListItem key={listItem.id} listItem={listItem} />
            ))}
          </ul>
          <div className="hidden lg:flex items-center justify-center">
            <Image src={ListTestImage} alt="test" width={0} height={0} />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8 pb-16 px-7 md:px-16 lg:px-20 bg-white">
        <h1 className="text-start text-md md:text-lg lg:text-xl text-black font-semibold">
          Lorem Ipsum Dolor Sit Garum
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="hidden lg:flex items-center justify-center">
            <Image src={ListTestImage} alt="test" width={0} height={0} />
          </div>
          <ul className="flex flex-col gap-4">
            {listItems.map((listItem) => (
              <ListItem key={listItem.id} listItem={listItem} />
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full flex flex-col gap-4 mt-4 mb-12 py-4 px-7 md:px-16 lg:px-20 bg-slate-100 border border-slate-200">
        <p className="text-center w-full text-sm md:text-md font-normal px-16 md:px-32 lg:px-64">
          <span className="font-bold">Your health is</span> our main priority
          Lorem ipsum <span className="font-bold">dolor</span> sit amet
          consectetur adipisicing elit. Illum, quidem. Lorem ipsum,{" "}
          <span className="font-bold">
            dolor sit amet consectetur adipisicing
          </span>{" "}
          elit. Facere ex consectetur esse dolor sint architecto.
        </p>
      </section>

      <section className="flex gap-2 w-full flex-col md:flex-col pb-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((listItem) => (
            <li key={listItem} className="flex gap-4 items-center text-sm border-[1px] border-slate-200 rounded-md p-2">
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

      <section className="flex gap-2 w-full flex-col md:flex-col pb-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
        <p className="text-start text-md md:text-lg lg:text-xl text-black font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
          vitae
        </p>
        <p className="text-start w-full text-sm md:text-md font-normal">
          Lorem, ipsum dolor{" "}
          <span className="font-bold">sit amet consectetur</span> adipisicing
          elit. Fuga, cum! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Fuga, cum!
        </p>
        <p className="text-start w-full text-sm md:text-md font-normal">
          Lorem, ipsum dolor sit amet consectetur{" "}
          <span className="font-bold">adipisicing elit</span>. Fuga, cum! Lorem,
          ipsum dolor sit amet consectetur Fuga, cum! Lorem, ipsum dolor{" "}
          <span className="font-bold">
            sit amet consectetur adipisicing elim
          </span>
          . Fuga, cum!
        </p>
      </section>

      <section className="flex gap-2 h-full flex-col py-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <Image
            width={200}
            height={200}
            src={TeamOfDoctors}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
          <Image
            width={200}
            height={200}
            src={TeamOfDoctors}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
          <Image
            width={200}
            height={200}
            src={TeamOfDoctors}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
          <Image
            width={200}
            height={200}
            src={TeamOfDoctors}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
          <Image
            width={200}
            height={200}
            src={TeamOfDoctors}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
          <Image
            width={200}
            height={200}
            src={TeamOfDoctors}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
        </div>
      </section>

      <div className="flex justify-center py-4">
        <Link
          href={`/contact`}
          className="bg-slate-700/90 text-white px-6 py-3 rounded border-slate-500 border"
        >
          Contact Us
        </Link>
      </div>

      <section className="flex gap-2 h-full flex-col md:flex-col pb-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
        <p className="text-start w-full text-sm md:text-md font-normal bg-slate-100 p-4 border border-slate-200 rounded-md mt-4">
          Parodontoza je podmukla bolest desni koju je na početku lako
          ignorirati jer ne uzrokuje bol, ali zato vrlo brzo zbog izostanka
          odgovarajućeg parodontološkog tretmana preraste u Vaš problem br.1 jer
          dolazi do nezaustavljivog gubitka tkiva koje podržava zube.
          <br />
          <br />
          Parodontoza je podmukla bolest desni koju je na početku lako
          ignorirati jer ne uzrokuje bol, ali zato vrlo brzo zbog izostanka
          odgovarajućeg parodontološkog tretmana preraste u Vaš problem br.1 jer
          dolazi do nezaustavljivog gubitka tkiva koje podržava zube.
        </p>
      </section>

      <section className="w-full flex flex-col gap-4 mt-4 mb-12 py-4 px-7 md:px-12 lg:px-16">
        <Accordion faq={homePageFAQ} />
      </section>

      <section className="w-full flex flex-col gap-4 mt-4 mb-12 py-4 px-7 md:px-16 lg:px-20 bg-slate-100 border border-slate-200">
        <div className="flex flex-col gap-2 pt-8">
          <p className="text-center text-md md:text-lg lg:text-xl text-black font-semibold">
            Your health is our main priority
          </p>
          <p className="text-center w-full text-xs md:text-sm font-normal">
            Ovo je neka deskripcija koja ima neko znacenje
          </p>
          <p className="text-center w-full text-xs md:text-sm font-normal">
            Ovo je neka deskripcija
          </p>
        </div>
        <div className="flex justify-center py-4">
          <Link
            href={`/contact`}
            className="bg-slate-700/90 text-white px-6 py-3 rounded border-slate-500 border"
          >
            Contact Us
          </Link>
        </div>
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

const ListItem = ({ listItem }: { listItem: ListItemType }) => {
  return (
    <li className="flex gap-4 items-center text-sm">
      <div className="h-full flex items-center border-[1px] border-slate-200"></div>
      <div className="flex flex-col gap-2 py-4">
        <div className="flex items-center gap-2">
          <div className="bg-slate-100 rounded-full p-2 border border-slate-300 ">
            <Image src={ElectricityIcon} alt="icon" width={15} height={15} />
          </div>
          <p className="text-md md:text-lg lg:text-lg font-medium">
            {listItem.title}
          </p>
        </div>
        <p className="text-start w-full text-sm md:text-md font-normal">
          {listItem.description}
        </p>
      </div>
    </li>
  );
};
