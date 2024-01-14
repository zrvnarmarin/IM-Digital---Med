import React from "react";
import Image from "next/image";
import TeamOfDoctors from "../../../../public/TeamOfDoctors.jpg";

export default function ImageGridSectionServiceTwo() {
  return (
      <section className="flex gap-2 h-full flex-col pb-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <Image
            width={200}
            height={200}
            src={TeamOfDoctors}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
          <Image
            width={200}
            height={200}
            src={TeamOfDoctors}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
          <Image
            width={200}
            height={200}
            src={TeamOfDoctors}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
          <Image
            width={200}
            height={200}
            src={TeamOfDoctors}
            alt="Hero Image"
            className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
          />
        </div>
      </section>

  );
}