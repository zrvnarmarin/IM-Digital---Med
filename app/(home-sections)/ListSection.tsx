import Image from "next/image";
import ElectricityIcon from "../../public/hospitalIcon.png";
import { ListItemType } from "../types";
import { listItems, listItemsTwo } from "../data";
import ListTestImage from "../../public/listSectionIMageTest.avif";
import SectionWrapper from "../components/wrappers/SectionWrapper";

export default function ListSection() {
  return (
    <SectionWrapper>
      <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2">
        <h2 className="text-center text-4xl font-bold text-slate-600">
          Why are we different
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-4  rounded-md p-4">
        <ul className="flex flex-col gap-4 lg:gap-8">
          {listItems.map((listItem) => (
            <ListItem
              key={listItem.id}
              listItem={listItem}
              borderOrientation="left"
              descriptionTextAlign={"start"}
              titleTextAlign={"start"}
            />
          ))}
        </ul>
        <div className="flex flex-row">
          <Image src={ListTestImage} alt="test" width={0} height={0} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-4 rounded-md p-4">
        <ul className="flex flex-col gap-4 lg:gap-8 order-2">
          {listItemsTwo.map((listItem) => (
            <ListItem
              key={listItem.id}
              listItem={listItem}
              borderOrientation="right"
              descriptionTextAlign={"end"}
              titleTextAlign={"end"}
            />
          ))}
        </ul>
        <div className="flex flex-row">
          <Image src={ListTestImage} alt="test" width={0} height={0} />
        </div>
      </div>
    </SectionWrapper>
  );
}

const ListItem = ({
  listItem,
  borderOrientation,
  titleTextAlign,
  descriptionTextAlign,
}: {
  listItem: ListItemType;
  borderOrientation: "left" | "right";
  titleTextAlign: "start" | "center" | "end";
  descriptionTextAlign: "start" | "center" | "end";
}) => {
  return (
    <li className="flex gap-4 items-center">
      <div
        className={`h-full flex items-center border-[1px] border-slate-200 ${
          borderOrientation === "right" ? "order-1" : ""
        }`}
      ></div>
      <div className="flex flex-col gap-4 py-4">
        <div
          className={`flex flex-row ${
            titleTextAlign === "start" ? "justify-start" : "justify-end"
          } gap-4`}
        >
          <div className="flex flex-row gap-4">
            <div className="bg-[#02aeef]/50 rounded-full p-2 flex">
              <Image src={ElectricityIcon} alt="icon" width={15} height={15} />
            </div>
            <p
              className={`w-full text-slate-500 font-medium text-lg xl:text-xl`}
            >
              {listItem.title}
            </p>
          </div>
        </div>
        <p
          className={`${
            descriptionTextAlign === "start" ? "text-start" : "text-end"
          } w-full text-base xl:text-lg font-light text-slate-500 pt-2`}
        >
          {listItem.description}
        </p>
      </div>
    </li>
  );
};
