import React from "react";
import Image from "next/image";
import TestimonialImage from "../../public/HospitalImage.jpg";
import { TestimonialType } from "../types";
import { testimonials } from "./../data";
import { RightIcon } from "@/public/Icons";

export default function Testimonials() {
  return (
    <section className="flex gap-8 h-full flex-col md:flex-col bg-[#FFFFFF]">
      <h1 className="font-bold text-start text-lg lg:text-3xl text-[#2a2f31] leading-10">
        Testimonials
      </h1>
      <div className="flex-row flex gap-2 items-center">
        <button className="hidden md:block border-none p-0">
          <RightIcon />
        </button>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} testimonialData={testimonial} />
        ))}
        <button className="hidden md:block border-none p-0">
          <RightIcon />
        </button>
      </div>
    </section>
  );
}

function Testimonial({
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
        <div className="flex w-full items-center rounded-b p-4 lg:w-3/5 lg:rounded-r lg:rounded-bl-none sm:px-8 sm:py-6 lg:px-12 lg:py-12 xl:px-12 xl:py-10">
          <div className="grid gap-y-8">
            <p className="text-[#555f60] text-start text-sm font-medium">
              <span className="-ml-1">“</span>
              {testimonialData.testimonial}
              <span className="-ml-1">“</span>
            </p>
            <div className="flex space-x-3">
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
                <p className="text-start text-md font-semibold">
                  {testimonialData.personFullName}
                </p>
                <p className="text-start text-sm font-medium">
                  {testimonialData.personOccupation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
