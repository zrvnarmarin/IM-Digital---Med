import React from "react";
import Link from "next/link";
import Image from "next/image";
import TeamOfDoctors from "../../../../public/TeamOfDoctors.jpg";
import ElectricityIcon from "../../../../public/ElectricityIcon.png";

export default function ImageCardAndParagraphSectionServiceTwo() {
  return (
    <section className="flex w-full flex-col md:flex-col bg-slate-200">
      <div className="flex flex-col gap-12 bg-slate-200">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Image
              width={0}
              height={0}
              src={TeamOfDoctors}
              alt="Hero Image"
              className="object-cover w-full h-full md:h-auto opacity-60 bg-black"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-1 p-8">
            <div className="w-full flex justify-start pb-2">
              <Image src={ElectricityIcon} alt="icon" width={15} height={15} />
            </div>
            <p className="text-start w-full text-sm md:text-md font-semibold text-cyan-500 pb-2">
              Service short description{" "}
            </p>
            <p className="text-start w-full text-xs md:text-md font-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              cum!
            </p>
            <ul className="w-full flex-col">
              {[1, 2, 3].map((listItem) => (
                <li key={listItem} className="flex items-center text-sm">
                  <div className="h-full flex items-center"></div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex items-center  gap-2 rounded-full border-slate-800 p-2">
                      <Image
                        src={ElectricityIcon}
                        alt="icon"
                        width={15}
                        height={15}
                      />
                    </div>
                    <p className="text-start w-full text-xs font-normal">
                      Ovo je neka deskripcija koja ima neko znacenje
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="w-full flex justify-start pt-2">
              <Link
                href="#serviceshortdescription"
                className="text-start w-full text-xs md:text-md font-semibold text-cyan-500 underline-offset-2 underline decoration-solid decoration-cyan-500"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12 bg-slate-200">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-1 p-8">
            <div className="w-full flex justify-start pb-2">
              <Image src={ElectricityIcon} alt="icon" width={15} height={15} />
            </div>
            <p className="text-start w-full text-sm md:text-md font-semibold text-cyan-500 pb-2">
              Service short description{" "}
            </p>
            <p className="text-start w-full text-xs md:text-md font-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              cum!
            </p>
            <ul className="w-full flex-col">
              {[1, 2, 3].map((listItem) => (
                <li key={listItem} className="flex items-center text-sm">
                  <div className="h-full flex items-center"></div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex items-center  gap-2 rounded-full border-slate-800 p-2">
                      <Image
                        src={ElectricityIcon}
                        alt="icon"
                        width={15}
                        height={15}
                      />
                    </div>
                    <p className="text-start w-full text-xs font-normal">
                      Ovo je neka deskripcija koja ima neko znacenje
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="w-full flex justify-start pt-2">
              <Link
                href="#serviceshortdescription"
                className="text-start w-full text-xs md:text-md font-semibold text-cyan-500 underline-offset-2 underline decoration-solid decoration-cyan-500"
              >
                Contact Us
              </Link>
            </div>
          </div>
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
      </div>
    </section>
  );
}
