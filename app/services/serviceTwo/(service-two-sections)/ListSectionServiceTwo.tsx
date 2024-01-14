import React from "react";
import Image from "next/image";
import ElectricityIcon from "../../../../public/ElectricityIcon.png";
import { ListItemType } from "@/app/types";
import { listItems } from "@/app/data";
import ListTestImage from "../../../../public/listSectionIMageTest.avif";

export default function ListSectionServiceTwo() {
  return (
      <section className="flex flex-col gap-8 pb-16 px-7 md:px-16 lg:px-20 bg-white">
        <h1 className="text-start text-md md:text-lg lg:text-xl text-black font-semibold">
          Lorem Ipsum Dolor Sit Garum
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="hidden lg:flex items-center justify-center">
            <Image src={ListTestImage} alt="test" width={0} height={0} />
          </div>
          <ul className="flex flex-col gap-4">
            {listItems.map((listItem) => (
              <ListItem key={listItem.id} listItem={listItem} />
            ))}
          </ul>
        </div>
      </section>
  );
}

const ListItem = ({ listItem }: { listItem: ListItemType }) => {
  return (
    <li className="flex gap-4 items-center text-sm">
      <div className="h-full flex items-center border-[1px] border-slate-200"></div>
      <div className="flex flex-col gap-2 py-4">
        <div className="flex items-center gap-2">
          <div className="bg-slate-100 rounded-full p-2 border border-slate-300 ">
            <Image src={ElectricityIcon} alt="icon" width={15} height={15} />
          </div>
          <p className="text-md md:text-lg lg:text-lg font-medium">
            {listItem.title}
          </p>
        </div>
        <p className="text-start w-full text-sm md:text-md font-normal">
          {listItem.description}
        </p>
      </div>
    </li>
  );
};
