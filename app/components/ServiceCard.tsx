"use client";

import Link from "next/link";
import React, { useState } from "react";

const ServiceCard = ({
  title,
  shortDescription,
  href,
  iconFillColorBeforeHover,
  iconFillColorAfterHover,
  backgroundFillColorBeforeHover,
  backgroundFillColorAfterHover,
}: {
  title: string;
  shortDescription: string;
  href: string;
  iconFillColorBeforeHover: string;
  iconFillColorAfterHover: string;
  backgroundFillColorBeforeHover: string;
  backgroundFillColorAfterHover: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const iconFillColor = isHovered
    ? iconFillColorAfterHover
    : iconFillColorBeforeHover;

  const backgroundFillColor = isHovered
    ? backgroundFillColorAfterHover
    : backgroundFillColorBeforeHover;

  return (
    <Link
      href={`/services/${href}`}
      className="card bg-[#02aeef]/5 p-4 md:p-6 lg:p-8 hover:scale-105 duration-300 group drop-shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="layer"></div>

      <div className="content">
        <div className="w-full flex items-center justify-center pt-4">
          <svg
            fill={iconFillColor}
            width="50px"
            height="50px"
            viewBox="-10 -10 120.00 120.00"
            xmlns="http://www.w3.org/2000/svg"
            className="duration-500"
          >
            <g
              id="SVGRepo_bgCarrier"
              strokeWidth="0"
              transform="translate(0,0), scale(1)"
            >
              <rect
                x="-10"
                y="-10"
                width="120.00"
                height="120.00"
                rx="60"
                fill={backgroundFillColor}
                className="duration-500"
              />
            </g>

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.8"
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
        </div>

        <p className="text-slate-500 text-center font-medium px-6 py-3 text-lg xl:text-xl lg:pt-4 group-hover:text-white duration-300 pt-6">
          {title}
        </p>

        <p className="text-center w-full text-base xl:text-lg font-light text-slate-500 group-hover:text-white duration-100 pt-4">
          {shortDescription}
        </p>

        <div className="flex items-center pt-8 gap-2 justify-end">
          <p className="text-start w-fit text-sm md:text-md  font-medium group-hover:text-white duration-100 text-slate-500">
            Learn More
          </p>

          <div>
            <svg
              width={30}
              height={30}
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke=""
              strokeWidth="0.00024000000000000003"
            >
              <circle cx="12" cy="12" r="12" fill={backgroundFillColor} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
                  fill={iconFillColor}
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard