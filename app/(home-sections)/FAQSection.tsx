"use client";

import { homePageFAQ } from "../data";
import { Accordion } from "../components/Accordion";
import SectionWrapper from "../components/wrappers/SectionWrapper";

export default function FAQSection() {
  return (
    <SectionWrapper>
      <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2 border-b-2 border-[#babaff]">
        <h2 className="w-full leading-2 text-start text-2xl font-medium text-[#babaff]">
          Frequently Asked Questions
        </h2>
      </div>
      <p className="text-start w-full text-md md:text-lg font-normal text-slate-600">
        <span className="font-bold">A frequently asked questions (FAQ)</span> forum is often used in articles and
        online forums where common questions tend to recur.
      </p>
        <div className="pt-4 ">
          <Accordion faq={homePageFAQ} />
        </div>
    </SectionWrapper>
  );
}
