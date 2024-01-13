import React from "react";
import Image from "next/image";
import TeamOfDoctors from '../../../../public/TeamOfDoctors.jpg'

export default function FirstSection() {
  return (
    <section className="flex gap-2 h-full flex-col py-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
      <p className="text-start text-md md:text-lg lg:text-xl text-black font-semibold">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
        vitae!
      </p>
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-12">
        <Image
          width={0}
          height={0}
          src={TeamOfDoctors}
          alt="Hero Image"
          className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
        />
        <Image
          width={0}
          height={0}
          src={TeamOfDoctors}
          alt="Hero Image"
          className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
        />
      </div>
      <p className="text-start text-md md:text-lg lg:text-xl text-black font-semibold">
        Lorem ipsum, dolor sit amet consectetur
      </p>
    </section>
  );
}