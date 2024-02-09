import Image from "next/image";
import Link from "next/link";
import ElectricityIcon from "../../public/hospitalIcon.png";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import HeroImage from "../../public/HospitalImage.jpg";
import { RightIcon } from "@/public/Icons";
import { coreValues } from "../data";
import { DoctorType } from "@/app/types";
import { TestSVG } from "../(home-sections)/WhyPeopleChooseUs";
import {
  doctors,
  aboutUsThirdSectionArray,
  aboutUsFifthSectionArray,
} from "../data";
import { generateUrlFromFullName, getFirstName } from "../utils";
import DoctorImage from "../../public/DoctorSmiling.jpg";
import TestimonialsSection from "../(home-sections)/TestimonialsSection";
import Footer from "../components/Footer";
import TestImage from "../../public/someDoctorImage.avif";

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#FFFFFF]">
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <TestimonialsSection />
      <SeventhSection />
      <Footer />
    </main>
  );
}

export const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      <Image
        src={HeroImage}
        alt="Hero Image"
        className="object-cover w-full h-full"
      />

      <div className="absolute bottom-4 lg:bottom-4 left-0 right-0 w-full flex flex-col items-center justify-center text-white text-center">
        <p className="text-xs italic pb-4 px-4 text-start w-full">
          Meet our experts
        </p>
        <div className="bg-slate-700/90 text-3xl text-start font-bold mb-4 px-4 w-full py-3 border-slate-500 border-y-[1px]">
          <h1>About Us</h1>
        </div>
      </div>
    </section>
  );
};

export const SecondSection = () => {
  return (
    <SectionWrapper>
      <p className="text-start text-4xl font-bold text-slate-600">
        About us some heading
      </p>

      <p className="text-start w-full text-base xl:text-lg font-light text-slate-500">
        <span className="font-bold text-[#80d6f7]">
          Pravom ste mjestu: naš specijalist
        </span>{" "}
        parodontologije detaljno će pregledati Vaše zubno meso te u skladu s
        time dati preporuku za odgovarajući tretman. Pravom ste mjestu: naš
        specijalist parodontologije detaljno će pregledati{" "}
        <span className="font-bold text-[#80d6f7]">
          Vaše zubno meso te u skladu
        </span>{" "}
        s time dati preporuku za odgovarajući tretman. s time dati preporuku za
        odgovarajući tretman.s time dati preporuku za odgovarajući tretman.s
        time dati preporuku za odgovarajući tretman.s time dati preporuku za
        odgovarajući tretman.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {coreValues.map((coreValue) => (
          <li
            key={coreValue.id}
            className="flex gap-4 justify-center items-center text-sm border-[1px] border-slate-200 hover:bg-[#02aeef]/5 hover:text-white duration-300 rounded-md p-2"
          >
            <div className="h-full flex items-center"></div>
            <div className="flex flex-col gap-2 py-4 px-4">
              <div className="flex justify-center gap-2">
                <TestSVG iconFill="#ffffff" backgroundFill="#80d6f7" />
              </div>
              <p className="text-start w-full text-base xl:text-lg font-light text-slate-500 pt-2">
                {coreValue.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <p className="text-start w-full text-base xl:text-lg font-light text-slate-500 p-6 bg-[#02aeef]/5 border border-slate-200 rounded-md">
        <span className="text-[#80d6f7]">Paradontoza je podmukla bolest </span>{" "}
        desni koju je na početku lako ignorirati jer ne uzrokuje bol, ali zato
        vrlo brzo zbog izostanka odgovarajućeg parodontološkog tretmana preraste
        u Vaš problem br.1 jer dolazi do nezaustavljivog gubitka tkiva koje
        podržava zube. Parodontoza je podmukla bolest desni koju je na početku
        lako ignorirati jer ne uzrokuje bol,{" "}
        <span className="text-[#80d6f7]">
          ali zato vrlo brzo zbog izostanka
        </span>
        odgovarajućeg parodontološkog tretmana preraste u Vaš problem br.1 jer
        dolazi do nezaustavljivog gubitka tkiva koje podržava zube. Parodontoza
        je podmukla bolest desni koju je na početku lako ignorirati jer ne
        uzrokuje bol, ali zato vrlo brzo zbog izostanka odgovarajućeg
        parodontološkog tretmana preraste u Vaš problem br.1 jer dolazi do
        nezaustavljivog{" "}
        <span className="text-[#80d6f7]">gubitka tkiva koje podržava zube</span>
        .
      </p>
    </SectionWrapper>
  );
};

export const ThirdSection = () => {
  return (
    <SectionWrapper>
      <p className="text-start text-4xl font-bold text-slate-600">
        Something about clinic
      </p>

      <div className="flex flex-col gap-12 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="flex flex-col justify-center gap-4">
            <Image
              width={0}
              height={0}
              src={HeroImage}
              alt="Hero Image"
              className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-6 p-8 bg-[#02aeef]/5 rounded-md">
            <p className="w-full text-slate-500 text-start font-normal text-xl xl:text-2xl">
              Service short description{" "}
            </p>
            <ul className="w-full flex flex-col gap-4">
              {aboutUsThirdSectionArray.map((listItem) => (
                <li
                  key={listItem.id}
                  className="flex flex-col gap-42 items-start text-sm"
                >
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex items-center  gap-2 rounded-full border-slate-800 p-2">
                      <div className="bg-[#02aeef]/50 rounded-full p-2 ">
                        <Image
                          src={ElectricityIcon}
                          alt="icon"
                          width={15}
                          height={15}
                        />
                      </div>
                    </div>
                    <p className="text-start w-full text-base xl:text-lg font-light text-slate-500">
                      {listItem.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="flex flex-col gap-4 order-1 md:order-2">
            <Image
              width={0}
              height={0}
              src={HeroImage}
              alt="Hero Image"
              className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
            />
          </div>
          <div className="flex flex-col items-center justify-center order-1 gap-8 p-8 bg-[#02aeef]/5 rounded-md">
            <p className="w-full text-slate-500 text-start font-normal text-xl xl:text-2xl">
              Service short description{" "}
            </p>
            <p className="text-start w-full text-base xl:text-lg font-light text-slate-500">
              <span className="text-[#80d6f7]">
                Lorem ipsum, dolor sit amet consectetur
              </span>{" "}
              adipisicing elit. Cum itaque repellat veritatis explicabo odio
              iure necessitatibus quae ducimus pariatur delectus, mollitia
              perferendis impedit accusantium minima laboriosam deserunt earum
              asperiores? Commodi. Sunt impedit temporibus rem. Suscipit
              temporibus impedit molestias! Laboriosam alias enim vitae,
              excepturi reprehenderit deleniti animi neque{" "}
              <span className="text-[#80d6f7]">
                labore quod maiores aperiam velit voluptas
              </span>
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export const FourthSection = () => {
  return (
    <SectionWrapper>
      <p className="text-start text-4xl font-bold text-slate-600">
        Something about clinic
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-[#02aeef]/5 rounded-md order-2">
          <p className="w-full text-slate-500 text-start font-normal text-xl xl:text-2xl">
            Neki naslov
          </p>
          <p className="text-start w-full text-base xl:text-lg font-light text-slate-500 pt-2">
            <span className="text-[#80d6f7]">
              Paradontoza je podmukla bolest{" "}
            </span>{" "}
            desni koju je na početku lako ignorirati jer ne uzrokuje bol, ali
            preraste u Vaš problem br.1 jer dolazi do nezaustavljivog gubitka
            tkiva koje podržava zube. Parodontoza je podmukla bolest desni koju
            je na početku lako ignorirati jer ne uzrokuje bol,{" "}
            <span className="text-[#80d6f7]">
              ali zato vrlo brzo zbog izostanka
            </span>{" "}
            <br /> <br />
            odgovarajućeg parodontološkog tretmana preraste u Vaš problem br.1
            odgovarajućeg parodontološkog tretmana preraste u Vaš problem br.1
            jer dolazi do nezaustavljivog{" "}
            <span className="text-[#80d6f7]">
              gubitka tkiva koje podržava zube
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-4 order-1">
          <Image
            width={0}
            height={0}
            src={HeroImage}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export const FifthSection = () => {
  return (
    <SectionWrapper>
      <p className="text-start text-4xl font-bold text-slate-600">
        Fifth section
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {aboutUsFifthSectionArray.map((item) => (
          <div
            key={item.id}
            className={`group flex flex-col rounded-md items-center p-4 md:p-6 lg:p-8 border drop-shadow-2xl border-slate-200 hover:bg-[#02aeef]/5 hover:text-white duration-300`}
          >
            <div>
              <TestSVG iconFill="#ffffff" backgroundFill="#80d6f7" />
            </div>
            <h2 className="text-slate-500 text-center font-medium px-6 py-3 text-lg xl:text-xl pt-2 lg:pt-4">
              {item.title}
            </h2>
            <p className="text-center w-full text-base xl:text-lg font-light text-slate-500 pt-2 lg:pt-4">
              {item.text}
            </p>
          </div>
        ))}
      </ul>

      <div className="flex flex-row gap-6">
        <p className="text-start w-full text-base xl:text-lg font-light text-slate-500 p-6 bg-[#02aeef]/5 border border-slate-200 rounded-md">
          <span className="text-[#80d6f7]">
            Paradontoza je podmukla bolest{" "}
          </span>{" "}
          desni koju je na početku lako ignorirati jer ne uzrokuje bol, ali zato
          vrlo brzo zbog izostanka odgovarajućeg parodontološkog tretmana
          <span className="text-[#80d6f7]">
            ali zato vrlo brzo zbog izostanka
          </span>
        </p>

        <p className="text-start w-full text-base xl:text-lg font-light text-slate-500 p-6 bg-[#02aeef]/5 border border-slate-200 rounded-md">
          <span className="text-[#80d6f7]">
            Paradontoza je podmukla bolest{" "}
          </span>{" "}
          desni koju je na početku lako ignorirati jer ne uzrokuje bol, ali zato
          vrlo brzo zbog izostanka odgovarajućeg parodontološkog tretmana
          <span className="text-[#80d6f7]">
            ali zato vrlo brzo zbog izostanka
          </span>
        </p>
      </div>
      <div className="flex justify-center pt-8 px-6">
        <Link
          href="/aboutus"
          className="bg-[#02aeef]/50 hover:bg-[#02aeef]/70 duration-100 rounded-md shadow-2xl text-white font-medium px-6 py-3"
        >
          Link to somewhere
        </Link>
      </div>
    </SectionWrapper>
  );
};

export const SixthSection = () => {
  return (
    <SectionWrapper>
      <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2">
        <h2 className="text-start text-4xl font-bold text-slate-600">
          Meet Our Team
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
      <div className="flex justify-center pt-8 px-6">
        <Link
          href="/our-team"
          className="bg-[#02aeef]/50 hover:bg-[#02aeef]/70 duration-100 rounded-md shadow-2xl text-white font-medium px-6 py-3"
        >
          Meet The Rest
        </Link>
      </div>
    </SectionWrapper>
  );
};

const DoctorCard = ({ doctor }: { doctor: DoctorType }) => {
  const lowerCaseDoctorName = generateUrlFromFullName(doctor.name);

  return (
    <Link href={`/our-team/${lowerCaseDoctorName}`}>
      <div className="relative group rounded overflow-hidden cursor-pointer shadow-md">
        {/* Background Image */}
        <div className="group-hover:opacity-75 transition duration-300 ease-in-out">
          <Image
            className="object-cover w-full h-54 md:h-72 lg:h-80 xl:h-96 transform group-hover:scale-105 duration-300"
            src={TestImage}
            alt="Card Background"
            width={0}
            height={0}
          />
        </div>
        {/* Text Container */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transition duration-300 ease-in-out bg-[#80d6f7] text-white opacity-0 group-hover:opacity-100">
          <div className="flex items-center gap-2 justify-end">
            <p className="text-white text-center font-medium text-lg xl:text-xl ">
              Meet Dr. {getFirstName(doctor.name)}
            </p>
            <div>
              <RightIcon width="30" height="30" iconFillColor="#ffffff" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-slate-500 text-start font-medium text-lg xl:text-xl w-full group-hover:text-white duration-100 pt-4">
        Dr. {doctor.name}
      </p>
      <p className="text-start w-full text-base xl:text-lg font-light text-slate-500 group-hover:text-white duration-100 pt-2">
        {doctor.specialisation}
      </p>
    </Link>
  );
};

const SeventhSection = () => {
  return (
    <section className="w-full flex flex-col gap-4 mt-12 mb-12 py-4 px-7 md:px-16 lg:px-20 bg-[#02aeef]/5">
      <div className="flex flex-col gap-2 pt-8">
        <h2 className="text-center w-full text-md xs:text-xl font-medium text-slate-500">
          Your health is our main priority
        </h2>
        <h2 className="text-center w-full text-2xl xs:text-4xl font-medium text-slate-500">
          Place your trust in our experts
        </h2>
      </div>
      <div className="flex justify-center text-center pt-8 px-6">
        <Link
          href="/contact-us"
          className="bg-[#02aeef]/50 hover:bg-[#02aeef]/70 duration-100 rounded-md shadow-2xl text-white font-medium px-6 py-3"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
};

<div className=" bg-[#02aeef]/5 py-8 px-8 lg:py-16 lg:px-24 rounded-md">
  <h1 className="text-center w-full text-2xl xs:text-4xl font-medium text-slate-500">
    Želite se naručiti kod ovog liječnika?
  </h1>
  <div className="flex justify-center text-center pt-8 px-6">
    <Link
      href="/our-team"
      className="bg-[#02aeef]/50 hover:bg-[#02aeef]/70 duration-100 rounded-md shadow-lg text-white font-medium px-6 py-3"
    >
      Send enquery
    </Link>
  </div>
</div>;
