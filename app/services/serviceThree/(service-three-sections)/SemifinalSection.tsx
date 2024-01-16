import React from "react";
import Image from "next/image";
import Link from "next/link";
import TeamOfDoctors from '../../../../public/TeamOfDoctors.jpg'
import ElectricityIcon from '../../../../public/ElectricityIcon.png'

export default function SemifinalSection() {
    return (
        <section className="grid grid-cols-12 gap-8 pb-12 px-6 md:px-8 lg:px-24 bg-slate-100">
            <div className="hidden sm:block col-span-4 rounded-md p-2 border-[1px] border-slate-400">
              <div className="flex flex-col gap-4">
                <Image
                  width={0}
                  height={0}
                  src={TeamOfDoctors}
                  alt="Hero Image"
                  className="object-cover w-full h-full md:h-auto opacity-60 bg-black"
                />
              </div>
            </div>

            <div className="col-span-full sm:col-span-8 rounded-md p-2 border-[1px] border-slate-400 ">
              <h2 className="text-start text-md md:text-lg lg:text-xl text-black font-semibold">
                Database is te best toolset in world
              </h2>
              <p className="text-sm md:text-md font-normal pt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                architecto, est voluptate error possimus reprehenderit!
              </p>
              <div className="flex justify-start pb-10 pt-8">
                <Link
                  href={`/contact`}
                  className="bg-slate-700/90 text-white px-6 py-3 rounded border-slate-500 border"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col">
                  <h2 className="text-start w-full text-sm md:text-md font-semibold text-cyan-500 pb-2">
                    <div className="w-fit p-2">
                      <Image
                        src={ElectricityIcon}
                        alt="icon"
                        width={25}
                        height={25}
                      />
                    </div>
                    Lorem ipsum dolor sit amet.
                  </h2>
                  <p className="text-sm md:text-md font-normal pt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Porro architecto, est voluptate error possimus
                    reprehenderit!
                  </p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-start w-full text-sm md:text-md font-semibold text-cyan-500 pb-2">
                    <div className="w-fit p-2">
                      <Image
                        src={ElectricityIcon}
                        alt="icon"
                        width={25}
                        height={25}
                      />
                    </div>
                    Lorem ipsum dolor sit amet.
                  </h2>
                  <p className="text-sm md:text-md font-normal pt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Porro architecto, est voluptate error possimus
                    reprehenderit!
                  </p>
                </div>
              </div>
            </div>
          </section>
    )
}