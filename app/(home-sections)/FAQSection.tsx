"use client";

import Image from "next/image";
import DoctorImage from "../../public/doctorOperating.jpg";
import { homePageFAQ } from "../data";
import { Accordion } from "../components/Accordion";

export default function FAQSection() {
  return (
    <section className="w-full flex flex-col gap-8 pt-10 sm:pt-12 md:pt-16 lg:pt-28 px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32 bg-white">
      <h1 className="font-bold text-start text-xl lg:text-3xl text-slate-600 leading-2">
        Frequently Asked Questions
      </h1>
      <p className="text-start w-full text-md md:text-lg font-normal text-slate-600">
        A frequently asked questions (FAQ) forum is often used in articles and
        online forums where common questions tend to recur.
      </p>
        <div className="pt-4 ">
          <Accordion faq={homePageFAQ} />
        </div>
    </section>
  );
}
