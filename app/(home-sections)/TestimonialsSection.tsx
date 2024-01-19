import React from "react";
import Testimonials from "../components/Testimonials";

export default function TestimonialsSection() {
  return (
    <div className="flex flex-col gap-8 pt-10 sm:pt-12 md:pt-16 lg:pt-28 px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32 bg-white">
      <Testimonials />
    </div>
  );
}
