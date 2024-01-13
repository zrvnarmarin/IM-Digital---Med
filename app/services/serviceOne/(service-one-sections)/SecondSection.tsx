import React from "react";
import Image from "next/image";
import TeamOfDoctors from '../../../../public/TeamOfDoctors.jpg'

export default function SecondSection() {
  return (
      <section className="flex gap-2 w-full flex-col md:flex-col pb-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
        <div className="flex flex-col sm:flex-row gap-12">
          <div className="flex-col gap-12">
            <div className="flex flex-col gap-4">
              <p className="text-start w-full text-sm md:text-md font-normal">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                cum!
              </p>
              <Image
                width={0}
                height={0}
                src={TeamOfDoctors}
                alt="Hero Image"
                className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
              />
            </div>
          </div>
          <div className="flex-col">
            <div className="flex flex-col gap-4">
              <p className="text-start w-full text-sm md:text-md font-normal">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                cum!
              </p>
              <Image
                width={0}
                height={0}
                src={TeamOfDoctors}
                alt="Hero Image"
                className="object-cover w-full h-full md:h-auto opacity-60 bg-black rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

  );
}
