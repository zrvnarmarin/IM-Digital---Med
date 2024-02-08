import { TestSVG } from "@/app/(home-sections)/WhyPeopleChooseUs";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import Link from "next/link";

export default function PageLinksSection() {
  return (
    <SectionWrapper>
      <ul className="grid grid-cols-2 sm:grid-cols-5">
        {servicePropertiesNavigationLinks.map((navigationLink) => (
          <Link href={`#${navigationLink.href}`}>
            <li className="flex flex-col gap-2 items-center justify-center cursor-pointer py-2 px-4">
            <TestSVG iconFill="#ffffff" backgroundFill= "#80d6f7" />
              <p className="text-center text-sm xl:text-base font-normal text-slate-500">
                {navigationLink.title}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </SectionWrapper>
  );
};

const servicePropertiesNavigationLinks = [
  {
    id: 1,
    title: "About the procedure",
    href: "about-the-procedure",
  },
  {
    id: 1,
    title: "How to prepare",
    href: "how-to-prepare",
  },
  {
    id: 1,
    title: "During the procedure",
    href: "during-the-procedure",
  },
  {
    id: 1,
    title: "Recovery time",
    href: "recovery-time",
  },
  {
    id: 1,
    title: "Precautions",
    href: "precautions",
  },
];
