import Image from "next/image";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import HeroImage from "../../public/HospitalImage.jpg";
import Footer from "../components/Footer";
import TestImage from "../../public/HospitalImage.jpg";
import { news } from "../data";
import { MagnifierIcon } from "@/public/Icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#FFFFFF]">
      <HeroSection />
      <SearchTestimonialsSection />
      <NewsCardsSection />
      <Footer />
    </main>
  );
}

export const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      <Image
        src={HeroImage}
        alt="Hero Image"
        className="object-cover w-full h-full"
      />

      <div className="absolute bottom-4 lg:bottom-4 left-0 right-0 w-full flex flex-col items-center justify-center text-white text-center">
        <p className="text-xs italic pb-4 px-4 text-start w-full">News</p>
        <div className="bg-slate-700/90 text-3xl text-start font-bold mb-4 px-4 w-full py-3 border-slate-500 border-y-[1px]">
          <h1>News</h1>
        </div>
      </div>
    </section>
  );
};

export const SearchTestimonialsSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 md:flex-row justify-between items-start md:items-center">
        <h1 className="text-center text-4xl font-bold text-slate-600">
          News
        </h1>
        <div className="flex flex-row shadow-lg">
          <div className="bg-[#02aeef]/50 shadow-lg text-white font-semibold px-8 py-3 rounded-l-md">
            <MagnifierIcon width="30px" height="30px" />
          </div>
          <input
            type="text"
            id="email"
            //newest/oldest
            placeholder="Sort By"
            className="text-md md:text-lg border border-[#80d6f7] rounded-r-md w-full md:w-fit text-base xl:text-lg font-light text-slate-500 px-6 py-3"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export const NewsCardsSection = () => {
  return (
    <SectionWrapper>
      <ul className="grid grid-cols-1  gap-10">
        {news.map((newsInfo) => (
          <NewsCard key={newsInfo.id} />
        ))}
      </ul>
      <div className="flex justify-center pt-8 px-6">
        <button
          className="bg-[#02aeef]/50 hover:bg-[#02aeef]/70 duration-100 rounded-md shadow-2xl text-white font-medium px-6 py-3"
        >
          Load More
        </button>
      </div>
    </SectionWrapper>
  );
};

export function NewsCard() {
  return (
    <Link href={`/news/${""}`}>
      <li className="flex h-full flex-col text-primary md:flex-row group group-hover:bg-[#02aeef]/5">
        
        <div className="relative flex min-h-[200px] w-full items-center group-hover:bg-[#02aeef]/5 justify-center rounded-t bg-primary lg:w-2/5 lg:rounded-l lg:rounded-tr-none">
          <Image
            src={TestImage}
            alt="Community Image"
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>

        <div className="flex w-full items-center p-4  sm:px-8 sm:py-6 lg:px-8 lg:py-8 xl:px-12 xl:py-10 group-hover:bg-[#02aeef]/5 duration-100">
          <div className="grid gap-y-4 md:gap-y-6 lg:gap-y-10">
            <p className="text-4xl font-bold text-slate-600">
              Prijavite se na 3. zavod za hitnu medicinu u Zagrebu - ne
              propustite!
            </p>
            <p className="text-base xl:text-lg font-light text-slate-500">
              Ova stvar vrijedi jos smao nekoliko dana
            </p>
            <div className="flex space-x-3 gap-4 items-center">
              <div>
                <p className="text-base xl:text-lg font-medium text-slate-400">
                  24 March, 2024
                </p>
              </div>
            </div>
          </div>
        </div>

      </li>
    </Link>
  );
}
