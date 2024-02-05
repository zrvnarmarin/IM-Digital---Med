import React from "react";
import { WhyChooseUsPointType } from "../types";
import { whyChooseUsPoints } from "../data";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import { ShieldIcon } from "@/public/Icons";

export default function WhyPeopleChooseUs() {
  return (
    <SectionWrapper>
      <div className="flex flex-col justify-center">
        <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2">
          <h2 className="text-center text-2xl xs:text-4xl font-medium text-slate-600 underline-offset-8 decoration-1 underline decoration-[#babaff]">
            Why is your health safe
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 pt-8 lg:pt-12">
          {whyChooseUsPoints.map((point) => (
            <WhyPeopleChoosePointCard key={point.point} point={point} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export function WhyPeopleChoosePointCard({
  point,
}: {
  point: WhyChooseUsPointType;
}) {
  return (
    <div
      key={point.id}
      className={`group flex flex-col rounded-md items-center  p-4 md:p-6 lg:p-8 border border-slate-200 hover:bg-[#f8f8ff] hover:text-white duration-300`}
    >
      <div>
        <TestSVG />
      </div>
      <h2 className="text-slate-500 text-center font-normal px-6 py-3 text-xl xl:text-2xl pt-2 lg:pt-4">
        {point.point}
      </h2>
      <p className="text-center w-full text-base xl:text-lg font-light text-slate-500 pt-2 lg:pt-4">
        {point.description}
      </p>
    </div>
  );
}

export const TestSVG = () => {
  return (
    <svg
      fill="#ffffff"
      width="50px"
      height="50px"
      viewBox="-10 -10 120.00 120.00"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
    >
      <g
        id="SVGRepo_bgCarrier"
        stroke-width="0"
        transform="translate(0,0), scale(1)"
      >
        <rect
          x="-10"
          y="-10"
          width="120.00"
          height="120.00"
          rx="60"
          fill="#babaff"
        />
      </g>

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#CCCCCC"
        stroke-width="0.8"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path d="M72,25H70a.94.94,0,0,0-1,1v4a8,8,0,0,1-8,8H39a8,8,0,0,1-8-8V26a.94.94,0,0,0-1-1H28a6,6,0,0,0-6,6V74a6,6,0,0,0,6,6H72a6,6,0,0,0,6-6V31A6,6,0,0,0,72,25ZM28,53.86V51.79a2.08,2.08,0,0,1,2.08-2.08h3.11V46.6a2.08,2.08,0,0,1,2.07-2.08h2.08a2.08,2.08,0,0,1,2.07,2.08v3.11H42.5a2.08,2.08,0,0,1,2.08,2.08v2.07a2.08,2.08,0,0,1-2.08,2.08H39.39v3.11a2.07,2.07,0,0,1-2.07,2.07H35.24a2.07,2.07,0,0,1-2.07-2.07V55.94H30.06A2.08,2.08,0,0,1,28,53.86ZM71.66,71.65A1.32,1.32,0,0,1,70.33,73H29.41a1.33,1.33,0,0,1-1.33-1.33V69a1.34,1.34,0,0,1,1.33-1.33H70.33A1.33,1.33,0,0,1,71.66,69Zm0-11.62a1.33,1.33,0,0,1-1.33,1.33H50.22A1.34,1.34,0,0,1,48.89,60V57.37A1.34,1.34,0,0,1,50.22,56H70.33a1.33,1.33,0,0,1,1.33,1.33Zm0-11.63a1.33,1.33,0,0,1-1.33,1.33H50.41a1.34,1.34,0,0,1-1.33-1.33V45.74a1.34,1.34,0,0,1,1.33-1.33H70.33a1.33,1.33,0,0,1,1.33,1.33Z" />{" "}
          <path d="M39,32H61a2,2,0,0,0,2-2V26a6,6,0,0,0-6-6H43a6,6,0,0,0-6,6v4A2,2,0,0,0,39,32Z" />{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

export const SecondSVGTest = () => {
  return (
    <svg
      fill="#ffffff"
      width="50px"
      height="50px"
      viewBox="0 0 100.00 100.00"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0">
        <rect
          x="0"
          y="0"
          width="100.00"
          height="100.00"
          rx="50"
          fill="#babaff"
          strokeWidth="0"
        />
      </g>

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path d="m47.44 61.66a1 1 0 0 1 1 .91v14.37a3.06 3.06 0 0 1 -2.87 3h-20.49a3.06 3.06 0 0 1 -3-2.88v-14.38a1 1 0 0 1 .91-1h24.5zm29.51 0a1 1 0 0 1 1 .91v14.37a3.06 3.06 0 0 1 -2.87 3h-20.49a3.06 3.06 0 0 1 -3-2.88v-14.38a1 1 0 0 1 .91-1h24.5zm-37.36 4.23-.09.11-5.82 6.32-2.63-2.55a.77.77 0 0 0 -1-.08l-.09.08-1.09 1a.62.62 0 0 0 -.07.9l.07.08 3.73 3.54a1.56 1.56 0 0 0 1.08.45 1.43 1.43 0 0 0 1.09-.45l3.14-3.32.63-.67 3.14-3.31a.78.78 0 0 0 .06-.9l-.06-.08-1.09-1a.76.76 0 0 0 -1-.12zm29.51 0-.1.11-5.82 6.32-2.64-2.55a.75.75 0 0 0 -1-.08l-.09.08-1.09 1a.62.62 0 0 0 -.07.9l.07.08 3.73 3.54a1.54 1.54 0 0 0 1.08.45 1.43 1.43 0 0 0 1.09-.45l3.14-3.32.63-.67 3.14-3.31a.78.78 0 0 0 .06-.9l-.06-.08-1.07-1.01a.76.76 0 0 0 -1-.11zm-23.43-14.41a3 3 0 0 1 2.85 2.87v3.24a1 1 0 0 1 -.84 1h-26.68a1 1 0 0 1 -.94-.9v-3.16a3 3 0 0 1 2.69-3.05h23zm31.48 0a3 3 0 0 1 2.85 2.87v3.24a1 1 0 0 1 -.84 1h-26.73a1 1 0 0 1 -1-.9v-3.16a3 3 0 0 1 2.68-3.05h23zm-15-21.29a1 1 0 0 1 1 .91v14.37a3.06 3.06 0 0 1 -2.87 3.05h-20.44a3.06 3.06 0 0 1 -3.05-2.87v-14.44a1 1 0 0 1 .9-1h24.51zm-7.85 4.22-.09.08-5.82 6.32-2.59-2.56a.76.76 0 0 0 -1-.07l-.09.07-1.08 1a.61.61 0 0 0 -.07.9l.07.08 3.72 3.53a1.56 1.56 0 0 0 1.09.45 1.43 1.43 0 0 0 1.08-.45l3.14-3.31.64-.67 3.13-3.32a.78.78 0 0 0 .06-.9l-.06-.07-1.08-1a.77.77 0 0 0 -1-.08zm7.9-14.41a3.06 3.06 0 0 1 3 2.88v3.23a1 1 0 0 1 -.91 1h-28.52a1 1 0 0 1 -1-.91v-3.14a3.06 3.06 0 0 1 2.87-3h24.56z" />
      </g>
    </svg>
  );
};
