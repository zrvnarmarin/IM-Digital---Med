import React from "react";
import Image from "next/image";
import ElectricityIcon from "../../../../public/ElectricityIcon.png";
import { ListItemType } from "@/app/types";
import { listItems } from "@/app/data";

export default function NumberedCardsServiceTwo() {
  return (
      <section className="flex flex-col items-center justify-center gap-2 py-12 px-6 md:px-8 lg:px-24 bg-slate-200 border-[1px] border-slate-400">
        <p className="text-start w-full text-sm md:text-md font-normal bg-slate-100 p-4 border border-slate-200 rounded-md mt-4">
          Parodontoza je{" "}
          <span className="font-bold">podmukla bolest desni</span> koju je na
          početku lako ignorirati jer ne uzrokuje bol, ali zato vrlo brzo zbog
          izostanka
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <p className="flex items-center justify-center font-bold text-7xl text-cyan-500 bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
            1
          </p>
          <ListItem listItem={listItems[1]} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <p className="flex items-center justify-center font-bold text-7xl text-cyan-500 bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
            2
          </p>
          <ListItem listItem={listItems[1]} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <p className="flex items-center justify-center font-bold text-7xl text-cyan-500 bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
            3
          </p>
          <ListItem listItem={listItems[1]} />
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
