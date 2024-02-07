import React from "react";
import Link from "next/link";
import Image from "next/image";
import TestimonialImage from "../../public/HospitalImage.jpg";
import { TestimonialType } from "../types";
import { testimonials } from "./../data";
import { RightIcon, HexagonIcon } from "@/public/Icons";

export default function Testimonials() {
  return (
    <section className="flex gap-8 h-full flex-col md:flex-col bg-[#FFFFFF]">
      <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2">
        <h2 className="text-4xl font-bold text-slate-600">
          Testimonials
        </h2>
      </div>
      <div className="flex-row pt-2">
        <div className="flex-row flex gap-2 items-center">
          <button className="hidden md:block border-none p-0 hover:scale-125 duration-200">
            <RightIcon
              width="36px"
              height="36px"
              backgroundFillColor="#02AEEF80"
              iconFillColor="#ffffff"
            />
          </button>
            <Testimonial key={testimonials[2].id} testimonialData={testimonials[2]} />
          <button className="hidden md:block border-none p-0 hover:scale-125 duration-200">
            <RightIcon
              width="36px"
              height="36px"
              backgroundFillColor="#02AEEF80"
              iconFillColor="#ffffff"
            />
          </button>
        </div>
        <div className="flex flex-row justify-center pt-6 gap-4">
          <button className="hover:scale-105 duration-200 border-none p-0">
            <HexagonIcon />
          </button>
          <button className="hover:scale-105 duration-200 border-none p-0">
            <HexagonIcon />
          </button>
          <button className="hover:scale-105 duration-200 border-none p-0">
            <HexagonIcon />
          </button>
        </div>
      </div>
      <div className="flex justify-center text-center pt-8 px-6">
        <Link
          href="/our-team"
          className="bg-[#02aeef]/50 text-white font-semibold px-8 py-3 rounded-md"
        >
          Read More Stories
        </Link>
      </div>
    </section>
  );
}

export function Testimonial({
  testimonialData,
}: {
  testimonialData: TestimonialType;
}) {
  return (
    <div className="rounded border shadow-lg mx-auto">
      <div className="flex h-full flex-col text-primary sm:flex-row">
        <div className="relative flex min-h-[200px] w-full items-center justify-center rounded-t bg-primary lg:w-2/5 lg:rounded-l lg:rounded-tr-none">
          <Image
            src={TestimonialImage}
            alt="Community Image"
            className="rounded-t w-full h-full object-cover lg:rounded-l lg:rounded-tr-none"
          />
        </div>
        <div className="flex w-full items-center rounded-b p-4 lg:w-3/5 lg:rounded-r lg:rounded-bl-none sm:px-8 sm:py-6 lg:px-8 lg:py-8 xl:px-12 xl:py-10">
          <div className="grid gap-y-4 md:gap-y-6 lg:gap-y-10">
            <p className="text-start w-full text-sm md:text-md font-medium text-slate-600 pt-4 lg:pt-0">{testimonialData.date}</p>
            <p className="text-start w-full text-base xl:text-lg font-light text-slate-500 group-hover:text-white duration-100 sm:pt-2 pt-0 lg:pt-0">
              <span className="-ml-1">“</span>
              {testimonialData.testimonial}
              <span className="-ml-1">“</span>
            </p>
            <div className="flex space-x-3 items-center">
              <div className="w-[50px] h-[50px] mx-0 my-auto rounded-full overflow-hidden border-2 border-solid border-slate-300">
                <Image
                  src={TestimonialImage}
                  alt="testimonial"
                  height={0}
                  width={0}
                  className="h-full w-full"
                />
              </div>
              <div>
                <p className="w-full text-slate-500 font-medium text-lg xl:text-xl">
                  {testimonialData.personFullName}
                </p>
                {/* <p className="text-slate-500 font-normal text-xs xl:text-md">
                  {testimonialData.personOccupation}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
