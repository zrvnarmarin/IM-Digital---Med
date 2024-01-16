import React from "react";
import Image from "next/image";
import ElectricityIcon from "../../../../public/ElectricityIcon.png";
import TeamOfDoctors from '../../../../public/TeamOfDoctors.jpg'

export default function MoreAboutServiceSection() {
  return (
    <section className="flex gap-2 h-full flex-col md:flex-col pb-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
      <h1 className="text-start text-md md:text-lg lg:text-xl text-black font-semibold pt-2">
        Some Heading
      </h1>
      <p className="text-sm md:text-md font-normal pt-1">
        Lorem ipsum <span className="font-bold">dolor sit amet consectetur</span>, adipisicing elit. Blanditiis,
        quibusdam Lorem lorem lorem lorem lorem.
      </p>
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
      <p className="text-start text-md md:text-lg lg:text-xl text-black font-semibold pt-2">
        Some List Heading
      </p>
      <ul>
        {[1, 2, 3, 4, 5].map((listItem) => (
          <ListCard key={listItem.toFixed()} />
        ))}
      </ul>
      <p className="text-start w-full text-sm md:text-md font-normal">
        Prilikom prvog pregleda naši stručnjaci će Vam detaljno objasniti koja
        metoda najbolje odgovara Vašoj situaciji i potrebama
      </p>
    </section>
  );
}

function ListCard() {
  return (
    <li className="flex gap-4 items-center text-sm">
      <div className="h-full flex items-center border-[1px] border-slate-200"></div>
      <div className="flex flex-col gap-2 py-4">
        <div className="flex items-center gap-2">
          <div className="bg-slate-100 rounded-full p-2 border border-slate-300 ">
            <Image src={ElectricityIcon} alt="icon" width={15} height={15} />
          </div>
          <p className="text-md md:text-lg lg:text-lg font-medium">Title</p>
        </div>
        <p className="text-start w-full text-sm md:text-md font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          accusamus vel dolorem ipsam quidem doloribus corporis harum,
          reiciendis nesciunt assumenda, illo perspiciatis eius iste laborum.
        </p>
      </div>
    </li>
  );
}
