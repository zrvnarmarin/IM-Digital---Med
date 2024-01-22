import React from "react";
import Image, { StaticImageData } from "next/image";
import TestImage from "../../public/HospitalImage.jpg";
import "../../public/DoctorCard.css";
import Link from "next/link";
import { RightIcon } from "@/public/Icons";

export default function NewsSection() {
  return (
    <section className="flex flex-col gap-8 pt-10 sm:pt-12 md:pt-16 lg:pt-28  bg-white">
      <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2 border-b-2 border-[#babaff]">
        <h2 className="w-full leading-2 text-start text-xl md:text-lg lg:text-xl font-medium text-[#babaff]">
          News
        </h2>
      </div>
      <p className="text-start w-full text-md md:text-lg font-normal text-slate-600 px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32">
        See the new informations{" "}
        <span className="font-bold">health workj for you</span>. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Incidunt aspernatur
        exercitationem dolorum maiores sint sequi ut, vero natus sapiente
        magnam!
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  pt-12">
        {news.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </ul>
      <div className="flex justify-center pt-8 px-6">
        <Link
          href="/services"
          className="bg-[#babaff]/50 text-white font-semibold px-6 py-3 uppercase"
        >
          Discover More News
        </Link>
      </div>
    </section>
  );
}

const NewsCard = ({ news }: { news: NewsType }) => {
  return (
    <Link href={`/news/${news.href}`}>
      <li className="relative group overflow-hidden cursor-pointer">
        {/* Background Image */}
        <div className="group-hover:opacity-75 transition duration-500 ease-in-out">
          <Image
            className="object-cover w-full h-54 md:h-72 lg:h-80 xl:h-96 transform group-hover:scale-125 group-hover:rotate-12 duration-500"
            src={TestImage}
            alt="Card Background"
            width={0}
            height={0}
          />
        </div>
        {/* Text Container */}
        <div 
        className="absolute h-full top-1/2 left-1/2 transform -translate-x-1/2 
            -translate-y-1/2 p-4 transition duration-300 ease-in-out w-full bg-[#babaff]/70
            text-white opacity-0 group-hover:opacity-100 flex flex-col justify-center gap-4 items-center"
        >
          <p className="text-base md:text-md lg:text-lg mb-2">{news.date}</p>
          <p className="text-md md:text-lg lg:text-xl xl:text-xl font-semibold">
            {news.title}
          </p>
          <RightIcon
            backgroundFillColor="#ffffff"
            iconFillColor="#babaff"
            width="48px"
            height="48px"
          />
        </div>
      </li>
    </Link>
  );
};

export const news: NewsType[] = [
  {
    id: 1,
    href: "first-news",
    title: "News Number One",
    imageSrc: TestImage,
    date: "12. prosinca 2023.",
  },
  {
    id: 2,
    href: "first-news",
    title: "News Number One",
    imageSrc: TestImage,
    date: "12. prosinca 2023.",
  },
  {
    id: 3,
    href: "first-news",
    title: "News Number One",
    imageSrc: TestImage,
    date: "12. prosinca 2023.",
  },
  {
    id: 4,
    href: "first-news",
    title: "News Number One",
    imageSrc: TestImage,
    date: "12. prosinca 2023.",
  },
  {
    id: 5,
    href: "first-news",
    title: "News Number One",
    imageSrc: TestImage,
    date: "12. prosinca 2023.",
  },
  {
    id: 6,
    href: "first-news",
    title: "News Number One",
    imageSrc: TestImage,
    date: "12. prosinca 2023.",
  },
  {
    id: 7,
    href: "first-news",
    title: "News Number One",
    imageSrc: TestImage,
    date: "12. prosinca 2023.",
  },
  {
    id: 8,
    href: "first-news",
    title: "News Number One",
    imageSrc: TestImage,
    date: "12. prosinca 2023.",
  },
];

export type NewsType = {
  id: number;
  href: string;
  title: string;
  imageSrc: StaticImageData;
  date: string;
};
