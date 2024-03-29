import React from "react";
import Image from "next/image";
import TestImage from "../../public/HospitalImage.jpg";
import "../../public/DoctorCard.css";
import Link from "next/link";
import { RightIcon } from "@/public/Icons";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import { news } from "../data";
import { NewsCardType } from "../types";

export default function NewsSection() {
  return (
    <SectionWrapper>
      <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2">
        <h2 className="text-center text-4xl font-bold text-slate-600">News</h2>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-2">
        {news.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </ul>
      <div className="flex justify-center pt-8 px-6">
        <Link
          href="/news"
          className="bg-[#02aeef]/50 hover:bg-[#02aeef]/70 duration-100 text-white font-semibold px-8 py-3 rounded-md"
        >
          Discover More News
        </Link>
      </div>
    </SectionWrapper>
  );
}

const NewsCard = ({ news }: { news: NewsCardType }) => {
  return (
    <Link href={`/news/${news.href}`}>
      <li className="relative group overflow-hidden cursor-pointer rounded shadow-lg">
        {/* Background Image */}
        <div className="group-hover:scale-105 transition duration-500 ease-in-out">
          <Image
            className="object-cover w-full h-54 md:h-72 lg:h-80 xl:h-96 transform group-hover:scale-105 duration-500"
            src={TestImage}
            alt="Card Background"
            width={0}
            height={0}
          />
        </div>
        {/* Text Container */}
        <div
          className="absolute h-full top-1/2 left-1/2 transform -translate-x-1/2 
            -translate-y-1/2 p-4 transition duration-300 ease-in-out w-full bg-[#02aeef]/70
            text-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center"
        >
          <p className="text-base md:text-md lg:text-lg mb-2">{news.date}</p>
          <div className="flex flex-col gap-2 items-center pt-8">
            <p className="text-md md:text-lg lg:text-xl xl:text-xl font-semibold">
              {news.title}
            </p>
            <RightIcon width="40" height="40" iconFillColor="#ffffff" />
          </div>
        </div>
      </li>
    </Link>
  );
};
