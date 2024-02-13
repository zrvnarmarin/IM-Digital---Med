import { TestSVG } from "@/app/(home-sections)/WhyPeopleChooseUs";
import Link from "next/link";

export default function PageLinksSection() {
  return (
    <LinksSectionWrapper>
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {servicePropertiesNavigationLinks.map((navigationLink) => (
          <Link href={`#${navigationLink.href}`} key={navigationLink.id}>
            <li className="group flex flex-col gap-2 items-center justify-center cursor-pointer py-4 px-6 rounded-md bg-[#02aeef]/5 hover:bg-[#80d6f7] hover:scale-105 duration-100">
              <TestSVG iconFill="#ffffff" backgroundFill="#80d6f7" />
              <p className="text-base xl:text-lg font-light text-slate-500 group-hover:text-white duration-100">
                {navigationLink.title}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </LinksSectionWrapper>
  );
}

const servicePropertiesNavigationLinks = [
  {
    id: 1,
    title: "How to prepare",
    href: "how-to-prepare",
  },
  {
    id: 2,
    title: "During the procedure",
    href: "during-the-procedure",
  },
  {
    id: 3,
    title: "Recovery time",
    href: "recovery-time",
  },
  {
    id: 4,
    title: "Precautions",
    href: "precautions",
  },
];

import React, { ReactNode } from 'react';

type LinksSectionWrapperProps = {
  children: ReactNode;
};

export function LinksSectionWrapper({ children }: LinksSectionWrapperProps) {
  return (
    <section className="w-full flex flex-col gap-8 pt-10 pb-4 sm:pt-12 md:pt-16 lg:pt-28 px-8 md:px-14 lg:px-28 xl:px-42 2xl:px-48 bg-white">
      {children}
    </section>
  );
}
