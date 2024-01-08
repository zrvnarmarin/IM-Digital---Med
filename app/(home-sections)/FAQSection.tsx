"use client";

import Image from "next/image";
import DoctorImage from "../../public/doctorOperating.jpg";
import { homePageFAQ } from "../data";
import { Accordion } from "../components/Accordion";

export default function FAQSection() {
  return (
    <section className="w-full px-7 md:px-16 lg:px-20 py-16 bg-white">
      <h1 className="text-start text-2xl md:text-3xl lg:text-4xl  text-[#2a2f31] font-semibold leading-2">
        Frequently Asked Questions
      </h1>
      <p className="text-[#555f60] text-start text-base md:text-base lg:text-lg leading-2 pt-4">
        A frequently asked questions (FAQ) forum is often used in articles and
        online forums where common questions tend to recur.
      </p>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 pt-8">
        <Accordion faq={homePageFAQ} />
        <div className="flex items-center justify-center bg-black">
          <Image
            src={DoctorImage}
            alt="Open Accordion Button"
            height={100}
            width={400}
            className="object-cover w-full h-96 "
          />
        </div>
      </div>
    </section>
  );
}
