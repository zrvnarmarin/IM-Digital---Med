"use client";

import { homePageFAQ } from "../data";
import { Accordion } from "../components/Accordion";
import SectionWrapper from "../components/wrappers/SectionWrapper";

export default function FAQSection() {
  return (
    <SectionWrapper>
      <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2">
        <h2 className="text-center text-4xl font-bold text-slate-600">
          Frequently Asked Questions
        </h2>
      </div>
        <div className="pt-4 ">
          <Accordion faq={homePageFAQ} />
        </div>
    </SectionWrapper>
  );
}
