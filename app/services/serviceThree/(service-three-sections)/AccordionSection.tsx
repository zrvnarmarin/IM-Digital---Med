import React from "react";
import { Accordion } from "@/app/components/Accordion";
import { homePageFAQ } from './../../../data';

export default function AccordionSection() {
    return (
        <div className="px-6 md:px-8 lg:px-24 py-12">
            <Accordion faq={homePageFAQ} />
          </div>
    )
}