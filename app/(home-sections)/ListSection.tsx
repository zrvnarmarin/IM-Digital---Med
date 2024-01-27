import Image from "next/image";
import Link from "next/link";
import ElectricityIcon from "../../public/ElectricityIcon.png";
import { ListItemType } from "../types";
import { listItems } from "../data";
import ListTestImage from "../../public/listSectionIMageTest.avif";
import SectionWrapper from "../components/wrappers/SectionWrapper";

export default function ListSection() {
  return (
    <SectionWrapper>
      <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2">
        <h2 className="text-center text-2xl xs:text-4xl font-medium text-slate-600 underline-offset-8 decoration-1 underline decoration-[#babaff]">
          Why are we different
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-4">
        <ul className="flex flex-col gap-4 lg:gap-8">
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
    </SectionWrapper>
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
          <p className="w-full text-slate-500 text-start font-normal text-xl xl:text-2xl">
            {listItem.title}
          </p>
        </div>
        <p className="text-start w-full text-base xl:text-lg font-light text-slate-500 pt-2">
          {listItem.description}
        </p>
      </div>
    </li>
  );
};
