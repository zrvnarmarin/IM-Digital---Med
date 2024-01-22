import Image from "next/image";
import Link from "next/link";
import ElectricityIcon from "../../public/ElectricityIcon.png";
import { ListItemType } from "../types";
import { listItems } from "../data";
import ListTestImage from "../../public/listSectionIMageTest.avif";

export default function ListSection() {
  return (
    <section className="flex flex-col gap-8 pt-10 sm:pt-12 md:pt-16 lg:pt-28 px-8 md:px-14 lg:px-28 xl:px-32 2xl:px-48 bg-white">
      <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2 border-b-2 border-[#babaff]">
        <h2 className="w-full leading-2 text-start text-lg md:text-lg lg:text-xl font-medium text-[#babaff]">
          Why are we different
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <ul className="flex flex-col gap-4">
          {listItems.map((listItem) => (
            <ListItem key={listItem.id} listItem={listItem} />
          ))}
        </ul>
        <div className="hidden lg:flex items-center justify-center">
          <Image src={ListTestImage} alt="test" width={0} height={0} />
        </div>
      </div>
      <div className="flex justify-center pt-8 px-6">
        <Link
          href="/contact"
          className="bg-[#babaff]/50 text-white font-semibold px-6 py-3 uppercase"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

const ListItem = ({ listItem }: { listItem: ListItemType }) => {
  return (
    <li className="flex gap-4 items-center">
      <div className="h-full flex items-center border-[1px] border-slate-200"></div>
      <div className="flex flex-col gap-4 py-4">
        <div className="flex items-center gap-4">
          <div className="bg-[#babaff] rounded-full p-2 border border-[#8484f2] ">
            <Image src={ElectricityIcon} alt="icon" width={15} height={15} />
          </div>
          <p className="w-full leading-2 text-start text-lg md:text-lg lg:text-xl font-semibold text-slate-600 duration-200">
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
