"use client";

import React, { useState } from "react";
import Image from "next/image";
import TestImage from "../../../public/doctorOperating.jpg";
import { listItems } from "@/app/data";
import { ListItemType } from "@/app/types";
import ElectricityIcon from "../../../public/ElectricityIcon.png";

export default function OurFoundingStorySection() {
  return (
    <section className="flex flex-col gap-10 pt-10 sm:pt-12 md:pt-16 lg:pt-28 px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32 bg-white">
      <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2">
        <h2 className="w-full leading-2 text-start text-2xl lg:text-4xl font-bold text-slate-600">
          Our Founding Story
        </h2>
      </div>

      <div className="w-fit bg-[#babaff]/50 flex flex-row items-center gap-3 px-2 py-2">
        <h2 className="w-fit text-center text-md font-semibold text-white lg:font-semibold">3.1</h2>
        <h2 className="text-center text-md font-semibold text-white lg:font-semibold">
          Our founders
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-2">
        <OurFoundersSection />
      </div>

      <div className="w-fit bg-[#babaff]/50 flex flex-row items-center gap-3 px-2 py-2">
        <h2 className="w-fit text-center text-md font-semibold text-white lg:font-semibold">3.2</h2>
        <h2 className="text-center text-md font-semibold text-white lg:font-semibold">
          Our something
        </h2>
      </div>

      <p className="text-start w-full text-sm md:text-md 2xl:text-lg font-medium text-slate-500 pt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde expedita
        <span className="font-bold"> Lorem ipsum dolor sit</span> hic nulla
        nihil, odio nisi fugiat ipsam aut, ducimus deserunt quisquam nostrum
        vitae sequi amet recusandae tempore! Atque minus quo eligendi? Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Unde expedita
        eveniet doloribus quia dolorem hic nulla nihil, odio nisi fugiat ipsam
        nihil, odio nisi fugiat ipsam aut, ducimus deserunt quisquam nostrum
        vitae sequi amet recusandae tempore! Atque minus quo eligendi? Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Unde expedita
        eveniet doloribus quia dolorem hic nulla nihil, odio nisi fugiat ipsam
        nihil, odio nisi fugiat ipsam aut, ducimus deserunt quisquam nostrum
        vitae sequi amet recusandae tempore! Atque minus quo eligendi? Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Unde expedita
        eveniet doloribus quia dolorem hic nulla nihil, odio nisi fugiat ipsam
        aut, ducimus deserunt{" "}
        <span className="font-bold"> Lorem ipsum dolor sit</span> recusandae
        tempore! Atque minus quo eligendi?
      </p>
      <p className="text-start w-full text-sm md:text-md 2xl:text-lg font-medium text-slate-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde expedita
        eveniet doloribus quia dolorem hic nulla nihil, odio nisi fugiat ipsam
        aut, ducimus deserunt quisquam nostrum vitae sequi amet recusandae
        tempore! Atque minus quo eligendi?
      </p>

      <div className="w-fit bg-[#babaff]/50 flex flex-row items-center gap-3 px-2 py-2">
        <h2 className="w-fit text-center text-md font-semibold text-white lg:font-semibold">3.3</h2>
        <h2 className="text-center text-md font-semibold text-white lg:font-semibold">
          Our founders
        </h2>
      </div>

      <p className="text-start w-full text-sm md:text-md 2xl:text-lg font-medium text-slate-500 pt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde expedita
        <span className="font-bold"> Lorem ipsum dolor sit</span> hic nulla
        nihil, odio nisi fugiat ipsam aut, ducimus deserunt quisquam nostrum
        vitae sequi amet recusandae tempore! Atque minus quo eligendi? Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Unde expedita
        eveniet doloribus quia dolorem hic nulla nihil, odio nisi fugiat ipsam
        aut, ducimus deserunt{" "}
        <span className="font-bold"> Lorem ipsum dolor sit</span> recusandae
        tempore! Atque minus quo eligendi?
      </p>


      {/* TO DO: make a grid section like on borderline.eu about us and each section has image and text below, and theyre in grid */}

      {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {[1, 2, 3, 4, 5, 6].map((__, key) => (
          // <Card key={key} />
          <div key={key}>fjvndf</div>
        ))}
      </div> */}
    </section>
  );
}

const GridSection = () => {
  const data = [
    {
      imageSrc: TestImage,
      heading: 'Item 1',
      paragraph: 'Description for Item 1...',
    },
    {
      imageSrc: TestImage,
      heading: 'Item 2',
      paragraph: 'Description for Item 2...',
    },
    {
      imageSrc: TestImage,
      heading: 'Item 3',
      paragraph: 'Description for Item 3...',
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8">
        {data.map((item, index) => (
          <div key={index} className="flex flex-row bg-gray-100 p-4 rounded-lg">
            <div className="mb-4 w-1/3 max-h-[100px]">
              <Image src={item.imageSrc} alt={`Item ${index + 1}`} className="w-full h-auto rounded" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold mb-2">{item.heading}</h2>
              <p>{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const OurFoundersSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <div className="flex justify-center py-10 px-6">
      </div>
      <GridSection />
    </div>
  );
};

const FounderCard = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="relative group rounded overflow-hidden cursor-pointer">
      <Image
        className="object-cover w-full h-54 md:h-72 lg:h-80 xl:h-96 transition duration-300 ease-in-out transform"
        src={TestImage}
        alt="Card Background"
        width={0}
        height={0}
      />
      {isOpen ? <FounderCardDetails /> : null}
    </div>
  );
};

const FounderCardDetails = () => {
  return (
    <div className="flex flex-row gap-16 pt-4">
      <ul className="flex flex-col gap-4">
        {listItems.map((listItem) => (
          <FounderAchievementsListItem key={listItem.id} listItem={listItem} />
        ))}
      </ul>
    </div>
  );
};

const FounderAchievementsListItem = ({
  listItem,
}: {
  listItem: ListItemType;
}) => {
  return (
    <li className="flex gap-4 items-center">
      <div className="h-full flex items-center border-[1px] border-slate-200"></div>
      <div className="flex flex-col gap-2 py-4">
        <div className="flex items-center gap-4">
          <div className="bg-[#babaff] rounded-full p-2 border border-[#8484f2] ">
            <Image src={ElectricityIcon} alt="icon" width={15} height={15} />
          </div>
          <p className="leading-2 text-center text-lg md:text-xl font-semibold text-slate-600 duration-200">
            {listItem.title}
          </p>
        </div>
        <p className="text-start w-full text-md md:text-lg font-normal text-slate-600">
          {listItem.description}
        </p>
      </div>
    </li>
  );
};
