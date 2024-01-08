import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/(home-sections)/Navbar";
import Footer from "@/app/components/Footer";
import { medicalServices } from "@/app/data";
import HeroSection from "./(service-sections)/HeroSection";
import { Accordion } from "@/app/(home-sections)/FAQSection";
import TestImage from "../../../public/someDoctorImage.avif";

export default function Page({ params }: { params: { serviceTitle: string } }) {
  const service = medicalServices.find(
    (service) => service.href === params.serviceTitle
  );

  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-white">
      <Navbar />
      {service ? (
        <main className="h-full py-16 bg-white">
          <HeroSection
            serviceTitle={service.serviceTitle}
            shortServiceDescription={service.shortDescription}
          />
          <section className="flex gap-2 h-full flex-col md:flex-col py-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
            <p className="text-[#656666] text-md font-semibold lg:text-lg">
              {service.shortDescription}
            </p>
            <p>
              Parodontoza je podmukla bolest desni koju je na početku lako
              ignorirati jer ne uzrokuje bol, ali zato vrlo brzo zbog izostanka
              odgovarajućeg parodontološkog tretmana preraste u Vaš problem br.1
              jer dolazi do nezaustavljivog gubitka tkiva koje podržava zube. Na
            </p>
            <p>
              pravom ste mjestu: naš specijalist parodontologije detaljno će
              pregledati Vaše zubno meso te u skladu s time dati preporuku za
              odgovarajući tretman. Uz redovite kontrole i našu specijalističku
              obradu parodontološke situacije, usporit ćemo napredovanje
              parodontoze.
            </p>
            <h1 className="text-xl">Some Heading</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis, quibusdam Lorem lorem lorem lorem lorem.
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
              <li>list item 1</li>
              <li>list item 2</li>
              <li>list item 3</li>
              <li>list item 4</li>
              <li>list item 5</li>
            </ul>
            <p>
              Prilikom prvog pregleda naši stručnjaci će Vam detaljno objasniti
              koja metoda najbolje odgovara Vašoj situaciji i potrebama
            </p>
            <h2>Moglo bi Vas zanimati:</h2>
            <Accordion />
            <div className="bg-slate-200">
              <h2>Pogledajte naše transformacije zubnim krunicama:</h2>
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Image
                  src={TestImage}
                  width={300}
                  height={300}
                  alt={"Image service"}
                  className="cursor-pointer"
                />
                <Image
                  src={TestImage}
                  width={300}
                  height={300}
                  alt={"Image service"}
                  className="cursor-pointer"
                />
                <Image
                  src={TestImage}
                  width={300}
                  height={300}
                  alt={"Image service"}
                  className="cursor-pointer"
                />
                <Image
                  src={TestImage}
                  width={300}
                  height={300}
                  alt={"Image service"}
                  className="cursor-pointer"
                />
              </div>
              <p>5 razloga zašto je cirkon najbolji izbor za Vaše nove zube:</p>
              <ul>
                <li>list item 1</li>
                <li>list item 2</li>
                <li>list item 3</li>
                <li>list item 4</li>
                <li>list item 5</li>
              </ul>
              <p className="pt-8 pb-8">
                Cirkon je bezmetalni materijal od kojeg se izrađuju krunice.
                Metal može uzrokovati alergije i često nije estetski prihvatljiv
                dok je cirkon postao standard moderne stomatologije.
              </p>
            </div>
            <p className="pt-8">
              Cirkon je bezmetalni materijal od kojeg se izrađuju krunice. Metal
              može uzrokovati alergije i često nije estetski prihvatljiv dok je
              cirkon postao standard moderne stomatologije.
              Cirkon je bezmetalni materijal od kojeg se izrađuju krunice. Metal
              može uzrokovati alergije i često nije estetski prihvatljiv dok je
              cirkon postao standard moderne stomatologije.
            </p>
            <div className="flex justify-center pt-16">
              <Link
                href={`/contact`}
                className="bg-slate-700/90 text-white px-6 py-3 rounded border-slate-500 border"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </main>
      ) : (
        <p>Service not found</p>
      )}
      <Footer />
    </main>
  );
}
