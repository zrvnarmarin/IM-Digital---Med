import Image from "next/image";
import ListIcon from "../../public/ListIcon.png";

export default function ListSection() {
  return (
    <section className="flex flex-col gap-8 py-16 px-8 bg-white">
      <ul className="flex flex-col gap-2">
        <li className="flex gap-2 items-center">
          <Image src={ListIcon} height={30} width={30} alt="jg" />
          Our experts and consultants are highly experienced medical
          translators, largely with healthcare, life sciences' or scientific
          backgrounds and proprietary networks of clinicians.
        </li>
        <li className="flex gap-2 items-center">
          <Image src={ListIcon} height={30} width={30} alt="jg" />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </li>
        <li className="flex gap-2 items-center">
          <Image src={ListIcon} height={30} width={30} alt="jg" />
          Our experts and consultants are highly experienced medical
          translators, largely with healthcare, life sciences' or scientific
          backgrounds and proprietary networks of clinicians.
        </li>
        <li className="flex gap-2 items-center">
          <Image src={ListIcon} height={30} width={30} alt="jg" />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </li>
        <li className="flex gap-2 items-center">
          <Image src={ListIcon} height={30} width={30} alt="jg" />
          Our experts and consultants are highly experienced medical
          translators, largely with healthcare, life sciences' or scientific
          backgrounds and proprietary networks of clinicians.
        </li>
        <li className="flex gap-2 items-center">
          <Image src={ListIcon} height={30} width={30} alt="jg" />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </li>
        <li className="flex gap-2 items-center">
          <Image src={ListIcon} height={30} width={30} alt="jg" />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </li>
      </ul>
    </section>
  );
}
