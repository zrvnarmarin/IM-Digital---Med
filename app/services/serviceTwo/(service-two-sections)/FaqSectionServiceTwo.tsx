import React from "react";
import { Accordion } from "@/app/components/Accordion";
import { homePageFAQ } from "@/app/data";

export default function FaqSectionServiceTwo() {
  return (
      <section className="w-full flex flex-col gap-4 mt-4 mb-12 py-4 px-7 md:px-12 lg:px-16">
        <Accordion faq={homePageFAQ} />
      </section>
  );
}