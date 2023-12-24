import React from "react";
import Image from "next/image";
import HeroImage from "../../../public/jc-gellidon-9Eb-bpTXglM-unsplash.jpg";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center lg:pt-4 md:px-8 lg:px-24 pb-4">
      <section className="flex">
        <div className="min-h-screen w-full">
          {/* Hero Section */}
          <div className="relative h-screen md:h-auto bg-black">
            <Image
              src={HeroImage}
              alt="Hero Image"
              className="object-cover w-full h-full md:h-auto opacity-60 bg-black"
            />
            {/* Hero Content (Add your text and buttons here) */}
            <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-center pt-64">
              <p className="text-xs italic pb-4 px-4 text-start w-full">
                "Health is always worth fighting for."
              </p>
              <div className="bg-slate-700/90 text-3xl text-start font-bold mb-4 px-4 w-full py-3 border-slate-500 border">
                <h1>About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
