import Image from "next/image";
import Link from "next/link";
import TestImage from "../../../../public/someDoctorImage.avif";

export default function MoreToKnowSection() {
  return (
    <section className="flex flex-col gap-8 py-12 px-6 md:px-8 lg:px-24 bg-slate-400">
      <h2 className="text-start w-full text-sm md:text-md font-normal">
        Pogledajte naše transformacije zubnim krunicama:
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Image
          src={TestImage}
          width={300}
          height={300}
          alt={"Image service"}
          className="cursor-pointer"
        />
        <Image
          src={TestImage}
          width={300}
          height={300}
          alt={"Image service"}
          className="cursor-pointer"
        />
        <Image
          src={TestImage}
          width={300}
          height={300}
          alt={"Image service"}
          className="cursor-pointer"
        />
        <Image
          src={TestImage}
          width={300}
          height={300}
          alt={"Image service"}
          className="cursor-pointer"
        />
      </div>
      <p className="text-start w-full text-sm md:text-md font-normal">
        5 razloga zašto je cirkon najbolji izbor za Vaše nove zube:
      </p>
      <ul>
        {[1, 2, 3, 4, 5].map((item) => (
          <li className="text-start w-full text-sm md:text-md font-normal">
            {item}. list item
          </li>
        ))}
      </ul>
      <p className="text-start w-full text-sm md:text-md font-normal">
        Cirkon je bezmetalni materijal od kojeg se izrađuju krunice. Metal može
        uzrokovati alergije i često nije estetski prihvatljiv dok je cirkon
        postao standard moderne stomatologije.
      </p>
    </section>
  );
}
