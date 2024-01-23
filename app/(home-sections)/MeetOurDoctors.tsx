import Image from "next/image";
import React from "react";
import Link from "next/link";
import "../../public/DoctorCard.css";
import { doctors } from "../data";
import { DoctorType } from "../types";
import { generateUrlFromFullName } from "../utils";
import TestImage from "../../public/someDoctorImage.avif";
import { RightIcon } from "@/public/Icons";
import { getFirstName } from "../utils";
import SectionWrapper from "../components/wrappers/SectionWrapper";

export default function MeetOurDoctors() {
  return (
    <SectionWrapper>
      <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2 border-b-2 border-[#babaff]">
        <h2 className="w-full leading-2 text-start text-lg md:text-lg lg:text-xl font-medium text-[#babaff]">
          Meet our doctors specialists
        </h2>
      </div>
      <p className="text-start w-full text-md md:text-lg font-normal text-slate-600">
        <span className="font-bold">Clinical Research Training</span> and Medical Education · Critical Care 
        <span className="font-bold"> Medicine Additional NIH Doctors/Researchers</span> nical Research Training and
        Medical Education · Critical Care Medicine Additional NIH
        Doctors/Researchers
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-12">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
      <div className="flex justify-center pt-8 px-6">
        <Link
          href="/our-team"
          className="bg-[#babaff]/50 text-white font-semibold px-6 py-3 uppercase"
        >
          Meet The Rest
        </Link>
      </div>
    </SectionWrapper>
  );
}

// export function DoctorCard({ doctor }: { doctor: DoctorType }) {
//   const lowerCaseDoctorName = generateUrlFromFullName(doctor.name)

//   return (
//     <Link href={`/our-team/${lowerCaseDoctorName}`} className="card bg-[#babaff]/10 p-4 md:p-6 lg:p-8 hover:scale-105 duration-300">
//       <div className="layer"></div>
//       <div className="content">
//         <div className="image">
//           <img
//             width="100%"
//             src={`https://vignette.wikia.nocookie.net/supernatural-diaries/images/b/b2/Cara-delevingne-profile.jpg/revision/latest?cb=20140217060511`}
//             alt={`j`}
//           />
//         </div>
//         <p className="text-center text-md md:text-lg lg:text-xl font-semibold pt-2">
//           {doctor.name}
//         </p>
//         <p className="text-center text-sm md:text-md lg:text-lg font-base">
//           {doctor.specialisation}
//         </p>
//         <div className="flex flex-row gap-2 items-center justify-center pt-4">
//           <CloverIcon />
//           <p className="text-xs ">&quot;Health is always worth fighting for.&quot;</p>
//         </div>
//         <div className="flex items-center pt-10 gap-2 justify-end">
//           <p className="text-slate-700 text-end text-sm">Meet Dr. Olga</p>
//           <RightIcon
//             width="50"
//             height="50"
//             backgroundFillColor="#babaff"
//             iconFillColor="#ffffff"
//           />
//         </div>
//       </div>
//     </Link>
//   );
// }

const DoctorCard = ({ doctor }: { doctor: DoctorType }) => {
  const lowerCaseDoctorName = generateUrlFromFullName(doctor.name);

  return (
    <Link href={`/our-team/${lowerCaseDoctorName}`}>
      <div className="relative group rounded overflow-hidden cursor-pointer">
        {/* Background Image */}
        <div className="group-hover:opacity-75 transition duration-300 ease-in-out">
          <Image
            className="object-cover w-full h-54 md:h-72 lg:h-80 xl:h-96 transform group-hover:scale-105 duration-300"
            src={TestImage}
            alt="Card Background"
            width={0}
            height={0}
          />
        </div>
        {/* Text Container */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transition duration-300 ease-in-out bg-[#babaff]/80 text-white opacity-0 group-hover:opacity-100">
          {/* Paragraph 1 */}
          <p className="text-md md:text-lg lg:text-xl xl:text-xl font-semibold">
            Dr. {doctor.name}
          </p>
          {/* Paragraph 2 */}
          <p className="text-base md:text-md lg:text-lg mb-2">
            {doctor.specialisation}
          </p>
          <div className="flex items-center pt-4 gap-2 justify-end">
            <p className="text-md md:text-lg font-normal text-white">
              Meet Dr. {getFirstName(doctor.name)}
            </p>
            <RightIcon
              width="30"
              height="30"
              backgroundFillColor="#babaffcc"
              iconFillColor="#ffffff"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
